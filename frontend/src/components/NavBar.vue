<template>

<nav class="navbar">
    <div class="logo">
        <a href="/">
            <img id="logo-img" src="../assets/logo.png" alt="Insyra Logo" />
        </a>
    </div>
    <ul class="nav-menu">
      <li><a href="#">{{ currentMessages.navbar.whyInsyra }}</a></li>
      <li><a href="#">{{ currentMessages.navbar.howToUse }}</a></li>
      <li><a href="#">{{ currentMessages.navbar.features }}</a></li>
      <li><a href="#">{{ currentMessages.navbar.contact }}</a></li>
    </ul>
    <LanguageSelector @language-changed="updateLanguage" />
  </nav>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue'

export default {
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
  components: {
    LanguageSelector
  },
  methods: {
    updateLanguage(lang) {
      this.$emit('language-changed', lang);
    }
  }
}
</script>

<style scoped>
/* Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #1f449b;
}

.logo {
  color: #fff;
  font-size: 24px;
}

.logo img {
  width: auto;
  height: 50px;
  background-color: #fff;
  padding: 0px 15px;
  border-radius: 5px;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-menu li a {
  color: #fff;
  text-decoration: none;
}

.nav-menu li a:hover {
  text-decoration: underline;
}
</style>
