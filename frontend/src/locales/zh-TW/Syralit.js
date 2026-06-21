export const Syralit = {
  title: "用 Go 寫互動式資料應用",
  subtitle: "受 Streamlit 啟發的 Go 原生框架，資料應用、儀表板與 AI 工具一次到位",
  description:
    "寫 Go 函式，就得到一個即時的 web app — 不寫 JavaScript、不寫 HTML 模板、不需要前端 build 步驟。Syralit 讓你用熟悉的 Go 直接打造互動式資料應用，並對 Insyra 的 DataTable 與 DataList 提供 first-class 支援。",
  repo: {
    text: "查看 Syralit 原始碼",
    link: "https://github.com/HazelnutParadise/syralit",
  },
  install: {
    title: "快速開始",
    steps: [
      "go install github.com/HazelnutParadise/syralit/cmd/syralit@latest",
      "syralit new myapp",
      "cd myapp",
      "syralit dev",
    ],
    note: "需要 Go 1.25 以上。",
  },
  screenshotsTitle: "實際畫面",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/HazelnutParadise/syralit/master/docs/images/showcase-dashboard.png",
      alt: "Syralit 儀表板範例",
      caption: "儀表板：用 Go 函式直接生出互動式 KPI 與圖表",
    },
    {
      src: "https://raw.githubusercontent.com/HazelnutParadise/syralit/master/docs/images/data-explorer-analysis.png",
      alt: "Syralit 資料探索分析畫面",
      caption: "資料探索：把分析流程包裝成可互動的工具",
    },
    {
      src: "https://raw.githubusercontent.com/HazelnutParadise/syralit/master/docs/images/form-app-registration.png",
      alt: "Syralit 表單應用範例",
      caption: "表單應用：豐富 widget 與多頁結構，內建狀態與 session",
    },
  ],
  featuresTitle: "主要功能",
  keyFeatures: [
    {
      icon: "🐹",
      title: "純 Go，零前端",
      description:
        "寫 Go 函式就生出 live web app，不必碰 JavaScript、HTML 模板或前端 build 步驟。",
    },
    {
      icon: "🧩",
      title: "豐富輸入元件",
      description:
        "文字、滑桿、日期、檔案上傳、相機與音訊輸入等完整 widget，互動表單隨手可得。",
    },
    {
      icon: "📊",
      title: "互動式圖表",
      description:
        "內建 Chart.js 驅動的折線、長條、散布、圓餅、直方圖與雷達圖，搭配表格與 Markdown 顯示元件。",
    },
    {
      icon: "🗂️",
      title: "版面工具",
      description: "欄位、分頁、側欄與摺疊區塊，輕鬆組合出清楚好讀的版面。",
    },
    {
      icon: "🔄",
      title: "狀態與 Session",
      description:
        "內建狀態管理與 session 處理，互動行為與資料快取、串流都自然好寫。",
    },
    {
      icon: "📑",
      title: "多頁應用",
      description: "多頁結構，支援使用者驗證與角色權限控管。",
    },
    {
      icon: "⚡",
      title: "Hot Reload",
      description: "開發模式即時重載並保留狀態，改了程式碼馬上看到結果。",
    },
    {
      icon: "💬",
      title: "Chat UI 與資料庫",
      description:
        "內建聊天介面元件與資料庫整合，打造 AI 工具與資料後台更順手。",
    },
    {
      icon: "🔗",
      title: "Insyra first-class 整合",
      description:
        "透過獨立 adapter 對 Insyra DataTable／DataList 提供原生支援，框架核心仍與 Insyra 解耦。",
    },
  ],
  ecosystemNote:
    "Syralit 是 Insyra 生態系的應用層：用 Insyra 處理資料，用 Syralit 把成果變成人人能用的互動式應用。",
  backText: "回首頁",
  backHref: "#",
};
