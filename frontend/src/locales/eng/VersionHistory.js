export const VersionHistory = {
  title: "Version History",
  description:
    "This page collects the Insyra milestones that newer versions have superseded. For the current version, see the home page.",
  namingNote: {
    label: "About version naming: ",
    text: 'Insyra’s version codenames are drawn from art and cultural districts in Taiwan, starting with v0.2 "Pier-2." The earlier v0.1 line was the foundational stage and has no codename.',
  },
  // One object per minor version. When moving up to a new minor (e.g. v0.3),
  // turn the previous home-page versionIntro (e.g. v0.2 Pier-2) into an object
  // and prepend it to this array.
  versions: [
    {
      version: "v0.1",
      codename: "",
      status: "Foundational stage",
      period: "v0.1.0 – v0.1.9",
      summary:
        "Where Insyra began: establishing DataList and DataTable as the core analysis model, and introducing the isr syntactic-sugar package as the recommended entry point for new projects.",
      highlightsTitle: "Key milestones",
      highlights: [
        "Established DataList / DataTable as the two core data structures with their basic analysis methods.",
        "Introduced the isr syntactic-sugar package as a cleaner, smoother entry point for new projects.",
        "Shipped datafetch for pulling web data such as Google Maps business reviews.",
        "Built out the early package ecosystem: statistics, visualization, parallel processing, CSV/Excel conversion, and Python integration.",
      ],
    },
  ],
  current: {
    label: "Current version",
    version: "v0.2 — Pier-2",
    note: 'v0.2 "Pier-2" is still the latest release; see the home page for the full introduction. Once v0.3 "Huashan" ships, the Pier-2 introduction will move here in full.',
    backText: "Back to the current version",
    backHref: "#",
  },
};
