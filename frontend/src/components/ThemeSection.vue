<template>
  <section class="theme-section">
    <div class="theme-container">
      <h2 class="theme-heading">{{ themeSection.heading }}</h2>
      <p class="theme-subheading">{{ themeSection.subheading }}</p>
    </div>

    <div v-for="(theme, index) in themeSection.items" :key="theme.id"
      :class="['theme-row', `theme-row-${index % 2 === 0 ? 'light' : 'tinted'}`]">
      <div :class="['theme-container', 'theme-body', { 'theme-body-reverse': index % 2 === 1 }]">
        <div class="theme-copy">
          <span class="theme-eyebrow" :style="{ color: theme.color }">{{ theme.eyebrow }}</span>
          <h3 class="theme-title">{{ theme.title }}</h3>
          <p class="theme-description">{{ theme.description }}</p>
          <ul class="theme-tags">
            <li v-for="tag in theme.tags" :key="tag" :style="{ borderColor: theme.color, color: theme.color }">{{ tag }}</li>
          </ul>
          <a class="theme-link" :href="theme.learnMore.href" :style="{ color: theme.color }">
            {{ theme.learnMore.text }} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <pre class="theme-code" :style="{ borderTopColor: theme.color }"><code>{{ theme.code }}</code></pre>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    themeSection: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.theme-section {
  position: relative;
  z-index: 1;
  background: #ffffff;
}

.theme-section::before,
.theme-section::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 5px dashed #d73e3e;
  pointer-events: none;
}

.theme-section::before {
  left: clamp(14px, calc((100vw - 1100px) / 2 - 36px), 64px);
}

.theme-section::after {
  right: clamp(14px, calc((100vw - 1100px) / 2 - 36px), 64px);
}

.theme-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.theme-heading {
  position: relative;
  z-index: 2;
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: 12px 40px;
  background: #ffffff;
  border: 5px dashed #d73e3e;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 2.4rem;
  color: #1f449b;
  transform: translateY(-50%);
}

.theme-subheading {
  margin: -8px auto 48px;
  text-align: center;
  font-size: 1.2rem;
  color: #4a5568;
}

.theme-row {
  padding: 56px 0;
}

.theme-row-tinted {
  background: #f4f6fb;
}

.theme-body {
  display: flex;
  align-items: center;
  gap: 56px;
}

.theme-body-reverse {
  flex-direction: row-reverse;
}

.theme-copy {
  flex: 1 1 0;
  min-width: 0;
  text-align: left;
}

.theme-eyebrow {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.theme-title {
  margin: 8px 0 14px;
  font-size: 2rem;
  line-height: 1.3;
  color: #1a1a2e;
}

.theme-description {
  margin-bottom: 18px;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #2c3e50;
}

.theme-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 18px;
  padding: 0;
  list-style: none;
}

.theme-tags li {
  padding: 2px 12px;
  border: 1px solid;
  border-radius: 999px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
}

.theme-link {
  font-weight: 700;
  text-decoration: none;
}

.theme-link:hover {
  text-decoration: underline;
}

.theme-code {
  flex: 1.25 1 0;
  min-width: 0;
  margin: 0;
  padding: 22px 24px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  background: #1e2235;
  border-top: 4px solid;
  border-radius: 6px;
  color: #e6e9f5;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  text-align: left;
}

@media (max-width: 1180px) {
  .theme-container {
    padding: 0 40px;
  }
}

@media (max-width: 800px) {

  .theme-body,
  .theme-body-reverse {
    flex-direction: column;
    align-items: stretch;
    gap: 28px;
  }

  .theme-heading {
    padding: 10px 24px;
    font-size: 1.5rem;
  }

  .theme-title {
    font-size: 1.6rem;
  }

  .theme-row {
    padding: 40px 0;
  }
}
</style>
