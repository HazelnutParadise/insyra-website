# Insyra 官網 — 專案說明與維護規則

Insyra（`github.com/HazelnutParadise/insyra`）官方網站的原始碼。
本體 Insyra 是 Go 資料分析庫；本 repo 只是它的展示官網。

## 技術架構

- 前端：Vue 3 + Vite，位於 `frontend/`。**未使用 vue-router**，改用 hash + `App.vue` 的
  `selectPage()` 手動切換 `<component :is>`。新增頁面時要在 `App.vue` 同時補上
  `import`、`selectPage` 的 `case`，以及 `updateLanguage` 內判斷頁名的三元鏈。
- 雙語 i18n：`frontend/src/locales/`，`zh-TW/` 與 `eng/` 兩套，各自在
  `zh-TW.js` / `eng.js` 彙整，最後由 `lang.js` 合併。**任何文案改動都要兩種語言同步更新。**
- 後端：根目錄 Go（gin），僅提供靜態檔與下載 API，與內容無關。

## 版本資訊的權威來源

更新版本相關內容時，**以本機的 Insyra 原始碼為準，不要只靠網路或印象**：

- 兄弟目錄 `../insyra/`（與本 repo 同層）。
- 版本號與版本名看 `../insyra/version.go`（`Version`、`VersionName`）。
- 功能與套件清單看 `../insyra/README_TW.md`、`../insyra/README.md`、`../insyra/Docs/`。
- 已發布版本看 `git -C ../insyra tag`；注意 `version.go` 可能已為**尚未發布**的下一版
  （dev 分支）bump 過版號，官網應以**最新已發布的 tag** 為準。

## 首頁「版本介紹區段」規則（重要）

首頁 `frontend/src/views/Main.vue` 的 `version-intro` 區段（文案在
`locales/*/Main.js` 的 `versionIntro`）**只介紹當前的 minor 版本（v0.幾），不綁 patch 號**。

原因：只有每個 **minor 版本（v0.幾）** 才有版本名與對應主題，patch（v0.幾.幾）沒有。

- `title` 用「v0.幾 — 版本名」形式（例：`v0.2 — Pier-2 駁二`），**不要**寫成
  `v0.2.17` 這種 patch 號。
- 版本主題名取自台灣的藝術與文創特區，**自 v0.2「Pier-2 駁二」開始**；v0.1 屬奠基
  階段、沒有版本主題名。已知對應：v0.2 = Pier-2（高雄駁二）、v0.3 = Huashan（台北華山）。
- patch 更新（例如 v0.2.18 → v0.2.19）只更新區段內的事實內容，**不改版本定位、不出現
  patch 號當標題**。

## 升上新 minor 版時的搬移流程（重要）

當 Insyra 正式發布新的 minor 版（例如 v0.2 → v0.3）時：

1. 把首頁 `versionIntro`（上一版，例如 v0.2 Pier-2）整理成一個物件，**整塊移入**歷史
   版本頁的資料：`locales/zh-TW/VersionHistory.js` 與 `locales/eng/VersionHistory.js`
   的 `versions` 陣列（加到陣列最前面，最新的舊版在最上面）。兩語言都要做。
2. 把首頁 `versionIntro` 換成新版（新的 `title`、版本名、目標、`currentNote`、`history` 連結）。
3. 歷史版本頁 `current` 區塊更新為新的當前版本。

歷史版本頁元件為 `frontend/src/views/VersionHistory.vue`，入口是首頁版本介紹區下方的
「查看歷史版本」連結（hash `#VersionHistory`），不放進主導覽列。

## 一般原則

- 文案更新務必 zh-TW 與 eng 兩語言同步。
- 用語用台灣繁體中文習慣，避免中國用語與翻譯腔。
- 不確定的功能細節先查 `../insyra/` 的文件或原始碼，不要臆測 patch 級的內容。
