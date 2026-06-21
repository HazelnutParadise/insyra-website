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
        title: "Closing the Last Mile for Real Analysis",
        description:
          "v0.2 fills in the everyday gaps: time series and window transforms, SQL with embedded databases, GroupBy / Pivot / aggregation, missing-value imputation, sampling and train/test splitting, categorical encoding, the Describe summary API, and feature scaling, all on a rewritten atomic core that makes many operations 5–100x faster.",
        learnMore: {
          href: "https://github.com/HazelnutParadise/insyra/releases",
          text: "Browse the release history",
        },
      },
    },
  },
  versionIntro: {
    badge: "Current Version",
    title: "v0.2 — Pier-2",
    slogan: "Crafting Your Art of Data",
    versionName: "Version Name: ",
    versionNameValue:
      'Pier-2, inspired by "Pier-2 Art Center" in Kaohsiung, Taiwan',
    versionFeatures: "What v0.2 Set Out to Do: ",
    versionFeaturesValue:
      "Round out the features Insyra was missing and make it genuinely usable for real-world data analysis. From the high-precision finance package and a refactored stats package with generalized linear models (GLM), to time series and window transforms, SQL with embedded databases, GroupBy / Pivot / aggregation, nonparametric tests, missing-value imputation, sampling and train/test splitting, categorical encoding, the Describe summary API, and feature scaling, plus an expanded CCL math library and a rewritten atomic core that is ~100x faster, Pier-2 turns Insyra into a toolkit that can face real data head-on.",
    pierIntro: "Why This Release Line Matters: ",
    pierIntroValue:
      "Insyra is no longer a single Go package but a complete working experience: you can learn from the documentation hub, automate through the CLI, practice with tutorials, hand workflows to AI agents with dedicated skill definitions, and run high-precision finance, machine-learning preprocessing, and richer statistics on a noticeably faster core.",
    currentNote:
      'v0.2.19 is the final release of the Pier-2 line — next up is v0.3 "Huashan."',
    history: {
      text: "View version history",
      href: "#VersionHistory",
    },
    imageAlt: "Pier-2 Art Center",
    imageSource:
      "Image Source: 東南旅遊，https://www.settour.com.tw/travel_guide/%E5%8F%B0%E7%81%A3/%E9%A7%81%E4%BA%8C%E8%97%9D%E8%A1%93%E7%89%B9%E5%8D%80/attractions_POI0000369625.html",
  },
};
