<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <Hero />

    <!-- Features Section -->
    <section class="features">
      <div class="feature">
        <h3>Feature 1</h3>
        <p>Description of feature 1.</p>
      </div>
      <div class="feature">
        <h3>Feature 2</h3>
        <p>Description of feature 2.</p>
      </div>
      <div class="feature">
        <h3>Feature 3</h3>
        <p>Description of feature 3.</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>© 2024 HazelnutParadise. All Rights Reserved.</p>
      <ul class="social-links">
        <li><a href="#">Twitter</a></li>
        <li><a href="#">LinkedIn</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import Hero from './components/Hero.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Hero
  }
};
</script>

<style scoped>

/* Features Section */
.features {
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
}

.feature {
  text-align: center;
  max-width: 300px;
}

.feature h3 {
  margin-bottom: 10px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
}

.social-links {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-links li a {
  color: #fff;
  text-decoration: none;
}
</style>
