<template>
  <div class="syralit-page">
    <!-- HERO -->
    <section class="sy-hero">
      <div class="sy-hero-bg" aria-hidden="true"></div>
      <div class="sy-container sy-hero-grid">
        <div class="sy-hero-text">
          <span class="sy-badge">{{ sy.heroBadge }}</span>
          <h1>{{ sy.title }}</h1>
          <p class="sy-subtitle">{{ sy.subtitle }}</p>
          <p class="sy-description">{{ sy.description }}</p>
          <div class="sy-cta">
            <a class="sy-btn primary" :href="sy.repo.link" target="_blank" rel="noopener">
              {{ sy.repo.text }}
              <span class="sy-btn-arrow" aria-hidden="true">&rarr;</span>
            </a>
            <a class="sy-btn ghost" :href="sy.backHref">{{ sy.backText }}</a>
          </div>
        </div>

        <div class="sy-hero-visual">
          <div class="sy-code-card">
            <div class="sy-window-chrome">
              <span class="sy-dot dot-r"></span>
              <span class="sy-dot dot-y"></span>
              <span class="sy-dot dot-g"></span>
              <span class="sy-window-title">app.go</span>
            </div>
<pre class="sy-hero-code"><code><span class="tk-c">// Write a Go func, get a web app.</span>
<span class="tk-k">package</span> main

<span class="tk-k">import</span> <span class="tk-s">"…/syralit/sy"</span>

<span class="tk-k">func</span> <span class="tk-f">App</span>(c *sy.<span class="tk-t">Context</span>) {
  sy.<span class="tk-f">Title</span>(<span class="tk-s">"Sales"</span>)
  r := sy.<span class="tk-f">Select</span>(<span class="tk-s">"Region"</span>, list)
  sy.<span class="tk-f">LineChart</span>(<span class="tk-f">Query</span>(r))
}</code></pre>
          </div>
          <div class="sy-arrow" aria-hidden="true">
            <span class="sy-arrow-line"></span>
            <span class="sy-arrow-tip">&rarr;</span>
            <span class="sy-arrow-label">{{ sy.heroArrowLabel }}</span>
          </div>
          <div class="sy-app-card">
            <div class="sy-window-chrome">
              <span class="sy-dot dot-r"></span>
              <span class="sy-dot dot-y"></span>
              <span class="sy-dot dot-g"></span>
              <span class="sy-window-title">localhost:8080</span>
            </div>
            <img
              :src="sy.screenshots[0].src"
              :alt="sy.screenshots[0].alt"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- QUICK START -->
    <section class="sy-section sy-quickstart-section">
      <div class="sy-container">
        <h2 class="sy-section-title">{{ sy.install.title }}</h2>
        <p class="sy-section-lede">{{ sy.install.lede }}</p>
        <div class="sy-terminal">
          <div class="sy-window-chrome dark">
            <span class="sy-dot dot-r"></span>
            <span class="sy-dot dot-y"></span>
            <span class="sy-dot dot-g"></span>
            <span class="sy-window-title">~ — bash</span>
          </div>
<pre class="sy-terminal-body"><code><template v-for="(line, i) in sy.install.steps" :key="i"><span class="sy-prompt">$</span> {{ line }}{{ '\n' }}</template></code></pre>
        </div>
        <p class="sy-install-note">{{ sy.install.note }}</p>
      </div>
    </section>

    <!-- SCREENSHOTS -->
    <section class="sy-section sy-shots-section">
      <div class="sy-container">
        <h2 class="sy-section-title">{{ sy.screenshotsTitle }}</h2>
        <p class="sy-section-lede">{{ sy.screenshotsLede }}</p>
        <div class="sy-shots-grid">
          <figure class="sy-shot main">
            <div class="sy-shot-frame">
              <div class="sy-window-chrome">
                <span class="sy-dot dot-r"></span>
                <span class="sy-dot dot-y"></span>
                <span class="sy-dot dot-g"></span>
                <span class="sy-window-title">{{ sy.screenshots[0].title }}</span>
              </div>
              <img
                :src="sy.screenshots[0].src"
                :alt="sy.screenshots[0].alt"
                loading="lazy"
              />
            </div>
            <figcaption>{{ sy.screenshots[0].caption }}</figcaption>
          </figure>
          <figure class="sy-shot" v-for="s in sy.screenshots.slice(1)" :key="s.src">
            <div class="sy-shot-frame">
              <div class="sy-window-chrome">
                <span class="sy-dot dot-r"></span>
                <span class="sy-dot dot-y"></span>
                <span class="sy-dot dot-g"></span>
                <span class="sy-window-title">{{ s.title }}</span>
              </div>
              <img :src="s.src" :alt="s.alt" loading="lazy" />
            </div>
            <figcaption>{{ s.caption }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- KEY FEATURES -->
    <section class="sy-section sy-features-section">
      <div class="sy-container">
        <h2 class="sy-section-title">{{ sy.featuresTitle }}</h2>
        <p class="sy-section-lede">{{ sy.featuresLede }}</p>
        <div class="sy-features">
          <div class="sy-feature" v-for="(f, i) in sy.keyFeatures" :key="i">
            <div class="sy-feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ECOSYSTEM FLOW -->
    <section class="sy-section sy-eco-section">
      <div class="sy-container">
        <h2 class="sy-section-title light">{{ sy.ecosystemFlow.title }}</h2>
        <p class="sy-section-lede light">{{ sy.ecosystemNote }}</p>
        <div class="sy-eco-flow">
          <div
            class="sy-eco-node"
            v-for="(node, i) in sy.ecosystemFlow.nodes"
            :key="node.name"
            :class="{ active: node.active }"
          >
            <div class="sy-eco-step">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="sy-eco-name">{{ node.name }}</div>
            <div class="sy-eco-role">{{ node.role }}</div>
            <div class="sy-eco-action">{{ node.action }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Syralit",
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sy() {
      return this.currentMessages.Syralit;
    },
  },
};
</script>

<style scoped>
.syralit-page {
  background-color: #f5f4f8;
}

.sy-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* ===== HERO ===== */
.sy-hero {
  position: relative;
  padding: 90px 0 100px;
  background: linear-gradient(135deg, #1f1640 0%, #764ba2 55%, #1f449b 100%);
  color: #ffffff;
  overflow: hidden;
}

.sy-hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(249, 172, 65, 0.18), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(168, 230, 207, 0.12), transparent 45%);
  pointer-events: none;
}

.sy-hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 1.35fr;
  gap: 60px;
  align-items: center;
}

.sy-hero-text {
  text-align: left;
}

.sy-badge {
  display: inline-block;
  padding: 5px 14px;
  border: 1px solid rgba(249, 172, 65, 0.7);
  background: rgba(249, 172, 65, 0.12);
  border-radius: 999px;
  color: #f9ac41;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.sy-hero-text h1 {
  font-size: 3.1rem;
  font-weight: 300;
  letter-spacing: -1px;
  line-height: 1.15;
  margin: 0 0 16px;
}

.sy-subtitle {
  color: #f9ac41;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.55;
  margin: 0 0 18px;
}

.sy-description {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #e6e0f5;
  margin: 0 0 28px;
}

.sy-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.sy-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.sy-btn.primary {
  background: #f9ac41;
  color: #1a1a2e !important;
  box-shadow: 0 8px 24px rgba(249, 172, 65, 0.35);
}

.sy-btn.primary:hover {
  background: #ffbe63;
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(249, 172, 65, 0.45);
}

.sy-btn.ghost {
  border: 1px solid rgba(255, 255, 255, 0.55);
  color: #ffffff !important;
}

.sy-btn.ghost:hover {
  border-color: #f9ac41;
  background: rgba(249, 172, 65, 0.08);
}

.sy-btn-arrow {
  transition: transform 0.25s ease;
}

.sy-btn.primary:hover .sy-btn-arrow {
  transform: translateX(3px);
}

/* HERO VISUAL: code → arrow → app */
.sy-hero-visual {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 14px;
}

/* shared window-frame for code and app cards */
.sy-window-chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #2a2540;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.sy-window-chrome.dark {
  background: #14101f;
}

.sy-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-block;
}

.dot-r { background: #ff5f57; }
.dot-y { background: #febc2e; }
.dot-g { background: #28c840; }

.sy-window-title {
  margin-left: 10px;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.55);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  letter-spacing: 0.3px;
}

.sy-code-card,
.sy-app-card {
  background: #1c1730;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.sy-hero-code {
  margin: 0;
  padding: 18px 20px;
  color: #d8d4f0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.78rem;
  line-height: 1.65;
  text-align: left;
  white-space: pre;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(249, 172, 65, 0.45) transparent;
}

.sy-hero-code::-webkit-scrollbar {
  height: 6px;
}

.sy-hero-code::-webkit-scrollbar-track {
  background: transparent;
}

.sy-hero-code::-webkit-scrollbar-thumb {
  background: rgba(249, 172, 65, 0.4);
  border-radius: 999px;
}

.sy-hero-code::-webkit-scrollbar-thumb:hover {
  background: rgba(249, 172, 65, 0.65);
}

.tk-c { color: #7c739f; font-style: italic; }
.tk-k { color: #ff79c6; }
.tk-s { color: #a8e6cf; }
.tk-f { color: #f9ac41; }
.tk-t { color: #79d3ff; }

.sy-app-card img {
  display: block;
  width: 100%;
  height: auto;
}

.sy-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #f9ac41;
}

.sy-arrow-line {
  display: block;
  width: 28px;
  height: 2px;
  background: #f9ac41;
}

.sy-arrow-tip {
  font-size: 1.3rem;
  line-height: 1;
}

.sy-arrow-label {
  font-size: 0.7rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  margin-top: 4px;
  color: rgba(249, 172, 65, 0.9);
  text-align: center;
}

/* ===== SECTION BASE ===== */
.sy-section {
  padding: 80px 0;
}

.sy-section-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2.1rem;
  font-weight: 300;
  letter-spacing: -0.4px;
  margin: 0 0 12px;
}

.sy-section-title.light {
  color: #ffffff;
}

.sy-section-lede {
  text-align: center;
  color: #6c6480;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 720px;
  margin: 0 auto 40px;
}

.sy-section-lede.light {
  color: rgba(255, 255, 255, 0.78);
}

/* ===== QUICK START ===== */
.sy-quickstart-section {
  background: #f5f4f8;
}

.sy-terminal {
  max-width: 760px;
  margin: 0 auto 16px;
  background: #14101f;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.sy-terminal-body {
  margin: 0;
  padding: 22px 24px;
  color: #d8e6cf;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.95rem;
  line-height: 1.85;
  text-align: left;
  white-space: pre;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(249, 172, 65, 0.45) transparent;
}

.sy-terminal-body::-webkit-scrollbar {
  height: 6px;
}

.sy-terminal-body::-webkit-scrollbar-track {
  background: transparent;
}

.sy-terminal-body::-webkit-scrollbar-thumb {
  background: rgba(249, 172, 65, 0.4);
  border-radius: 999px;
}

.sy-terminal-body::-webkit-scrollbar-thumb:hover {
  background: rgba(249, 172, 65, 0.65);
}

.sy-prompt {
  color: #f9ac41;
  margin-right: 10px;
  user-select: none;
}

.sy-install-note {
  text-align: center;
  color: #6c6480;
  font-size: 0.92rem;
  font-style: italic;
  margin: 0;
}

/* ===== SCREENSHOTS ===== */
.sy-shots-section {
  background: #ffffff;
}

.sy-shots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.sy-shot {
  margin: 0;
}

.sy-shot.main {
  grid-column: 1 / -1;
}

.sy-shot-frame {
  background: #1c1730;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 14px 36px rgba(31, 22, 64, 0.18);
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sy-shot:hover .sy-shot-frame {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(118, 75, 162, 0.25);
}

.sy-shot-frame img {
  display: block;
  width: 100%;
  height: auto;
  background: #f5f4f8;
}

.sy-shot figcaption {
  padding: 14px 6px 0;
  text-align: center;
  color: #2c3e50;
  font-size: 0.98rem;
  line-height: 1.6;
}

/* ===== KEY FEATURES ===== */
.sy-features-section {
  background: #f5f4f8;
}

.sy-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}

.sy-feature {
  background: #ffffff;
  border-radius: 14px;
  padding: 28px 26px;
  box-shadow: 0 6px 20px rgba(31, 22, 64, 0.06);
  border-top: 3px solid transparent;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.sy-feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(118, 75, 162, 0.14);
  border-top-color: #f9ac41;
}

.sy-feature-icon {
  font-size: 1.9rem;
  margin-bottom: 12px;
}

.sy-feature h3 {
  color: #764ba2;
  font-size: 1.18rem;
  margin: 0 0 10px;
  font-weight: 600;
}

.sy-feature p {
  color: #4a4458;
  line-height: 1.7;
  font-size: 0.98rem;
  margin: 0;
}

/* ===== ECOSYSTEM FLOW ===== */
.sy-eco-section {
  background: linear-gradient(135deg, #1f449b 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.sy-eco-flow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-top: 8px;
  position: relative;
}

.sy-eco-flow::before {
  content: "";
  position: absolute;
  top: 60px;
  left: 16%;
  right: 16%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    rgba(249, 172, 65, 0.55) 0,
    rgba(249, 172, 65, 0.55) 6px,
    transparent 6px,
    transparent 12px
  );
  z-index: 0;
}

.sy-eco-node {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 28px 24px;
  text-align: center;
  backdrop-filter: blur(6px);
}

.sy-eco-node.active {
  background: rgba(249, 172, 65, 0.14);
  border-color: #f9ac41;
  box-shadow: 0 14px 36px rgba(249, 172, 65, 0.2);
}

.sy-eco-step {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background: #f9ac41;
  color: #1a1a2e;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 14px;
}

.sy-eco-name {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.sy-eco-role {
  color: #f9ac41;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.6px;
  margin-bottom: 14px;
  text-transform: uppercase;
}

.sy-eco-action {
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.98rem;
  line-height: 1.65;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 960px) {
  .sy-hero {
    padding: 70px 0 80px;
  }

  .sy-hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .sy-hero-text h1 {
    font-size: 2.4rem;
  }

  .sy-hero-visual {
    grid-template-columns: 1fr;
  }

  .sy-arrow {
    transform: rotate(90deg);
  }

  .sy-shots-grid {
    grid-template-columns: 1fr;
  }

  .sy-eco-flow {
    grid-template-columns: 1fr;
  }

  .sy-eco-flow::before {
    display: none;
  }
}

@media (max-width: 600px) {
  .sy-section {
    padding: 60px 0;
  }

  .sy-section-title {
    font-size: 1.7rem;
  }

  .sy-hero-code {
    font-size: 0.72rem;
  }

  .sy-terminal-body {
    font-size: 0.85rem;
    padding: 18px 18px;
  }

  .sy-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .sy-btn {
    justify-content: center;
  }
}
</style>
