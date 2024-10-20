<template>
    <header class="hero">
      <h1>Welcome to Insyra</h1>
      <p>Powerful data analysis tools built for the future.</p>
      <!-- <button>Get Started</button> -->
      <HeroButton />
    </header>
</template>

<script >
import HeroButton from './HeroButton.vue'

export default {
  components: {
    HeroButton
  }
}
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