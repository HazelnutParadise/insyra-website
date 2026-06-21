export const Syralit = {
  heroBadge: "Insyra Ecosystem · Apps",
  title: "Interactive Data Apps in Go",
  subtitle:
    "A Go-native, Streamlit-inspired framework for data apps, dashboards, and AI tools",
  description:
    "Write Go functions, get a live web app — no JavaScript, no HTML templates, no frontend build step. Syralit lets you build interactive data applications in plain Go, with first-class support for Insyra's DataTable and DataList.",
  heroArrowLabel: "Live App",
  repo: {
    text: "View Syralit Source",
    link: "https://github.com/HazelnutParadise/syralit",
  },
  install: {
    title: "Quick Start",
    lede: "Three commands to get a Go app running in the browser.",
    steps: [
      "go install github.com/HazelnutParadise/syralit/cmd/syralit@latest",
      "syralit new myapp",
      "cd myapp",
      "syralit dev",
    ],
    note: "Requires Go 1.25+.",
  },
  screenshotsTitle: "See It in Action",
  screenshotsLede: "All of these are real apps built with Syralit — not mockups.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/HazelnutParadise/syralit/master/docs/images/showcase-dashboard.png",
      title: "sales_dashboard.go",
      alt: "Syralit dashboard showcase",
      caption: "Dashboards: turn Go functions into interactive KPIs and charts.",
    },
    {
      src: "https://raw.githubusercontent.com/HazelnutParadise/syralit/master/docs/images/data-explorer-analysis.png",
      title: "data_explorer.go",
      alt: "Syralit data explorer analysis view",
      caption: "Data exploration: ship analysis workflows as interactive tools.",
    },
    {
      src: "https://raw.githubusercontent.com/HazelnutParadise/syralit/master/docs/images/form-app-registration.png",
      title: "registration.go",
      alt: "Syralit conference registration form",
      caption: "Form apps: rich widgets with built-in state and sessions.",
    },
  ],
  featuresTitle: "Key Features",
  featuresLede:
    "From input widgets and layout tools to database integration, Syralit has every part you need to build data apps.",
  keyFeatures: [
    {
      icon: "🐹",
      title: "Pure Go, Zero Frontend",
      description:
        "Write Go functions and get a live web app — no JavaScript, HTML templates, or frontend build step required.",
    },
    {
      icon: "🧩",
      title: "Rich Input Widgets",
      description:
        "Text, sliders, date pickers, file uploads, camera and audio inputs — full interactive forms out of the box.",
    },
    {
      icon: "📊",
      title: "Interactive Charts",
      description:
        "Built-in Chart.js charts (line, bar, scatter, pie, histogram, radar) alongside tables and Markdown display components.",
    },
    {
      icon: "🗂️",
      title: "Layout Tools",
      description:
        "Columns, tabs, sidebar, and expanders make it easy to compose clear, readable layouts.",
    },
    {
      icon: "🔄",
      title: "State & Sessions",
      description:
        "Built-in state management and session handling, with data caching and streaming that stay easy to write.",
    },
    {
      icon: "📑",
      title: "Multi-page Apps",
      description:
        "Multi-page structure with authentication and role-based access control.",
    },
    {
      icon: "⚡",
      title: "Hot Reload",
      description:
        "Hot reload in dev mode with state preservation — change your code and see it instantly.",
    },
    {
      icon: "💬",
      title: "Chat UI & Databases",
      description:
        "Built-in chat UI components and database integration for building AI tools and data backends.",
    },
    {
      icon: "🔗",
      title: "First-class Insyra Integration",
      description:
        "A dedicated adapter gives native support for Insyra's DataTable / DataList while keeping the framework core decoupled.",
    },
  ],
  ecosystemFlow: {
    title: "Where Syralit Sits in the Insyra Ecosystem",
    nodes: [
      {
        name: "Insyra",
        role: "Analysis Library",
        action: "DataList/DataTable, CCL, stats, finance — turn raw data into usable insight.",
        active: false,
      },
      {
        name: "Idensyra",
        role: "Desktop IDE",
        action: "A lightweight IDE with Insyra preinstalled — notebooks and Live Run for iterating on analysis.",
        active: false,
      },
      {
        name: "Syralit",
        role: "App Framework",
        action: "Ship the analysis as an interactive web app anyone can use, even non-developers.",
        active: true,
      },
    ],
  },
  ecosystemNote:
    "Insyra processes the data, Idensyra explores and notebooks, Syralit ships the result as an app anyone can use — all in Go.",
  backText: "Back to Home",
  backHref: "#",
};
