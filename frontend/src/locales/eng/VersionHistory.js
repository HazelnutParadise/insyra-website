export const VersionHistory = {
  title: "Version History",
  description:
    "This page collects the Insyra milestones that newer versions have superseded. For the current version, see the home page.",
  namingNote: {
    label: "About version naming: ",
    text: 'Insyra’s version codenames are drawn from art and cultural districts in Taiwan, starting with v0.2 "Pier-2." The earlier v0.1 line was the foundational stage and has no codename.',
  },
  // One object per minor version. When moving up to a new minor (e.g. v0.3),
  // turn the previous home-page versionIntro (e.g. v0.2 Pier-2) into an object
  // and prepend it to this array.
  versions: [
    {
      version: "v0.2",
      codename: "Pier-2",
      status: "Maturation stage",
      period: "v0.2.0 – v0.2.19",
      summary:
        'Under the theme "Crafting Your Art of Data," Pier-2 rounded out the features Insyra was missing, made it genuinely usable for real-world data analysis, and grew Insyra from a single Go package into a complete working experience: a documentation hub, CLI automation, guided tutorials, and dedicated AI agent skills.',
      highlightsTitle: "Key milestones",
      highlights: [
        "Introduced the high-precision finance package, and refactored stats with generalized linear models (GLM) and nonparametric tests.",
        "Introduced CCL (Column Calculation Language) for building derived columns and conditional logic with Excel-style formulas, later expanded with a full math function library.",
        "Filled in the everyday analysis gaps: time series and window transforms, SQL with embedded databases, GroupBy / Pivot / aggregation, missing-value imputation, sampling and train/test splitting, categorical encoding, the Describe summary API, and feature scaling.",
        "Rewrote the atomic core, making many operations 5–100x faster.",
        "Shaped the ecosystem: the documentation hub, CLI / REPL with .isr scripts, guided tutorial tracks, and dedicated skills for coding agents.",
      ],
    },
    {
      version: "v0.1",
      codename: "",
      status: "Foundational stage",
      period: "v0.1.0 – v0.1.9",
      summary:
        "Where Insyra began: establishing DataList and DataTable as the core analysis model, and introducing the isr syntactic-sugar package as the recommended entry point for new projects.",
      highlightsTitle: "Key milestones",
      highlights: [
        "Established DataList / DataTable as the two core data structures with their basic analysis methods.",
        "Introduced the isr syntactic-sugar package as a cleaner, smoother entry point for new projects.",
        "Shipped datafetch for pulling web data such as Google Maps business reviews.",
        "Built out the early package ecosystem: statistics, visualization, parallel processing, CSV/Excel conversion, and Python integration.",
      ],
    },
  ],
  current: {
    label: "Current version",
    version: "v0.3 — Huashan",
    note: 'v0.3 "Huashan" is the current release line, themed "Create for the Next." See the home page for the full introduction.',
    backText: "Back to the current version",
    backHref: "#",
  },
};
