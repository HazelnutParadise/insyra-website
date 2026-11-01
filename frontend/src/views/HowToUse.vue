<template>
    <div class="how-to-use-page" :class="{ 'page-visible': isVisible }">
        <div class="cyber-background"></div>
        <div class="content-wrapper">
            <h1 class="cyber-title" :class="{ 'title-visible': isVisible }">
                {{ currentMessages.HowToUse.title }}
            </h1>
            <p
                class="cyber-subtitle"
                :class="{ 'subtitle-visible': isVisible }"
            >
                {{ currentMessages.HowToUse.subtitle }}
            </p>

            <!-- Installation Section -->
            <section
                class="neo-section installation-section"
                :class="{ 'section-visible': isVisible }"
            >
                <div class="section-header">
                    <div class="header-line"></div>
                    <h2>
                        {{ currentMessages.HowToUse.installationSection.title }}
                    </h2>
                    <div class="header-line"></div>
                </div>
                <p>
                    {{
                        currentMessages.HowToUse.installationSection.description
                    }}
                </p>
                <div class="terminal-window">
                    <div class="terminal-header">
                        <span class="terminal-button"></span>
                        <span class="terminal-button"></span>
                        <span class="terminal-button"></span>
                    </div>
                    <div class="terminal-content">
                        <pre><code>go get -u github.com/HazelnutParadise/insyra/allpkgs</code></pre>
                    </div>
                </div>
                <a
                    target="_blank"
                    :href="
                        currentMessages.HowToUse.installationSection.goBeginner
                            .link
                    "
                    class="cyber-link"
                >
                    {{
                        currentMessages.HowToUse.installationSection.goBeginner
                            .text
                    }}
                </a>
            </section>

            <!-- Quick Links Section -->
            <section
                class="neo-section quick-links-section"
                :class="{ 'section-visible': isVisible }"
            >
                <div class="section-header">
                    <div class="header-line"></div>
                    <h2>{{ currentMessages.HowToUse.quickLinks.title }}</h2>
                    <div class="header-line"></div>
                </div>
                <p class="quick-links-intro">
                    {{ currentMessages.HowToUse.quickLinks.description }}
                </p>
                <div class="quick-links-container">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="currentMessages.HowToUse.quickLinks.chat.link"
                        class="cyber-button"
                    >
                        💬 {{ currentMessages.HowToUse.quickLinks.chat.text }}
                        <span class="button-glow"></span>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="currentMessages.HowToUse.quickLinks.mcp.link"
                        class="cyber-button"
                    >
                        🔗 {{ currentMessages.HowToUse.quickLinks.mcp.text }}
                        <span class="button-glow"></span>
                    </a>
                </div>
            </section>

            <!-- Idensyra IDE Section -->
            <section
                class="neo-section ide-section"
                :class="{ 'section-visible': isVisible }"
            >
                <div class="section-header">
                    <div class="header-line"></div>
                    <h2>{{ currentMessages.HowToUse.ideSection.title }}</h2>
                    <div class="header-line"></div>
                </div>

                <div class="ide-intro">
                    <p
                        class="ide-description"
                        v-html="currentMessages.HowToUse.ideSection.description"
                    ></p>
                    <a href="#Idensyra" class="cyber-button">
                        {{ currentMessages.HowToUse.ideSection.viewPage.text }}
                        <span class="button-glow"></span>
                    </a>
                    <div class="download-button">
                        <a href="/download/idensyra" class="cyber-button">
                            {{
                                currentMessages.HowToUse.ideSection
                                    .downloadButton.text
                            }}
                            <span class="button-glow"></span>
                        </a>
                        <br />
                        <a
                            target="_blank"
                            :href="
                                currentMessages.HowToUse.ideSection.repo.link
                            "
                            class="cyber-link"
                        >
                            {{ currentMessages.HowToUse.ideSection.repo.text }}
                        </a>
                    </div>
                </div>

                <div class="mode-cards">
                    <div class="mode-card photo-card">
                        <div class="photo-gallery">
                            <img
                                src="https://github.com/HazelnutParadise/idensyra/blob/main/ui_example.png?raw=true"
                                alt="UI screenshot"
                            />
                        </div>
                    </div>
                </div>

                <div class="features-grid">
                    <div
                        class="feature-card"
                        v-for="(feature, key) in currentMessages.HowToUse
                            .ideSection.features"
                        :key="key"
                    >
                        <div class="feature-icon">{{ feature.icon }}</div>
                        <h4>{{ feature.title }}</h4>
                        <p>{{ feature.description }}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "HowToUse",
    props: {
        currentMessages: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            isVisible: false,
        };
    },
    mounted() {
        // 直接設置為可見
        this.isVisible = true;
    },
};
</script>

<style scoped>
p {
    font-size: 1.2rem;
}

pre {
    font-size: 1.2rem;
}

/* 更新背景色和基礎文字顏色 */
.how-to-use-page {
    min-height: 100vh;
    background: var(--gray-14);
    /* 更新背景色 */
    color: var(--white);
    /* 更新基礎文字顏色 */
    font-family: "Space Grotesk", sans-serif;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
}

.page-visible {
    opacity: 1;
    transform: translateY(0);
}

.cyber-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        45deg,
        rgba(var(--gray-14-rgb), 0.97) 0%,
        rgba(var(--indigo-24-rgb), 0.95) 100%
    );
    /* 調整漸層色 */
    z-index: 0;
    overflow: hidden;
}

.content-wrapper {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    z-index: 1;
}

.cyber-title {
    font-size: 3.5rem;
    text-align: center;
    color: var(--insyra-orange);
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.8s ease-out 0.2s;
}

.title-visible {
    opacity: 1;
    transform: translateY(0);
}

.cyber-subtitle {
    font-size: 1.2rem;
    text-align: center;
    color: var(--insyra-pink);
    /* 粉紅色副標題 */
    text-shadow: 0 0 5px rgba(var(--insyra-pink-rgb), 0.3);
    margin-bottom: 30px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out 0.4s;
}

.subtitle-visible {
    opacity: 1;
    transform: translateY(0);
}

.neo-section {
    background: rgba(var(--gray-12-rgb), 0.8);
    border: 1px solid rgba(var(--orange-85-rgb), 0.2);
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(var(--orange-85-rgb), 0.1);
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out 0.6s;
    position: relative;
}

.section-visible {
    opacity: 1;
    transform: translateY(0);
}

.neo-section::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(90deg, var(--green-74), transparent, var(--insyra-pink));
    border-radius: 16px;
    z-index: -1;
    animation: borderRotate 4s linear infinite;
    opacity: 0.5;
}

.section-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.header-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--green-74), var(--insyra-pink), var(--green-74));
}

h2 {
    color: var(--amber-84);
    margin: 0 20px;
    font-size: 2rem;
}

.terminal-content {
    overflow-x: auto;
    /* 滾動條下移 */
    padding-bottom: 20px;
}

@keyframes borderRotate {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.terminal-window {
    background: rgba(var(--gray-10-rgb), 0.95);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid rgba(var(--orange-85-rgb), 0.2);
}

.terminal-header {
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
}

.terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.terminal-button:nth-child(1) {
    background: var(--red-67a);
}

.terminal-button:nth-child(2) {
    background: var(--amber-59a);
}

.terminal-button:nth-child(3) {
    background: var(--green-47a);
}

.mode-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin: 40px 0;
}

.mode-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(var(--gray-14a-rgb), 0.8);
    border: 1px solid rgba(var(--orange-85-rgb), 0.2);
    border-radius: 15px;
    padding: 20px 20px;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(var(--orange-85-rgb), 0.1);
}

.mode-card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.mode-card:hover {
    transform: translateY(-5px);
}

.mode-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.mode-card h3 {
    color: var(--insyra-pink);
    font-size: 1.5rem;
    text-shadow: 0 0 5px rgba(var(--insyra-pink-rgb), 0.3);
    margin-bottom: 15px;
}

.mode-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mode-card div ul {
    margin-left: auto;
    margin-right: auto;
    list-style: none;
    padding: 0;
    text-align: left;
}

.mode-card div ul li {
    margin: 10px 0;
    padding-left: 20px;
    position: relative;
}

.mode-card div ul li:before {
    content: "→ ";
    color: var(--amber-84);
}

.cyber-button {
    margin-top: 40px;
    display: inline-block;
    padding: 15px 30px;
    background: linear-gradient(45deg, var(--green-74), var(--insyra-pink));
    color: var(--gray-14);
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.cyber-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(var(--orange-85-rgb), 0.5);
    background: linear-gradient(45deg, var(--insyra-pink), var(--green-74));
}

.photo-gallery {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
}

.photo-card {
    padding: 0;
    border-radius: 12px;
    overflow: hidden;
}

.photo-gallery img {
    width: 100%;
    height: auto;
    display: block;
    border: none;
    box-shadow: none;
}

.cyber-link {
    color: var(--amber-84);
    text-decoration: underline;
}

.cyber-link:hover {
    color: var(--insyra-pink);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.feature-card {
    background: rgba(var(--gray-14a-rgb), 0.8);
    border: 1px solid rgba(var(--insyra-pink-rgb), 0.2);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(var(--insyra-pink-rgb), 0.1);
}

.feature-card:hover {
    transform: translateY(-5px);
    border-color: var(--insyra-pink);
    box-shadow: 0 6px 20px rgba(var(--insyra-pink-rgb), 0.2);
}

.feature-icon {
    font-size: 2rem;
    margin-bottom: 10px;
}

.feature-card h4 {
    color: var(--amber-84);
    margin: 10px 0;
    font-size: 1.2rem;
}

.feature-card p {
    font-size: 1rem;
}

.ide-description,
.quick-links-intro {
    margin: 0 auto;
    max-width: 800px;
}

@media (max-width: 768px) {
    .cyber-title {
        font-size: 2.5rem;
    }

    .mode-cards {
        grid-template-columns: 1fr;
    }

    .features-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
}

/* 新增發光線特效 */
.glow-line {
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(90deg, transparent, var(--green-74), var(--insyra-pink));
    animation: borderGlow 8s linear infinite;
    filter: blur(5px);
}

.glow-line::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--insyra-pink), var(--green-74));
    filter: blur(5px);
}

/* Quick Links Section */
.quick-links-section {
    text-align: center;
    transition: all 0.8s ease-out 0.8s;
}

.quick-links-container {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
}

.quick-links-container .cyber-button {
    padding: 14px 32px;
    font-size: 1.1rem;
    min-width: 200px;
}

@keyframes borderGlow {
    0% {
        transform: rotate(0deg) translate(-50%, -50%) scale(2);
        left: 0%;
        top: 0%;
    }

    25% {
        transform: rotate(90deg) translate(-50%, -50%) scale(2);
        left: 100%;
        top: 0%;
    }

    50% {
        transform: rotate(180deg) translate(-50%, -50%) scale(2);
        left: 100%;
        top: 100%;
    }

    75% {
        transform: rotate(270deg) translate(-50%, -50%) scale(2);
        left: 0%;
        top: 100%;
    }

    100% {
        transform: rotate(360deg) translate(-50%, -50%) scale(2);
        left: 0%;
        top: 0%;
    }
}
</style>
