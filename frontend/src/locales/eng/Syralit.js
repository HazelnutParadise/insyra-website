export const Syralit = {
  title: "Interactive Data Apps in Go",
  subtitle:
    "A Go-native, Streamlit-inspired framework for data apps, dashboards, and AI tools",
  description:
    "Write Go functions, get a live web app — no JavaScript, no HTML templates, no frontend build step. Syralit lets you build interactive data applications in plain Go, with first-class support for Insyra's DataTable and DataList.",
  repo: {
    text: "View Syralit Source",
    link: "https://github.com/HazelnutParadise/syralit",
  },
  install: {
    title: "Quick Start",
    steps: [
      "go install github.com/HazelnutParadise/syralit/cmd/syralit@latest",
      "syralit new myapp",
      "cd myapp",
      "syralit dev",
    ],
    note: "Requires Go 1.25+.",
  },
  featuresTitle: "Key Features",
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
  ecosystemNote:
    "Syralit is the application layer of the Insyra ecosystem: process data with Insyra, then turn the results into interactive apps anyone can use with Syralit.",
  backText: "Back to Home",
  backHref: "#",
};
