<template>
  <nav class="insyra-navbar">
    <div class="insyra-logo">
      <a href="/">
        <img id="logo-img" src="../assets/logo.png" alt="Insyra Logo" />
      </a>
    </div>
    <ul class="nav-menu">
      <li><a @click="selectPage('Main')">{{ currentMessages.navbar.main }}</a></li>
      <li><a @click="selectPage('WhatIsInsyra')">{{ currentMessages.navbar.whatIsInsyra }}</a></li>
      <li><a @click="selectPage('Features')">{{ currentMessages.navbar.features }}</a></li>
      <li><a @click="selectPage('HowToUse')">{{ currentMessages.navbar.howToUse }}</a></li>
      <li><a @click="selectPage('WhyInsyra')">{{ currentMessages.navbar.whyInsyra }}</a></li>
      <li><a @click="selectPage('Contact')">{{ currentMessages.navbar.contact }}</a></li>
    </ul>
    <LanguageSelector @language-changed="updateLanguage" :current-language="currentLanguage" />
    <HamburgerMenu @language-changed="updateLanguage" :currentMessages="currentMessages" :current-language="currentLanguage" @selectPage="selectPage" />
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
    selectPage: {
      type: Function,
      required: true,
    }
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
    selectPage(page) {
      this.$emit('page-selected', page); // 發射 page-selected 事件
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
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
  z-index: 1;
}

.insyra-logo {
  margin: 0;
  padding: 0;
}


.insyra-logo img {
  margin: 0;
  width: auto;
  height: 40px;
  background-color: #fff;
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
