export const VersionHistory = {
  title: "歷史版本",
  description:
    "本頁收錄已被新版本取代的 Insyra 里程碑版本。當前版本介紹請見首頁。",
  namingNote: {
    label: "關於版本命名：",
    text: "Insyra 的版本主題名取自台灣的藝術與文創特區，自 v0.2「Pier-2 駁二」開始。更早的 v0.1 屬於奠基階段，沒有版本主題名。",
  },
  // 每個 minor 版本一個物件。升上新的 minor 版（例如 v0.3）時，
  // 把首頁的 versionIntro（例如 v0.2 Pier-2）整理成物件並 unshift 進 versions 陣列。
  versions: [
    {
      version: "v0.2",
      codename: "Pier-2 駁二",
      status: "實用化階段",
      period: "v0.2.0 – v0.2.19",
      summary:
        "以「藝塑數據之美」為題，把 Insyra 缺漏的功能補齊，讓它真正能用於真實的資料分析工作，並從單一 Go 套件長成一整套工作體驗：文件入口、CLI 自動化、主題式教學，加上專用的 AI agent skills。",
      highlightsTitle: "重要里程碑",
      highlights: [
        "推出高精度 finance 套件，重構 stats 並加入廣義線性模型（GLM）與無母數檢定。",
        "推出 CCL（Column Calculation Language）欄位運算語言，用 Excel 風格公式建立衍生欄位與條件邏輯，並一路擴充出完整的數學函數庫。",
        "補齊日常分析環節：時序與視窗轉換、SQL 與內嵌資料庫、GroupBy／Pivot／聚合、缺失值補值、抽樣與訓練／測試切分、類別編碼、Describe 摘要 API 與特徵縮放。",
        "重寫原子核心，讓多項運算快上 5–100 倍。",
        "生態系成形：文件入口、CLI／REPL 與 .isr 腳本、主題式教學路線，以及給 coding agent 的專用 skills。",
      ],
    },
    {
      version: "v0.1",
      codename: "",
      status: "奠基階段",
      period: "v0.1.0 – v0.1.9",
      summary:
        "Insyra 的起點：奠定 DataList 與 DataTable 兩個核心分析模型，並推出 isr 語法糖套件作為新專案的建議入口。",
      highlightsTitle: "重要里程碑",
      highlights: [
        "確立 DataList / DataTable 兩個核心資料結構與其基本分析方法。",
        "推出 isr 語法糖套件，作為新專案更精簡、更流暢的入口。",
        "新增 datafetch，可抓取 Google 地圖商家評論等網路資料。",
        "建立早期套件生態：統計、視覺化、平行處理、CSV／Excel 轉換、Python 整合。",
      ],
    },
  ],
  current: {
    label: "目前版本",
    version: "v0.3 — Huashan 華山",
    note: "v0.3「Huashan 華山」是目前的最新版本，以「開創新數界」為題，完整介紹請見首頁。",
    backText: "回到目前版本",
    backHref: "#",
  },
};
