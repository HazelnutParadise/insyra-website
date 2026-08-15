export const Main = {
  hero: {
    slogan: "太快、太美、太簡單",
    title: "邂逅 Insyra",
    description: "以 Insyra 為核心的 Go 資料分析生態系，涵蓋資料讀取、整理、統計、視覺化、機器學習與深度學習，並整合 Idensyra 桌面 IDE 與 Syralit 互動式資料應用框架。",
    audio: {
      url: "https://src.hazelnut-paradise.com/Insyra_introduce_TW.wav",
      error: "您的瀏覽器不支援音訊播放器。",
      description: "聆聽 Insyra 介紹",
    },
    button: {
      main: "開始使用",
      docs: "說明文件",
      secondary1: "GoDoc",
      secondary2: "GitHub",
      chat: "與 AI 對談",
      mcp: "MCP 伺服器",
    },
    audioDescription: "聆聽 Insyra 產品介紹",
  },
  featureItemSection: {
    features: {
      feature1: {
        id: 1,
        title: "以 DataList 與 DataTable 為核心",
        description:
          "Insyra 以 <strong>DataList</strong> 與 <strong>DataTable</strong> 兩個核心結構建立 Go 中的資料工作流，讓序列處理與表格分析都能用一致、好讀的方式完成。",
        learnMore: {
          href: "#Features",
          text: "查看核心能力",
        },
      },
      feature2: {
        id: 2,
        title: "文件優先的上手體驗",
        description:
          "官方文件現在是最快的學習入口，整合套件說明、範例與主題式導覽，讓新使用者不用在零散片段中摸索，就能快速進入正確工作流。",
        learnMore: {
          href: "https://hazelnutparadise.github.io/insyra/",
          text: "打開說明文件",
        },
      },
      feature3: {
        id: 3,
        title: "CLI、REPL 與 .isr 腳本",
        description:
          "透過 <strong>insyra</strong> CLI 做一次性自動化、在 REPL 互動探索、用 <code>.isr</code> 腳本保存流程，或在 Go 應用程式中重用同一套 DSL 指令語言。",
        learnMore: {
          href: "https://hazelnutparadise.github.io/insyra/#/cli-dsl",
          text: "查看 CLI 工作流",
        },
      },
      feature4: {
        id: 4,
        title: "AI / Agent Skills",
        description:
          "Insyra 現在提供專門給 coding agent 使用的 <strong>skills</strong>，同時涵蓋 API 型 Go 工作流與 CLI 型工作流，讓 agent 能更準確地選擇正確介面並對齊最新文件。",
        learnMore: {
          href: "https://github.com/HazelnutParadise/insyra#ai--agent-skills",
          text: "查看 skills 總覽",
        },
      },
      feature5: {
        id: 5,
        title: "主題式教學路線",
        description:
          "透過情境導向教學快速學習 Insyra，包含銷售分析、資料品質、Parquet 串流、A/B 統計、儀表板、最佳化與 Python 加 parallel 混合流程。",
        learnMore: {
          href: "https://hazelnutparadise.github.io/insyra/#/tutorials/README",
          text: "瀏覽教學總覽",
        },
      },
      feature6: {
        id: 6,
        title: "CCL 與 Parquet 工作流",
        description:
          "使用 <strong>CCL</strong> 撰寫 Excel 風格公式與條件邏輯，並把同樣的思路延伸到 <strong>Parquet</strong> 讀取、篩選與轉換，建立更完整的大型資料流程。",
        learnMore: {
          href: "#Features",
          text: "了解 CCL 與 Parquet",
        },
      },
      feature7: {
        id: 7,
        title: "視覺化與 Python 整合",
        description:
          "以 <strong>plot</strong> 製作互動式圖表、用 <strong>gplot</strong> 產出靜態報表，或透過 <strong>py</strong> 接到 Python 生態系，在 Go 效能與 Python 套件之間取得平衡。",
        learnMore: {
          href: "#Features",
          text: "查看分析套件",
        },
      },
      feature8: {
        id: 8,
        title: "專用 IDE",
        description:
          "搭配 <strong>Idensyra</strong> 專用輕量 IDE，可在更少環境設定下快速開始分析工作，讓 Insyra 的上手體驗更直接。",
        learnMore: {
          href: "#Idensyra",
          text: "了解 <strong>Idensyra</strong>",
        },
      },
      feature9: {
        id: 9,
        title: "內建統計與金融分析",
        description:
          "<strong>stats</strong> 套件全面重構，新增集群分析與因素分析，並改為明確回傳錯誤、加強對齊 R；<strong>finance</strong> 是全新加入的高精度金融計算套件，提供 TVM、NPV/IRR/XIRR、折舊、債券定價等基於定點小數的高精度運算。",
        learnMore: {
          href: "#Features",
          text: "查看 stats 與 finance",
        },
      },
      feature10: {
        id: 10,
        title: "在 Go 裡完成機器學習、深度學習與 GPU 加速",
        description:
          "v0.3.1 新增 <strong>ml</strong> 與 <strong>nn</strong>：前者提供回歸、樹模型、交叉驗證與 ONNX 匯出，後者能執行真實 ONNX 模型、訓練神經網路並讀寫 SafeTensors。大型矩陣運算可在可用裝置上加速，沒有裝置時仍回退到相同結果的 CPU 路徑。",
        learnMore: {
          href: "#Features",
          text: "探索 ml、nn 與 accel",
        },
      },
    },
  },
  versionIntro: {
    badge: "目前版本",
    title: "v0.3 — Huashan 華山",
    slogan: "開創新數界",
    versionName: "版本名稱：",
    versionNameValue: "Huashan，取自台灣台北的華山1914文化創意產業園區",
    placeIntro: "景點介紹：",
    placeIntroValue:
      "華山1914文化創意產業園區位於台北市中心，前身是 1914 年日治時期創立的釀酒廠、後來的台北酒廠，1987 年酒廠遷出後一度閒置，1999 年起轉型為藝文展演空間。如今這片市定古蹟聚集展覽、演出、市集與文創品牌，是台北文創的代表據點。",
    versionFeatures: "v0.3 想做到什麼：",
    versionFeaturesValue:
      "站在 Pier-2 補齊的基礎上，向新模組與新能力擴展。v0.3.0 推出量化金融套件 quant（投資組合指標、過擬合診斷、walk-forward 驗證），新增 AtomicDoAll 一次原子鎖定多個 DataList／DataTable，CSV 與 JSON 讀取改為欄位級型別推斷（整數欄以 int64 載入），DataList／DataTable 新增 ShowTo／ShowRangeTo／SummaryTo 可輸出到任意 io.Writer，分位數計算全面統一為 R Type 7，datafetch 加入 TWGeocoding 台灣逆地理編碼，並完成全庫稽核、修正超過 80 個確認缺陷。v0.3.1 接著加入 ml 機器學習、nn 深度學習與 accel 加速執行環境，讓模型訓練、ONNX 推論與裝置加速都能留在 Go 的工作流程裡。",
    pierIntro: "這個版本線的重要性：",
    pierIntroValue:
      "華山文創園區從舊酒廠轉型為創意場域，重點從來不是保存過去，而是站在既有基礎上創造下一階段。v0.3 是同樣的定位：Pier-2 把真實資料分析需要的環節補齊之後，Huashan 開始向外開創——新的專業套件、更嚴謹的統計底層、更可組合的輸出介面，讓 Insyra 從「能用於真實分析」走向「開拓新的分析場景」。",
    currentNote: "目前最新發布版本為 v0.3.1，延續 Huashan 華山「Create for the Next，開創新數界」的主題。",
    history: {
      text: "查看歷史版本",
      href: "#VersionHistory",
    },
    imageAlt: "華山1914文化創意產業園區",
    imageSource:
      "圖片來源：東南旅遊，https://www.settour.com.tw/travel_guide/%E5%8F%B0%E7%81%A3/%E8%8F%AF%E5%B1%B11914%E6%96%87%E5%8C%96%E5%89%B5%E6%84%8F%E7%94%A2%E6%A5%AD%E5%9C%92%E5%8D%80/attractions_POI0000004769.html",
  },
};
