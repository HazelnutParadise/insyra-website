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
    version: "v0.2 — Pier-2 駁二",
    note: 'v0.2「Pier-2 駁二」仍是最新版本，完整介紹請見首頁。當 v0.3「Huashan 華山」正式發布後，Pier-2 的介紹就會整塊移至此頁。',
    backText: "回到目前版本",
    backHref: "#",
  },
};
