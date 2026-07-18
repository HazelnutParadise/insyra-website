export const Main = {
  hero: {
    slogan: "Fast, Lovely, Easy to Use",
    title: "Meet Insyra",
    description:
      "A Go data analysis ecosystem built around Insyra: the analysis library, the Idensyra desktop IDE, and Syralit for building interactive data apps.",
    audio: {
      url: "https://src.hazelnut-paradise.com/Insyra_introduce.wav",
      error: "Your browser does not support the audio player.",
      description: "Listen to Insyra introduction",
    },
    button: {
      main: "Get Started",
      docs: "Documentation",
      secondary1: "GoDoc",
      secondary2: "GitHub",
      chat: "Chat with AI",
      mcp: "MCP Server",
    },
  },
  featureItemSection: {
    features: {
      feature1: {
        id: 1,
        title: "DataList and DataTable at the Core",
        description:
          "Insyra gives you two practical core structures for analysis in Go: <strong>DataList</strong> for series-style work and <strong>DataTable</strong> for tabular workflows, both designed for readable everyday data wrangling.",
        learnMore: {
          href: "#Features",
          text: "Explore the core structures",
        },
      },
      feature2: {
        id: 2,
        title: "Docs-First Onboarding",
        description:
          "The official docs now act as the fastest way to learn Insyra, with package references, practical examples, and a guided entry point for new users who want a clear path instead of scattered snippets.",
        learnMore: {
          href: "https://hazelnutparadise.github.io/insyra/",
          text: "Open the documentation",
        },
      },
      feature3: {
        id: 3,
        title: "CLI, REPL, and .isr Scripts",
        description:
          "Use the <strong>insyra</strong> CLI for one-shot automation, interactive REPL exploration, reusable <code>.isr</code> scripts, or the shared Go DSL when the same command language needs to run inside applications.",
        learnMore: {
          href: "https://hazelnutparadise.github.io/insyra/#/cli-dsl",
          text: "See the CLI workflow",
        },
      },
      feature4: {
        id: 4,
        title: "AI / Agent Skills",
        description:
          "Insyra now ships with dedicated <strong>agent skills</strong> for both API-centric Go usage and CLI-driven workflows, making it easier for coding agents to choose the right interface and stay aligned with current docs.",
        learnMore: {
          href: "https://github.com/HazelnutParadise/insyra#ai--agent-skills",
          text: "Review the skills overview",
        },
      },
      feature5: {
        id: 5,
        title: "Guided Tutorial Tracks",
        description:
          "Learn through scenario-based tutorials covering sales analysis, data quality, parquet streaming, A/B statistics, dashboards, optimization, and hybrid Python plus parallel workflows.",
        learnMore: {
          href: "https://hazelnutparadise.github.io/insyra/#/tutorials/README",
          text: "Browse tutorials",
        },
      },
      feature6: {
        id: 6,
        title: "CCL and Parquet Workflows",
        description:
          "Use <strong>CCL</strong> for Excel-like derived columns and conditions, then apply the same logic directly to <strong>Parquet</strong> reads and transforms for larger analytical pipelines.",
        learnMore: {
          href: "#Features",
          text: "Learn about CCL and Parquet",
        },
      },
      feature7: {
        id: 7,
        title: "Visualization and Python Integration",
        description:
          "Build interactive charts with <strong>plot</strong>, static reports with <strong>gplot</strong>, or bridge into Python with <strong>py</strong> when a workflow needs both Go performance and Python ecosystem reach.",
        learnMore: {
          href: "#Features",
          text: "Review analytics packages",
        },
      },
      feature8: {
        id: 8,
        title: "Dedicated IDE",
        description:
          "Pair Insyra with <strong>Idensyra</strong>, the dedicated lightweight IDE that comes preloaded for faster onboarding when you want a focused analysis environment with less setup.",
        learnMore: {
          href: "#Idensyra",
          text: "Learn more about <strong>Idensyra</strong>",
        },
      },
      feature9: {
        id: 9,
        title: "Statistics and Finance, Built In",
        description:
          "The <strong>stats</strong> package now ships with clustering, factor analysis, and explicit error returns aligned with R, while the new <strong>finance</strong> package delivers high-precision TVM, NPV/IRR/XIRR, depreciation, and bond pricing on fixed-point decimals.",
        learnMore: {
          href: "#Features",
          text: "See stats and finance",
        },
      },
      feature10: {
        id: 10,
        title: "v0.3: From Filling Gaps to Creating the Next",
        description:
          "v0.3 Huashan ships the new <strong>quant</strong> package for quantitative finance, <strong>AtomicDoAll</strong> for atomic multi-structure locking, column-level type inference for CSV/JSON, and a Show / Summary family that writes to any io.Writer, backed by a library-wide audit that fixed over 80 confirmed issues — building on the foundation to create for the next.",
        learnMore: {
          href: "https://github.com/HazelnutParadise/insyra/releases",
          text: "Browse the release history",
        },
      },
    },
  },
  versionIntro: {
    badge: "Current Version",
    title: "v0.3 — Huashan",
    slogan: "Create for the Next",
    versionName: "Version Name: ",
    versionNameValue:
      'Huashan, inspired by "Huashan 1914 Creative Park" in Taipei, Taiwan',
    versionFeatures: "What v0.3 Sets Out to Do: ",
    versionFeaturesValue:
      "Build outward from the foundation Pier-2 completed, expanding into new modules and new capabilities. The opening v0.3.0 release introduces the quant package for quantitative finance (portfolio metrics, overfitting diagnostics, walk-forward validation), adds AtomicDoAll for locking multiple DataLists and DataTables atomically in a single operation, brings column-level type inference to CSV and JSON reading (integer columns load as int64), adds ShowTo / ShowRangeTo / SummaryTo for writing output to any io.Writer, standardizes quantile calculation on R Type 7, ships the TWGeocoding reverse-geocoding fetcher for Taiwan, and completes a library-wide audit that fixed over 80 confirmed issues.",
    pierIntro: "Why This Release Line Matters: ",
    pierIntroValue:
      'Huashan turned the former Taipei Winery into a creative hub — its point was never preserving the past, but using that foundation to create what comes next. v0.3 takes the same stance: after Pier-2 filled in the pieces real-world analysis needs, Huashan starts creating outward — new specialized packages, a more rigorous statistical core, and more composable output interfaces — moving Insyra from "ready for real analysis" toward "opening new analytical ground."',
    currentNote:
      "v0.3.0 is the opening release of the Huashan line — Create for the Next.",
    history: {
      text: "View version history",
      href: "#VersionHistory",
    },
    imageAlt: "Huashan 1914 Creative Park",
    imageSource:
      "Image Source: 東南旅遊，https://www.settour.com.tw/travel_guide/%E5%8F%B0%E7%81%A3/%E8%8F%AF%E5%B1%B11914%E6%96%87%E5%8C%96%E5%89%B5%E6%84%8F%E7%94%A2%E6%A5%AD%E5%9C%92%E5%8D%80/attractions_POI0000004769.html",
  },
};
