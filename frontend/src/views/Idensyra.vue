<template>
    <div class="idensyra-page" :class="{ 'page-visible': isVisible }">
        <div class="cyber-background"></div>
        <div class="content-wrapper">
            <h1 class="cyber-title" :class="{ 'title-visible': isVisible }">
                {{ idensyra.title }}
            </h1>
            <p
                class="cyber-subtitle"
                :class="{ 'subtitle-visible': isVisible }"
                v-if="idensyra.subtitle"
            >
                {{ idensyra.subtitle }}
            </p>

            <section
                class="neo-section ide-section"
                :class="{ 'section-visible': isVisible }"
            >
                <div class="section-header">
                    <div class="header-line"></div>
                    <h2>Idensyra</h2>
                    <div class="header-line"></div>
                </div>

                <div class="ide-intro">
                    <p
                        class="ide-description"
                        v-html="idensyra.description"
                    ></p>

                    <div class="download-button">
                        <a href="/download/idensyra" class="cyber-button">
                            {{
                                idensyra.downloadButton?.text ||
                                "Download Idensyra"
                            }}
                            <span class="button-glow"></span>
                        </a>
                        <a
                            target="_blank"
                            :href="idensyra.repo.link"
                            class="cyber-button"
                            style="margin-left: 12px"
                        >
                            {{ idensyra.repo.text }}
                            <span class="button-glow"></span>
                        </a>

                        <br />
                        <a href="#HowToUse" class="cyber-link">{{
                            idensyra.backToHowToUseText || "Back to How to Use"
                        }}</a>
                    </div>
                </div>

                <!-- Screenshots -->
                <section
                    class="neo-section screenshots-section"
                    :class="{ 'section-visible': isVisible }"
                >
                    <div class="section-header">
                        <div class="header-line"></div>
                        <h2>
                            {{
                                currentMessages.Idensyra?.screenshotsTitle ||
                                "Screenshots"
                            }}
                        </h2>
                        <div class="header-line"></div>
                    </div>
                    <div
                        class="photo-gallery"
                        style="
                            display: flex;
                            gap: 12px;
                            flex-wrap: wrap;
                            justify-content: center;
                            align-items: center;
                        "
                    >
                        <img
                            v-for="(img, idx) in idensyra.screenshots"
                            :key="idx"
                            :src="img"
                            :alt="'Screenshot ' + (idx + 1)"
                        />
                    </div>
                </section>

                <!-- Key Features -->
                <section
                    class="neo-section key-features-section"
                    :class="{ 'section-visible': isVisible }"
                >
                    <div class="section-header">
                        <div class="header-line"></div>
                        <h2>
                            {{
                                currentMessages.Idensyra?.featuresTitle ||
                                "Key Features"
                            }}
                        </h2>
                        <div class="header-line"></div>
                    </div>
                    <div class="features-grid">
                        <div
                            class="feature-card"
                            v-for="(feature, idx) in idensyra.keyFeatures"
                            :key="idx"
                        >
                            <div class="feature-icon">{{ feature.icon }}</div>
                            <h4>{{ feature.title }}</h4>
                            <p>{{ feature.description }}</p>
                        </div>
                    </div>
                </section>

                <!-- Use Cases -->
                <section
                    class="neo-section"
                    :class="{ 'section-visible': isVisible }"
                >
                    <div class="section-header">
                        <div class="header-line"></div>
                        <h2>
                            {{
                                currentMessages.Idensyra?.useCasesTitle ||
                                "Who is Idensyra for?"
                            }}
                        </h2>
                        <div class="header-line"></div>
                    </div>
                    <div class="use-cases-grid">
                        <div
                            class="use-case-card"
                            v-for="(u, i) in idensyra.useCases"
                            :key="i"
                        >
                            <h4>{{ u.title }}</h4>
                            <p>{{ u.description }}</p>
                        </div>
                    </div>
                </section>

                <!-- Supported Packages -->
                <section
                    class="neo-section supported-packages"
                    :class="{ 'section-visible': isVisible }"
                >
                    <div class="section-header">
                        <div class="header-line"></div>
                        <h2>
                            {{
                                currentMessages.Idensyra?.supportedTitle ||
                                "Supported Packages"
                            }}
                        </h2>
                        <div class="header-line"></div>
                    </div>
                    <div class="tag-list">
                        <span
                            class="tag"
                            v-for="(p, i) in idensyra.supportedPackages"
                            :key="i"
                            >{{ p }}</span
                        >
                    </div>
                </section>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "Idensyra",
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
    computed: {
        idensyra() {
            // Provide sensible defaults so page renders even if locales aren't added yet
            const defaults = {
                title: "Idensyra",
                subtitle: "",
                description: "Idensyra is a dedicated IDE for Insyra.",
                downloadButton: { text: "Download Idensyra" },
                repo: {
                    text: "View Idensyra Source Code",
                    link: "https://github.com/HazelnutParadise/idensyra",
                },
                backToHowToUseText: "Back to How to Use",
                features: [],
            };
            return this.currentMessages && this.currentMessages.Idensyra
                ? this.currentMessages.Idensyra
                : defaults;
        },
    },
    mounted() {
        // simple entrance animation
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

.idensyra-page {
    min-height: 100vh;
    background: #1a1a2e;
    color: #ffffff;
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
        rgba(26, 26, 46, 0.97) 0%,
        rgba(40, 40, 80, 0.95) 100%
    );
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
    color: #f9ac41;
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
    color: #ff69b4;
    text-shadow: 0 0 5px rgba(255, 105, 180, 0.3);
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
    background: rgba(20, 20, 40, 0.8);
    border: 1px solid rgba(255, 227, 176, 0.2);
    border-radius: 15px;
    padding: 30px;
    margin-bottom: 30px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(255, 227, 176, 0.1);
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out 0.6s;
    position: relative;
}

.section-visible {
    opacity: 1;
    transform: translateY(0);
}

.section-header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.header-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #a2d5ab, #ff69b4, #a2d5ab);
}

h2 {
    color: #fbe3b0;
    margin: 0 20px;
    font-size: 2rem;
}

.ide-intro {
    padding-bottom: 20px;
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
    background: rgba(25, 25, 45, 0.8);
    border: 1px solid rgba(255, 227, 176, 0.2);
    border-radius: 15px;
    padding: 20px 20px;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 227, 176, 0.1);
}

.mode-card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    display: block;
}

.mode-card:hover {
    transform: translateY(-5px);
}

.cyber-button {
    margin-top: 40px;
    display: inline-block;
    padding: 15px 30px;
    background: linear-gradient(45deg, #a2d5ab, #ff69b4);
    color: #1a1a2e;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.cyber-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 227, 176, 0.5);
    background: linear-gradient(45deg, #ff69b4, #a2d5ab);
}

.photo-gallery {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 0 auto;
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
    color: #fbe3b0;
    text-decoration: underline;
}

.cyber-link:hover {
    color: #ff69b4;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.feature-card {
    background: rgba(25, 25, 45, 0.8);
    border: 1px solid rgba(255, 105, 180, 0.2);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 105, 180, 0.1);
    height: 100%;
}

.feature-card:hover {
    transform: translateY(-5px);
    border-color: #ff69b4;
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.2);
}

.feature-icon {
    font-size: 2rem;
    margin-bottom: 10px;
}

.feature-card h4 {
    color: #fbe3b0;
    margin: 10px 0;
    font-size: 1.2rem;
}

.feature-card p {
    font-size: 1rem;
    word-break: break-word;
}

.ide-description {
    margin: 0 auto;
    max-width: 800px;
}

.use-cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.use-case-card {
    background: rgba(255, 227, 176, 0.05);
    border: 1px solid rgba(255, 227, 176, 0.1);
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s ease;
    height: 100%;
}

.use-case-card:hover {
    background: rgba(255, 227, 176, 0.1);
    transform: translateY(-3px);
}

.use-case-card h4 {
    color: #f9ac41;
    margin-bottom: 10px;
}

@media (max-width: 768px) {
    .cyber-title {
        font-size: 2.5rem;
    }

    .mode-cards {
        grid-template-columns: 1fr;
    }

    .features-grid,
    .use-cases-grid {
        grid-template-columns: 1fr;
    }
}

/* Tags for supported packages */
.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
}

.tag {
    background: rgba(255, 227, 176, 0.06);
    padding: 6px 10px;
    border-radius: 8px;
    color: #fbe3b0;
    border: 1px solid rgba(255, 105, 180, 0.06);
    font-weight: 500;
}

/* Examples code blocks */
.examples-section pre {
    background: rgba(15, 15, 35, 0.95);
    border-radius: 8px;
    padding: 12px;
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-all;
}

/* Screenshot styling */
.photo-gallery img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
}
</style>
