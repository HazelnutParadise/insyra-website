export const HowToUse = {
    title: 'Get Started with Insyra',
    subtitle: 'Explore the Next-Generation Data Analysis Experience',
    installationSection: {
        title: 'Installation',
        description: 'Run the following command in the terminal to install Insyra:',
        goBeginner: {
            text: 'Go Beginner?',
            link: 'https://github.com/HazelnutParadise/insyra?tab=readme-ov-file#for-those-new-to-golang',
        },
    },
    ideSection: {
        title: 'Dedicated IDE: Idensyra',
        description: 'Idensyra is built with Wails and provides a Wails-based desktop UI. It currently only provides a single UI.',
        downloadButton: {
            text: 'Download Idensyra',
        },
        repo: {
            text: 'View Idensyra Source Code',
            link: 'https://github.com/HazelnutParadise/idensyra',
        },
        guiMode: {
            title: 'GUI Mode',
            description: 'Based on Wails desktop framework',
            features: [
                'Real-time execution',
                'Code and execution result storage',
                'Switch to WebUI mode (code automatically loaded)',
            ],
        },
        webMode: {
            title: 'WebUI Mode',
            description: 'WebUI is currently not available; the project focuses on the Wails desktop UI.',
            features: [
                'Syntax highlighting',
                'Auto complete',
                'Switch to GUI mode (code automatically loaded)',
            ],
        },
        features: [
            {
                icon: '⚡',
                title: 'No Environment Required',
                description: 'Built-in Go interpreter',
            },
            {
                icon: '🎯',
                title: 'Ready to Use',
                description: 'Built-in Insyra, ready to use',
            },
            {
                icon: '▶️',
                title: 'Real-time Execution',
                description: 'Support real-time execution of code',
            },
            {
                icon: '🎨',
                title: 'Colored Output',
                description: 'Support rich, colored terminal output for easier reading',
            },

        ],
    },
    quickLinks: {
        title: 'Start Data Analysis Now',
        description: 'Ready to start using Insyra? Interact with AI through online chat or MCP server for instant help.',
        chat: {
            text: 'Chat with AI',
            link: 'https://context7.com/hazelnutparadise/insyra?tab=chat',
        },
        mcp: {
            text: 'MCP Server',
            link: 'https://gitmcp.io/HazelnutParadise/insyra',
        },
    },
};
