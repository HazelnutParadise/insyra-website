<template>
  <section class="hero">
    <h2>{{ currentMessages.Main.hero.slogan }}</h2>
    <h1>{{ currentMessages.Main.hero.title }}</h1>
    <p>{{ currentMessages.Main.hero.description }}</p>

    <!-- 添加音訊播放器組件 -->
    <div class="audio-section">
      <audio controls controlslist="nodownload" class="audio-player">
        <source src="https://src.hazelnut-paradise.com/Insyra_introduce.wav" type="audio/wav">
        {{ currentMessages.Main.hero.audio.error }}
      </audio>
      <p class="audio-description">{{ currentMessages.Main.hero.audio.description }}</p>
    </div>

    <HeroButton :currentMessages="currentMessages.Main.hero.button.main" :settings="{
      color: '#d73e3e',
      size: 'large',
      href: '#HowToUse',
    }" />
    <br />
    <div class="hero-button-container">
      <HeroButton :currentMessages="currentMessages.Main.hero.button.secondary1" :settings="{
        variant: 'tonal',
        color: '#1f449b',
        href: 'https://pkg.go.dev/github.com/HazelnutParadise/insyra',
      }" />
      <HeroButton :currentMessages="currentMessages.Main.hero.button.chat" :settings="{
        variant: 'tonal',
        color: '#2a9d8f',
        href: 'https://context7.com/hazelnutparadise/insyra?tab=chat',
        target: '_blank',
        rel: 'noopener noreferrer',
      }" />
      <HeroButton :currentMessages="currentMessages.Main.hero.button.mcp" :settings="{
        variant: 'tonal',
        color: '#6f42c1',
        href: 'https://gitmcp.io/HazelnutParadise/insyra',
        target: '_blank',
        rel: 'noopener noreferrer',
      }" />
      <HeroButton :currentMessages="currentMessages.Main.hero.button.secondary2" :settings="{
        variant: 'outlined',
        color: '#1f449b',
        href: 'https://github.com/HazelnutParadise/insyra',
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
  background-color: #f5f5f5;
  /* 添加斜線 */
  background-image:
    /* linear-gradient(-12deg, #adc3e6 20%, transparent 20%, transparent 80%, transparent 80%, transparent), */
    linear-gradient(45deg, #f9ac41 25%, transparent 25%, transparent 75%, #f4f4f4 75%, transparent),
    linear-gradient(45deg, transparent 25%, transparent 25%, transparent 75%, #1f449b 75%, #1f449b);
}


/* 其他樣式保持不變 */
.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #1f449b;
}

.hero h2 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #1f449b;
}

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  color: #1f449b;
}

.hero button {
  padding: 10px 20px;
  background-color: #d73e3e;
  color: #ffffff;
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

@media (max-width: 768px) {
  .hero {
    background-image:
      linear-gradient(45deg, #f9ac41 20%, transparent 20%, transparent 80%, #f4f4f4 80%, transparent),
      linear-gradient(45deg, transparent 20%, transparent 20%, transparent 80%, #1f449b 80%, #1f449b);
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
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.audio-player {
  width: 100%;
}

.audio-player::-webkit-media-controls-panel {
  background-color: #ffffff;
}

.audio-description {
  font-size: 14px;
  color: #4a4a4a;
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
