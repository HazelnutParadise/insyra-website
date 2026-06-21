<template>
  <div class="syralit-page">
    <!-- Hero -->
    <section class="sy-hero">
      <div class="container">
        <h1>{{ sy.title }}</h1>
        <p class="sy-subtitle">{{ sy.subtitle }}</p>
        <p class="sy-description">{{ sy.description }}</p>
        <div class="sy-cta">
          <a class="sy-btn primary" :href="sy.repo.link" target="_blank" rel="noopener">
            {{ sy.repo.text }}
          </a>
          <a class="sy-btn ghost" :href="sy.backHref">{{ sy.backText }}</a>
        </div>
      </div>
    </section>

    <section class="sy-body">
      <div class="container">
        <!-- Quick start -->
        <div class="sy-install">
          <h2>{{ sy.install.title }}</h2>
          <pre class="sy-code"><code>{{ installScript }}</code></pre>
          <p class="sy-install-note">{{ sy.install.note }}</p>
        </div>

        <!-- Screenshots -->
        <h2 class="sy-section-title">{{ sy.screenshotsTitle }}</h2>
        <div class="sy-gallery">
          <figure class="sy-shot" v-for="(s, i) in sy.screenshots" :key="i">
            <img :src="s.src" :alt="s.alt" loading="lazy" />
            <figcaption>{{ s.caption }}</figcaption>
          </figure>
        </div>

        <!-- Key features -->
        <h2 class="sy-section-title">{{ sy.featuresTitle }}</h2>
        <div class="sy-features">
          <div class="sy-feature" v-for="(f, i) in sy.keyFeatures" :key="i">
            <div class="sy-feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.description }}</p>
          </div>
        </div>

        <!-- Ecosystem note -->
        <div class="sy-ecosystem">
          <p>{{ sy.ecosystemNote }}</p>
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
    installScript() {
      return (this.sy.install.steps || []).join("\n");
    },
  },
};
</script>

<style scoped>
.syralit-page {
  background-color: #f4f4f4;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.sy-hero {
  padding: 80px 0 60px;
  background: linear-gradient(135deg, #764ba2 0%, #1f449b 100%);
  color: #ffffff;
  text-align: center;
}

.sy-hero h1 {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}

.sy-subtitle {
  font-size: 1.3rem;
  color: #f9ac41;
  font-weight: 600;
  margin-bottom: 20px;
}

.sy-description {
  font-size: 1.15rem;
  line-height: 1.75;
  max-width: 760px;
  margin: 0 auto 30px;
  color: #e8e3f2;
}

.sy-cta {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.sy-btn {
  display: inline-block;
  padding: 12px 26px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}

.sy-btn.primary {
  background: #f9ac41;
  color: #1a1a2e;
}

.sy-btn.primary:hover {
  transform: translateY(-2px);
  background: #ffbe63;
}

.sy-btn.ghost {
  border: 2px solid rgba(255, 255, 255, 0.6);
  color: #ffffff;
}

.sy-btn.ghost:hover {
  border-color: #f9ac41;
  transform: translateY(-2px);
}

.sy-body {
  padding: 56px 0 90px;
}

.sy-install {
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 32px 36px;
  margin-bottom: 56px;
  text-align: left;
}

.sy-install h2 {
  color: #764ba2;
  font-size: 1.6rem;
  margin-bottom: 18px;
}

.sy-code {
  background: #1a1a2e;
  color: #a8e6cf;
  border-radius: 10px;
  padding: 20px 22px;
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 0.95rem;
  line-height: 1.8;
  margin: 0 0 14px;
  text-align: left;
  white-space: pre;
}

.sy-install-note {
  color: #7f8c8d;
  font-size: 0.95rem;
  font-style: italic;
}

.sy-section-title {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 32px;
}

.sy-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
  margin-bottom: 56px;
}

.sy-shot {
  margin: 0;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.sy-shot:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 32px rgba(118, 75, 162, 0.18);
}

.sy-shot img {
  display: block;
  width: 100%;
  height: auto;
}

.sy-shot figcaption {
  padding: 12px 18px 16px;
  color: #2c3e50;
  font-size: 0.95rem;
  line-height: 1.55;
  text-align: center;
}

.sy-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
  margin-bottom: 56px;
}

.sy-feature {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 26px 24px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.sy-feature:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(118, 75, 162, 0.15);
}

.sy-feature-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.sy-feature h3 {
  color: #667eea;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.sy-feature p {
  color: #2c3e50;
  line-height: 1.7;
  font-size: 1rem;
}

.sy-ecosystem {
  background: linear-gradient(135deg, rgba(118, 75, 162, 0.08), rgba(31, 68, 155, 0.08));
  border: 2px dashed #f9ac41;
  border-radius: 14px;
  padding: 30px 36px;
  text-align: center;
}

.sy-ecosystem p {
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 768px) {
  .sy-hero h1 {
    font-size: 2.3rem;
  }

  .sy-subtitle {
    font-size: 1.1rem;
  }

  .sy-install,
  .sy-ecosystem {
    padding: 24px 22px;
  }

  .sy-code {
    font-size: 0.85rem;
  }
}
</style>
