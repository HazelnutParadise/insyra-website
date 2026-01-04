import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";

/*
  build_locales.js (ESM)

  This script dynamically imports frontend locale modules at build time (using ESM dynamic import)
  and writes aggregated JSON files into frontend/dist/locales/<lang>.json.

  Behavior:
  - Looks for locale directories under <repoRoot>/frontend/src/locales (e.g. `eng`, `zh-TW`).
  - For each language directory it imports every `.js` file inside and merges the module's named
    exports into one aggregated JSON object. Named exports that are objects become properties of
    the aggregated object (so `export const navbar = { ... }` becomes aggregated.navbar).
  - If there are top-level aggregator modules in the `locales` directory (e.g. `eng.js`), the script
    will attempt to import them and, when they export an aggregated object (heuristic), write them
    as `<name>.json` as well.
  - The script is intentionally pragmatic: it executes the locale modules with Node's ESM loader.
    That is more robust than naive regex parsing and supports modules that `import` other local
    locale files (which is how your frontend organizes them).
  - If a module export is not JSON-serializable (e.g. functions), it will be skipped with a warning.
*/

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, ".."); // scripts/.. => repo root
const srcLocalesCandidates = [
  path.join(projectRoot, "frontend", "src", "locales"),
  path.join(projectRoot, "frontend", "locales"),
  path.join(projectRoot, "src", "locales"),
];

async function findSrcLocalesDir() {
  for (const p of srcLocalesCandidates) {
    try {
      const st = await fs.stat(p);
      if (st.isDirectory()) return p;
    } catch (e) {
      // ignore
    }
  }
  // fallback: try relative to process.cwd()
  const cwdCandidate = path.join(process.cwd(), "frontend", "src", "locales");
  try {
    const st = await fs.stat(cwdCandidate);
    if (st.isDirectory()) return cwdCandidate;
  } catch (e) {}
  return null;
}

function ensureDirSync(dir) {
  if (!fsSync.existsSync(dir)) fsSync.mkdirSync(dir, { recursive: true });
}

function isPlainObject(v) {
  return v && typeof v === "object" && !Array.isArray(v);
}

function safeSerialize(value) {
  // Try JSON.stringify; if it fails (circular or function), skip by returning undefined
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (err) {
    return undefined;
  }
}

async function importModuleAsObject(filePath) {
  try {
    const url = pathToFileURL(filePath).href;
    const mod = await import(url);
    return mod;
  } catch (err) {
    console.warn(
      `Warning: failed to import ${filePath}: ${err && err.message ? err.message : err}`,
    );
    return null;
  }
}

function aggregateNamedExports(mod) {
  const result = {};
  if (!mod) return result;
  for (const key of Object.keys(mod)) {
    if (key === "default") {
      // If default is an object that looks like an aggregated locale, consider merging it under 'default' or merging its keys
      const def = mod.default;
      if (isPlainObject(def)) {
        // merge top-level keys to result (prefer explicit named exports, but include defaults)
        for (const k of Object.keys(def)) {
          const safe = safeSerialize(def[k]);
          if (safe !== undefined) result[k] = safe;
        }
      }
      continue;
    }
    const val = mod[key];
    const safe = safeSerialize(val);
    if (safe === undefined) {
      console.warn(`Skipping non-serializable export "${key}"`);
      continue;
    }
    result[key] = safe;
  }
  return result;
}

function findAggregatedExportFromModule(mod) {
  if (!mod) return null;
  // Heuristic: prefer an exported object that contains typical locale keys
  const localeCandidates = [
    "siteTitle",
    "pageTitle",
    "navbar",
    "Main",
    "Features",
  ];
  // 1) If module has a named export which itself is an object and contains locale-like keys, return it
  for (const key of Object.keys(mod)) {
    const val = mod[key];
    if (isPlainObject(val)) {
      for (const cand of localeCandidates) {
        if (Object.prototype.hasOwnProperty.call(val, cand)) {
          return val;
        }
      }
    }
  }
  // 2) If default export is a plain object, return it
  if (isPlainObject(mod.default)) return mod.default;
  // 3) fallback: build aggregated object of named exports (only serializable ones)
  const agg = aggregateNamedExports(mod);
  if (Object.keys(agg).length > 0) return agg;
  return null;
}

async function build() {
  const srcLocalesDir = await findSrcLocalesDir();
  if (!srcLocalesDir) {
    console.error(
      "Error: could not find frontend/src/locales directory. Tried common locations.",
    );
    process.exit(1);
  }
  const outLocalesDir = path.join(
    path.dirname(srcLocalesDir),
    "..",
    "dist",
    "locales",
  );
  ensureDirSync(outLocalesDir);

  console.log(`Source locales dir: ${srcLocalesDir}`);
  console.log(`Output locales dir: ${outLocalesDir}`);

  // First process subdirectories (eng, zh-TW, etc.)
  const dirents = await fs.readdir(srcLocalesDir, { withFileTypes: true });
  const langDirs = dirents.filter((d) => d.isDirectory()).map((d) => d.name);

  for (const lang of langDirs) {
    const langDir = path.join(srcLocalesDir, lang);
    const files = await fs.readdir(langDir);
    const aggregated = {};
    for (const f of files) {
      if (!f.endsWith(".js") && !f.endsWith(".mjs")) continue;
      const filePath = path.join(langDir, f);
      const mod = await importModuleAsObject(filePath);
      if (!mod) continue;
      // Merge named exports (and default if it's an aggregated object)
      const exportObj = findAggregatedExportFromModule(mod);
      if (exportObj && Object.keys(exportObj).length > 0) {
        // If exportObj is an aggregated object containing page-level exports (Main, Features etc.) or siteTitle,
        // merge it directly under aggregated (preserving keys).
        for (const k of Object.keys(exportObj)) {
          aggregated[k] = exportObj[k];
        }
      } else {
        // fallback: merge each serializable named export
        const named = aggregateNamedExports(mod);
        for (const k of Object.keys(named)) {
          aggregated[k] = named[k];
        }
      }
    }
    const outPath = path.join(outLocalesDir, `${lang}.json`);
    await fs.writeFile(outPath, JSON.stringify(aggregated, null, 2), "utf8");
    console.log(`Wrote ${outPath}`);
  }

  // Also process top-level aggregator files like eng.js, zh-TW.js, lang.js if present
  const topFiles = dirents
    .filter((d) => d.isFile() && d.name.endsWith(".js"))
    .map((d) => d.name);
  for (const fname of topFiles) {
    const fullPath = path.join(srcLocalesDir, fname);
    const mod = await importModuleAsObject(fullPath);
    if (!mod) continue;
    const agg = findAggregatedExportFromModule(mod);
    if (agg && Object.keys(agg).length > 0) {
      const outName = fname.replace(/\.js$/i, "") + ".json";
      const outPath = path.join(outLocalesDir, outName);
      await fs.writeFile(outPath, JSON.stringify(agg, null, 2), "utf8");
      console.log(`Wrote ${outPath} (from top-level ${fname})`);
    } else {
      console.log(
        `No aggregated exports found in top-level ${fname}, skipping.`,
      );
    }
  }

  console.log("Locales build complete.");
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))
) {
  // run as main
  build().catch((err) => {
    console.error("Locales build failed:", err && err.stack ? err.stack : err);
    process.exit(1);
  });
}

export { build as buildLocales };
