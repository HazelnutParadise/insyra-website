export const Idensyra = {
  title: "輕巧而強大的資料分析IDE",
  subtitle: "開箱即用的桌面 IDE，內建 Insyra 與 Go 執行環境",
  description:
    "Idensyra 基於 Wails v2 構建，是一款輕量卻不可小覷的 Go 資料分析 IDE。內建 Yaegi 即時執行環境與 Visual Studio Code 同款編輯器，並預裝 Insyra。同時相容 Jupyter Notebook 的 .ipynb 檔案，並提供更先進的互動式筆記本（igonb），支援 Go 與 Python 在同一個工作流程中各自發揮所長。讓您無需設定複雜環境即可享受愉快的資料分析體驗。",
  downloadButton: {
    text: "下載 Idensyra",
  },
  repo: {
    text: "查看 Idensyra 原始碼",
    link: "https://github.com/HazelnutParadise/idensyra",
  },
  docsLink: "https://github.com/HazelnutParadise/idensyra",
  screenshots: [
    "https://github.com/HazelnutParadise/idensyra/blob/main/ui_example.png?raw=true",
    "https://github.com/HazelnutParadise/idensyra/blob/main/ui_example2.png?raw=true",
  ],
  screenshotsTitle: "截圖",
  featuresTitle: "主要功能",
  supportedTitle: "支援的套件",

  // 更詳細的關鍵特性說明
  keyFeatures: [
    {
      icon: "⚡",
      title: "Live Run（即時執行）",
      description:
        "啟用 Live Run 後，編輯時會自動在背景執行程式（帶防抖機制），方便立即看到結果與輸出。",
    },
    {
      icon: "🔗",
      title: "深度 Insyra 整合",
      description:
        "預裝 Insyra 並支援多個子套件（例如 isr、plot、gplot、parquet 等），可直接使用資料分析與視覺化工具。",
    },
    {
      icon: "📒",
      title: "Notebook 工作流",
      description:
        "相容 Jupyter Notebook 的 .ipynb 檔案，並提供更先進的互動式筆記本（igonb）。支援 Go 與 Python 在同一個工作流程中各自發揮所長，並具備 Cell 管理、Markdown 即時預覽與多種執行模式。",
    },
    {
      icon: "🔁",
      title: "Go ↔ Python 互操作",
      description:
        "在 igonb 中可共享變數，允許 Go 與 Python Cell 協同工作，適合混合語言的分析流程。",
    },
    {
      icon: "📦",
      title: "圖形化管理 Python 套件",
      description: "再也不用打指令，輕鬆管理您的 Python 環境與依賴。",
    },
    {
      icon: "📁",
      title: "工作區與檔案管理",
      description:
        "啟動時建立臨時工作區，支援建立/開啟工作區資料夾、多檔案管理、拖放、匯入/匯出與自動暫存。",
    },
    {
      icon: "🔍",
      title: "豐富預覽與輸出格式",
      description:
        "支援 HTML/Markdown/CSV/TSV/Excel/影像/影片/PDF 等預覽，以及 ANSI 彩色輸出，便於閱讀與檢視結果。",
    },
    {
      icon: "🎨",
      title: "主題與使用體驗",
      description:
        "支援系統深/淺色並可手動切換，前端資源本地打包可離線使用，並提供操作通知與進度提示。",
    },
    {
      icon: "⚙️",
      title: "編輯器便利功能",
      description:
        "支援 Undo/Redo、多游標、程式碼摺疊、Minimap、字體大小調整等提升生產力的工具。",
    },
  ],

  useCasesTitle: "適用對象",
  useCases: [
    {
      title: "學生與自學者",
      description:
        "學習程式語言與資料科學的絕佳起點，即時看到執行結果，讓學習更有成就感。",
    },
    {
      title: "辦公室上班族",
      description:
        "輕鬆處理繁瑣的 Excel 與 CSV 檔案，自動化重複性工作，大幅提升辦公效率。",
    },
    {
      title: "財務與會計人員",
      description: "進行報表核對與數據統計，利用高效能運算確保帳務準確無誤。",
    },
    {
      title: "中小企業與電商賣家",
      description: "追蹤銷售數據與庫存趨勢，優化進貨策略並精準掌握經營脈動。",
    },
    {
      title: "產品經理",
      description: "分析用戶行為與產品指標，透過數據驅動產品迭代與功能優化。",
    },
    {
      title: "資料分析愛好者",
      description:
        "整理個人興趣數據（如理財、運動記錄），發掘生活中的規律與驚喜。",
    },
    {
      title: "專業研究員",
      description:
        "進行市場調查或學術研究，利用強大的數據處理能力從海量資訊中提取洞察。",
    },
    {
      title: "教師與講師",
      description:
        "製作互動式教材與筆記，讓教學過程更生動有趣，學生更容易理解。",
    },
    {
      title: "行銷數據專家",
      description:
        "使用內建的 mkt 套件進行 RFM 分析與顧客分群，快速制定數據驅動的行銷策略。",
    },
  ],

  // 支援的 Insyra 套件清單（列出常用）
  supportedPackages: [
    "insyra",
    "insyra/isr",
    "insyra/stats",
    "insyra/plot",
    "insyra/gplot",
    "insyra/datafetch",
    "insyra/csvxl",
    "insyra/parquet",
    "insyra/mkt",
    "insyra/parallel",
    "insyra/lpgen",
    "insyra/py",
  ],

  backToHowToUseText: "回到「如何使用」",
};
