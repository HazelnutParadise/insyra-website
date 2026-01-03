export const Idensyra = {
  // Page identity
  title: "Lightweight yet Powerful Data Analysis IDE",
  subtitle: "A ready-to-use desktop IDE for Insyra",

  // Short marketing-oriented description (landing page tone)
  description:
    "Built with Wails v2, Idensyra is a lightweight yet formidable Go data analysis IDE. It features a built-in Yaegi runtime and the same editor as Visual Studio Code, with pre-installed Insyra. It is compatible with Jupyter Notebook's .ipynb files and offers the advanced .igonb interactive notebook, supporting Go and Python to each play to their strengths within a single workflow. Enjoy a pleasant data analysis experience without complex environment setup.",

  // Primary CTAs
  downloadButton: { text: "Download Idensyra" },
  repo: {
    text: "View Source",
    link: "https://github.com/HazelnutParadise/idensyra",
  },
  docsLink: "https://github.com/HazelnutParadise/idensyra",

  // Screenshots for the landing hero/preview gallery
  screenshots: [
    "https://github.com/HazelnutParadise/idensyra/blob/main/ui_example.png?raw=true",
    "https://github.com/HazelnutParadise/idensyra/blob/main/ui_example2.png?raw=true",
  ],
  screenshotsTitle: "Screenshots",

  // Clean, benefit-first feature list used by the landing page
  keyFeatures: [
    {
      icon: "⚡",
      title: "Live Run (Instant Execution)",
      description:
        "With Live Run enabled, code executes automatically in the background as you edit (with debouncing), allowing you to see results and output immediately.",
    },
    {
      icon: "🔗",
      title: "Deep Insyra Integration",
      description:
        "Preinstalled Insyra libraries for fast data manipulation and plotting out of the box, supporting multiple sub-packages like isr, plot, gplot, and parquet.",
    },
    {
      icon: "📒",
      title: "Notebook Workflows",
      description:
        "Compatible with Jupyter Notebook's .ipynb files and provides the advanced .igonb notebook. It supports Go and Python to each play to their strengths within a single workflow, with cell management, live Markdown preview, and multiple execution modes.",
    },
    {
      icon: "🔁",
      title: "Go ↔ Python Interop",
      description:
        "Share variables in igonb, allowing Go and Python cells to work together, ideal for mixed-language analysis workflows.",
    },
    {
      icon: "📦",
      title: "Graphical Python Package Management",
      description:
        "No more command lines, easily manage your Python environment and dependencies.",
    },
    {
      icon: "💼",
      title: "Workspace Productivity",
      description:
        "Project workspaces, autosave, file management, and import/export make it simple to organize your work.",
    },
    {
      icon: "🔍",
      title: "Rich Previews",
      description:
        "Preview tables, charts, Excel files, and media directly — no external tools required. Supports ANSI colored terminal output for better readability.",
    },
    {
      icon: "🎨",
      title: "Polished UX",
      description:
        "Theme-aware interface (Dark/Light), local asset bundling for offline use, and helpful notifications and progress indicators.",
    },
    {
      icon: "⚙️",
      title: "Editor Convenience Features",
      description:
        "Support for Undo/Redo, multi-cursor, code folding, Minimap, font size adjustment, and other productivity-boosting tools.",
    },
  ],
  featuresTitle: "Key Features",

  useCasesTitle: "Who is Idensyra for?",
  useCases: [
    {
      title: "Students & Self-learners",
      description:
        "A great starting point for learning programming and data science. See results instantly, making learning more rewarding.",
    },
    {
      title: "Office Workers",
      description:
        "Easily handle tedious Excel and CSV files, automate repetitive tasks, and significantly boost office productivity.",
    },
    {
      title: "Finance & Accounting",
      description:
        "Perform report reconciliation and data statistics, using high-performance computing to ensure accounting accuracy.",
    },
    {
      title: "Small Business & E-commerce Sellers",
      description:
        "Track sales data and inventory trends, optimizing purchasing strategies and mastering business trends.",
    },
    {
      title: "Product Managers",
      description:
        "Analyze user behavior and product metrics, driving product iteration and feature optimization through data.",
    },
    {
      title: "Data Enthusiasts",
      description:
        "Organize personal interest data (e.g., finance, exercise records) to discover patterns and surprises in life.",
    },
    {
      title: "Professional Researchers",
      description:
        "Conduct market surveys or academic research, leveraging powerful data processing capabilities to extract insights from massive information.",
    },
    {
      title: "Teachers & Instructors",
      description:
        "Create interactive teaching materials and notes, making the teaching process more vivid and interesting for students.",
    },
    {
      title: "Marketing Data Specialists",
      description:
        "Use the built-in mkt package for RFM analysis and customer segmentation to develop data-driven strategies.",
    },
  ],

  // Supported Insyra packages (short list to show capabilities)
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
  supportedTitle: "Supported Packages",

  // Copy for the small utility link back to the HowToUse area
  backToHowToUseText: 'Back to "How to Use"',
};
