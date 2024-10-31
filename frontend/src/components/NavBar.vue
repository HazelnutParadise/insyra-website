<template>
  <div class="place-holder"></div>
  <nav class="insyra-navbar">
    <div class="insyra-logo">
      <a href="/">
        <img id="logo-img" src="../assets/logo.webp" alt="Insyra Logo" />
      </a>
    </div>
    <ul class="nav-menu">
      <li><a href="#Main">{{ currentMessages.navbar.main }}</a></li>
      <li><a href="#WhatIsInsyra">{{ currentMessages.navbar.whatIsInsyra }}</a></li>
      <li><a href="#Features">{{ currentMessages.navbar.features }}</a></li>
      <li><a href="#HowToUse">{{ currentMessages.navbar.howToUse }}</a></li>
      <li><a href="#WhyInsyra">{{ currentMessages.navbar.whyInsyra }}</a></li>
      <li><a href="#Contact">{{ currentMessages.navbar.contact }}</a></li>
    </ul>
    <LanguageSelector @language-changed="updateLanguage" :current-language="currentLanguage" />
    <HamburgerMenu @language-changed="updateLanguage" :currentMessages="currentMessages" :current-language="currentLanguage" />
  </nav>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue'
import HamburgerMenu from './HamburgerMenu.vue'

export default {
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
    },
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}

.place-holder {
  height: 80px;
  display: none;
}

/* Navigation */
.insyra-navbar {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  padding-bottom: 10px;
  background-color: #1f449b;
  z-index: 999;
}

.insyra-logo {
  margin: 0;
  padding: 0;
}


.insyra-logo img {
  margin: 0;
  width: auto;
  height: 40px;
  background-color: #ffffff;
  padding: 0px 15px;
  border-radius: 5px;
  margin: 0;
}

.nav-menu {
  margin: 0;
  list-style: none;
  display: flex;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
}

.nav-menu li a {
  color: #ffffff;
  text-decoration: none;
}

.nav-menu li a:hover {
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .place-holder {
    display: block;
  }
  .insyra-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .insyra-navbar .nav-menu {
    display: none;
  }
  .language-selector {
    display: none;
  }
}
</style>
