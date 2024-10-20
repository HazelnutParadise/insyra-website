<template>
  <section class="hero">
    <h1>{{ currentMessages.hero.title }}</h1>
    <p>{{ currentMessages.hero.description }}</p>
    <HeroButton :currentMessages="currentMessages" />
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
}

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
</style>
