export const Main = {
  hero: {
    slogan: "Fast, Lovely, Easy to Use",
    title: "Meet Insyra",
    description:
      "Load data, train models, fetch stock prices, and backtest strategies, all in Go. Plus the Idensyra desktop IDE and the Syralit framework for interactive data apps.",
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
  themeSection: {
    heading: "What can Insyra do for you?",
    subheading: "Train a model, pull in data, test a trading idea, or just tidy up a report. Start here.",
    items: [
      {
        id: 1,
        color: "#2a9d8f",
        eyebrow: "Machine learning & deep learning",
        title: "Train models without leaving Go.",
        description: "Predict churn, classify images, run ready-made ONNX models. Wrangling, training, and evaluation all live in one Go project, with GPU speed-ups when a GPU is there and the same results on CPU when it isn't.",
        tags: ["ml", "nn", "accel"],
        learnMore: { href: "https://hazelnutparadise.github.io/insyra/#/ml", text: "See how machine learning works" },
        code: `// Train a classifier on historical data
model, _ := ml.FitGradientBoostingClassifier(trainX, trainY)

// Predict on new data
pred, _ := model.Predict(testX)`,
      },
      {
        id: 2,
        color: "#1f449b",
        eyebrow: "Many data sources, one place",
        title: "Prices, addresses, web pages: one line and it's a table.",
        description: "Taiwan stock prices, futures, monthly revenue, coordinates mapped to counties and towns, Google Maps and web crawlers, plus Yahoo Finance and databases. What you fetch is already an analysis-ready table.",
        tags: ["datafetch"],
        learnMore: { href: "https://hazelnutparadise.github.io/insyra/#/datafetch", text: "See what you can connect" },
        code: `stocks, _ := datafetch.TWStock(datafetch.TWStockConfig{})

// TSMC daily prices arrive as a DataTable
prices, _ := stocks.DailyPrices("2330", from, to, datafetch.TWMarketTWSE)
prices.Show()`,
      },
      {
        id: 3,
        color: "#d73e3e",
        eyebrow: "Quant trading",
        title: "Know your strategy's numbers before you place the order.",
        description: "Sharpe ratio, max drawdown, VaR, option pricing, portfolio optimization, and technical indicators. Tests also tell you whether a backtest is just overfitting.",
        tags: ["quant", "quant/ta", "finance"],
        learnMore: { href: "https://hazelnutparadise.github.io/insyra/#/quant", text: "See what quant analysis covers" },
        code: `// Turn prices into daily returns, then an annualized Sharpe ratio
returns := prices.GetColByName("Close").PctChange(1).ClearNils()

sharpe, _ := quant.SharpeRatio(returns, 0, 252)`,
      },
      {
        id: 4,
        color: "#f59e0b",
        eyebrow: "Data wrangling & statistics",
        title: "From a messy CSV to a chart that explains itself.",
        description: "Read CSV, JSON, and Parquet; clean, group, merge, and compute statistics; then draw interactive charts. Prefer Excel-style formulas? CCL lets you write them in Go.",
        tags: ["DataTable", "stats", "plot", "CCL"],
        learnMore: { href: "https://hazelnutparadise.github.io/insyra/#/stats", text: "See how data wrangling works" },
        code: `// Load a CSV and get an instant overview of every column
dt, _ := insyra.ReadCSV_File("sales.csv", false, true)
dt.Summary()`,
      },
      {
        id: 5,
        color: "#6f42c1",
        eyebrow: "Works with the Python ecosystem",
        title: "Go's speed, Python's packages.",
        description: "Need pandas or scikit-learn? Stay in your Go project. Insyra prepares the Python environment, runs Python code from Go, and hands the result back.",
        tags: ["py", "pandas", "scikit-learn"],
        learnMore: { href: "https://hazelnutparadise.github.io/insyra/#/py", text: "See how Python integration works" },
        code: `// Call scikit-learn from Go and get the result back
var out struct{ R2 float64 \`json:"r2"\` }
_ = py.RunCode(&out, \`
from sklearn.metrics import r2_score
insyra.Return({"r2": r2_score([1, 2, 3], [1.1, 1.9, 3.2])})
\`)`,
      },
    ],
  },
  moreAbilities: { heading: "More capabilities" },
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
        title: "Quantitative Finance and Portfolio Analysis",
        description:
          "<strong>quant</strong> is built for trading strategies and portfolios: performance metrics including Sharpe, Sortino, Calmar, information ratio, and drawdown series; VaR / CVaR tail risk; beta, CAPM, and multi-factor attribution; Black-Scholes option pricing with implied volatility; and mean-variance portfolio optimization with the efficient frontier. For backtests it adds PSR / DSR / PBO overfitting diagnostics and walk-forward validation.",
        learnMore: {
          href: "#Features",
          text: "See quant",
        },
      },
      feature11: {
        id: 11,
        title: "Machine Learning, Deep Learning, and GPU Acceleration in Go",
        description:
          "v0.3.1 adds <strong>ml</strong> and <strong>nn</strong>: the first covers regression, tree models, cross-validation, and ONNX export, while the second runs real ONNX models, trains neural networks, and reads and writes SafeTensors. Large matrix workloads use an available device and fall back to the same CPU result when one is unavailable.",
        learnMore: {
          href: "#Features",
          text: "Explore ml, nn, and accel",
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
    placeIntro: "About the Place: ",
    placeIntroValue:
      "Huashan 1914 Creative Park sits in central Taipei. Founded in 1914 as a winery in the Japanese colonial era and later run as the Taipei Winery, the site fell idle after production moved out in 1987 and was reborn as an arts venue in 1999. Today the city-designated historic site gathers exhibitions, performances, markets, and design brands as a landmark of Taipei's creative scene.",
    versionFeatures: "What v0.3 Sets Out to Do: ",
    versionFeaturesValue: "Build outward from the foundation Pier-2 completed, expanding into new modules and new capabilities.",
    versionReleases: [
          {
                "version": "v0.3.0",
                "items": [
                      "Introduces the quant package for quantitative finance: portfolio metrics, overfitting diagnostics, walk-forward validation.",
                      "Adds AtomicDoAll to lock several DataLists and DataTables atomically in one operation.",
                      "CSV and JSON reading infer column types (integer columns load as int64).",
                      "Adds ShowTo, ShowRangeTo and SummaryTo to write output to any io.Writer.",
                      "Standardizes quantile calculation on R Type 7.",
                      "Ships the TWGeocoding reverse-geocoding fetcher for Taiwan.",
                      "Completes a library-wide audit that fixed over 80 confirmed issues."
                ]
          },
          {
                "version": "v0.3.1",
                "items": [
                      "Adds the ml machine-learning package, nn deep learning, and the accel runtime, keeping model training, ONNX inference, and device acceleration in Go workflows."
                ]
          },
          {
                "version": "v0.3.2",
                "items": [
                      "Grows quant into a full toolkit: VaR / CVaR tail risk, Sortino / Calmar / information ratio, beta and CAPM, multi-factor attribution, Black-Scholes pricing and implied volatility, mean-variance optimization, block-bootstrap simulation.",
                      "Adds TWStock for Taiwan market data to datafetch.",
                      "Brings exponentially weighted statistics and calendar resampling to the core.",
                      "Extends the CLI with quant, fetch tw, ewm and resample."
                ]
          },
          {
                "version": "v0.3.3",
                "items": [
                      "Integer sorting keeps its precision above 2^53.",
                      "CSV reading decodes UTF-16/32 and a wide range of East Asian and European encodings.",
                      "insyra.Cell keeps a single value in one cell where a constructor would flatten a slice.",
                      "DataTable.ToCSVWithOptions can neutralize cells that start like formulas.",
                      "CCL errors now name the stage and position.",
                      "The CLI rejects environment names that escape their directory and masks database passwords.",
                      "The Google Maps scraper works again."
                ]
          },
          {
                "version": "v0.3.4",
                "items": [
                      "Fitted StandardScaler, MinMaxScaler, RobustScaler and MaxAbsScaler can be saved as JSON and loaded back.",
                      "Errors wrap their causes with %w, so errors.Is and errors.As recognize them.",
                      "ReadJSON is stricter about invalid JSON (a breaking change).",
                      "A faster JSON library: on a 100,000-row table, writing JSON drops from 66 ms to 45 ms and reading from 129 ms to 90 ms."
                ]
          },
          {
                "version": "v0.3.5",
                "items": [
                      "An nn training step can stay on the GPU.",
                      "New quant/ta package of technical-analysis indicators.",
                      "quant and stats gain market-efficiency tests: Fama-MacBeth, event studies, data-snooping tests, variance ratio.",
                      "datafetch reads Taiwan futures, odd-lot and monthly-revenue data.",
                      "Several compatibility changes, starting with Go 1.26 as the minimum."
                ]
          }
    ],
    pierIntro: "Why This Release Line Matters: ",
    pierIntroValue:
      'Huashan 1914 Creative Park rose from the former Taipei Winery — its point was never preserving the past, but using that foundation to create what comes next. v0.3 takes the same stance: after Pier-2 filled in the pieces real-world analysis needs, Huashan starts creating outward — new specialized packages, a more rigorous statistical core, and more composable output interfaces — moving Insyra from "ready for real analysis" toward "opening new analytical ground."',
    currentNote:
      "v0.3.5 is the latest published release in the Huashan line, themed Create for the Next.",
    history: {
      text: "View version history",
      href: "#VersionHistory",
    },
    imageAlt: "Huashan 1914 Creative Park",
    imageSource:
      "Image Source: 東南旅遊，https://www.settour.com.tw/travel_guide/%E5%8F%B0%E7%81%A3/%E8%8F%AF%E5%B1%B11914%E6%96%87%E5%8C%96%E5%89%B5%E6%84%8F%E7%94%A2%E6%A5%AD%E5%9C%92%E5%8D%80/attractions_POI0000004769.html",
  },
};
