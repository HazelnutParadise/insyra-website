<template>
  <section class="hero">
    <h1>{{ currentMessages.hero.title }}</h1>
    <p>{{ currentMessages.hero.description }}</p>
    <HeroButton :currentMessages="currentMessages.hero.button.main" :settings="{
      color: '#d73e3e',
      size: 'large',
    }" />
    <br />
    <div class="hero-button-container">
      <HeroButton :currentMessages="currentMessages.hero.button.secondary1" :settings="{
        variant: 'tonal',
        color: '#1f449b',
      }" />
      <HeroButton :currentMessages="currentMessages.hero.button.secondary2" :settings="{
        variant: 'outlined',
        color: '#1f449b',
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
  padding: 100px 20px;
  background-color: #f4f4f4;
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

.hero p {
  font-size: 18px;
  margin-bottom: 30px;
  color: #1f449b;
}

.hero button {
  padding: 10px 20px;
  background-color: #d73e3e;
  color: #fff;
  border: none;
  cursor: pointer;
}

.hero-button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
