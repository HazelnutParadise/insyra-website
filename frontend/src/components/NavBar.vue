<template>

<nav class="insyra-navbar">
    <div class="insyra-logo">
        <a href="/">
          <img id="logo-img" src="../assets/logo.png" alt="Insyra Logo" />
        </a>
    </div>
    <ul class="nav-menu">
      <li><a href="#">{{ currentMessages.navbar.whatIsInsyra }}</a></li>
      <li><a href="#">{{ currentMessages.navbar.whyInsyra }}</a></li>
      <li><a href="#">{{ currentMessages.navbar.howToUse }}</a></li>
      <li><a href="#">{{ currentMessages.navbar.features }}</a></li>
      <li><a href="#">{{ currentMessages.navbar.contact }}</a></li>
    </ul>
    <LanguageSelector @language-changed="updateLanguage" :current-language="currentLanguage" />
    <HamburgerMenu @language-changed="updateLanguage" :currentMessages="currentMessages" :current-language="currentLanguage" />
  </nav>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue'
import HamburgerMenu from './HamburgerMenu.vue'
export default {
  setup() {
    let currentLanguage = '繁體中文'
    return {
      currentLanguage
    }
  },
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
  components: {
    LanguageSelector,
    HamburgerMenu
  },
  methods: {
    updateLanguage(lang) {
      this.$emit('language-changed', lang);
      localStorage.setItem('language', lang);
    }
  }
}
</script>

<style scoped>
/* Navigation */
.insyra-navbar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #1f449b;
  z-index: 1;
}

.insyra-logo {
  color: #fff;
  font-size: 24px;
}

.insyra-logo img {
  width: auto;
  height: 50px;
  background-color: #fff;
  padding: 0px 15px;
  border-radius: 5px;
  margin: 0;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
}

.nav-menu li a {
  color: #fff;
  text-decoration: none;
}

.nav-menu li a:hover {
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .insyra-navbar .nav-menu {
    display: none;
  }
  .language-selector {
    display: none;
  }
}
</style>
