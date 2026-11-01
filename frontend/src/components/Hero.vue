<template>
  <section class="hero">
    <h2>{{ currentMessages.Main.hero.slogan }}</h2>
    <h1>{{ currentMessages.Main.hero.title }}</h1>
    <p class="hero-description">{{ currentMessages.Main.hero.description }}</p>

    <!-- 添加音訊播放器組件 -->
    <div class="audio-section">
      <audio controls controlslist="nodownload" class="audio-player">
        <source :src="currentMessages.Main.hero.audio.url" type="audio/wav">
        {{ currentMessages.Main.hero.audio.error }}
      </audio>
      <p class="audio-description">{{ currentMessages.Main.hero.audio.description }}</p>
    </div>

    <HeroButton :currentMessages="currentMessages.Main.hero.button.main" :settings="{
      color: 'var(--insyra-red)',
      size: 'large',
      href: '#HowToUse',
      class: 'hero-main-btn',
    }" />
    <br />
    <div class="hero-button-container">
      <HeroButton :currentMessages="currentMessages.Main.hero.button.docs" :settings="{
        variant: 'tonal',
        color: 'var(--insyra-orange)',
        href: 'https://hazelnutparadise.github.io/insyra/',
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'hero-docs-btn',
      }" />
      <HeroButton :currentMessages="currentMessages.Main.hero.button.secondary1" :settings="{
        variant: 'tonal',
        color: 'var(--insyra-blue)',
        href: 'https://pkg.go.dev/github.com/HazelnutParadise/insyra',
        target: '_blank',
        rel: 'noopener noreferrer',
      }" />
      <HeroButton :currentMessages="currentMessages.Main.hero.button.chat" :settings="{
        variant: 'tonal',
        color: 'var(--insyra-teal)',
        href: 'https://context7.com/hazelnutparadise/insyra?tab=chat',
        target: '_blank',
        rel: 'noopener noreferrer',
      }" />
      <HeroButton :currentMessages="currentMessages.Main.hero.button.mcp" :settings="{
        variant: 'tonal',
        color: 'var(--insyra-purple)',
        href: 'https://gitmcp.io/HazelnutParadise/insyra',
        target: '_blank',
        rel: 'noopener noreferrer',
      }" />
      <HeroButton :currentMessages="currentMessages.Main.hero.button.secondary2" :settings="{
        variant: 'outlined',
        color: 'var(--insyra-blue)',
        href: 'https://github.com/HazelnutParadise/insyra',
        target: '_blank',
        rel: 'noopener noreferrer',
      }" />
    </div>
  </section>
</template>

<script>
import HeroButton from './HeroButton.vue';

export default {
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
  components: {
    HeroButton,
  },
};
</script>

<style scoped>
/* Hero Section */
.hero {
  text-align: center;
  padding: 75px 20px;
  background-color: var(--gray-96b);
  /* 添加斜線 */
  background-image:
    /* linear-gradient(-12deg, var(--blue-79) 20%, transparent 20%, transparent 80%, transparent 80%, transparent), */
    linear-gradient(45deg, var(--insyra-orange) 25%, transparent 25%, transparent 75%, var(--gray-96) 75%, transparent),
    linear-gradient(45deg, transparent 25%, transparent 25%, transparent 75%, var(--insyra-blue) 75%, var(--insyra-blue));
}


/* 其他樣式保持不變 */
.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: var(--insyra-blue);
}

.hero h2 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: var(--insyra-blue);
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  color: var(--insyra-blue);
}

.hero-description {
  max-width: 920px;
  margin: 0 auto 30px;
  line-height: 1.7;
}

.hero button {
  padding: 10px 20px;
  background-color: var(--insyra-red);
  color: var(--white);
  border: none;
  cursor: pointer;
}

.hero-button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  /* allow buttons to wrap on smaller screens */
  align-items: center;
}

/* Vuetify picks a filled button's text colour only from a colour it can parse,
   and it cannot parse var(--…), so the filled button states its own. */
:deep(.hero-main-btn) {
  color: var(--white) !important;
}

.hero-button-container :deep(.hero-docs-btn) {
  background: rgba(var(--white-rgb), 0.96) !important;
  color: var(--orange-39) !important;
  border: 2px solid var(--orange-62) !important;
  box-shadow: 0 8px 22px rgba(var(--orange-39-rgb), 0.2);
  backdrop-filter: blur(4px);
}

.hero-button-container :deep(.hero-docs-btn:hover) {
  background: var(--white) !important;
  box-shadow: 0 12px 28px rgba(var(--orange-39-rgb), 0.28);
}

@media (max-width: 768px) {
  .hero {
    background-image:
      linear-gradient(45deg, var(--insyra-orange) 20%, transparent 20%, transparent 80%, var(--gray-96) 80%, transparent),
      linear-gradient(45deg, transparent 20%, transparent 20%, transparent 80%, var(--insyra-blue) 80%, var(--insyra-blue));
  }

  .hero-button-container {
    gap: 12px;
  }

  /* reduce button size a bit on tablets */
  .hero-button-container .v-btn {
    font-size: 0.95rem;
    padding: 8px 14px;
  }
}

/* On small phones, stack the small buttons and make them full width */
@media (max-width: 480px) {
  .hero-button-container {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }

  .hero-button-container .v-btn {
    width: 100%;
    box-sizing: border-box;
  }
}

/* 添加音訊播放器樣式 */
.audio-section {
  margin: 20px auto;
  max-width: 500px;
  padding: 10px !important;
  background: rgba(var(--white-rgb), 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(var(--black-rgb), 0.1);
}

.audio-player {
  width: 100%;
}

.audio-player::-webkit-media-controls-panel {
  background-color: var(--white);
}

.audio-description {
  font-size: 14px;
  color: var(--gray-29);
  padding: 0 !important;
  margin: 0 !important;
  margin-bottom: 10px !important;
}

@media (max-width: 768px) {
  .audio-section {
    width: 100%;
    border-radius: 0;
    margin: 15px auto;
  }
}
</style>
