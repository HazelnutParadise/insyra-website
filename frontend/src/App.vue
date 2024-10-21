<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar @language-changed="updateLanguage" :currentMessages="currentMessages" />
    <div class="main-content">
      <!-- Hero Section -->
      <Hero :currentMessages="currentMessages" />

    <!-- Features Section -->
    <FeatureItemSection :featureItemSection="currentMessages.featureItemSection" />
    </div>
    <HazelnutParadiseNav />
    <!-- Footer -->
    <footer class="footer">
      <p>© 2024 HazelnutParadise. All Rights Reserved.</p>
      <ul class="social-links">
        <li><a href="https://github.com/HazelnutParadise" style="display: flex; align-items: baseline;gap: 5px"><i class="fa fa-github" style="font-size:16px;color:#fff"></i><span>GitHub</span></a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import HazelnutParadiseNav from './components/HazelnutParadiseNav.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import FeatureItem from './components/FeatureItem.vue' // 引入 FeatureItem
import FeatureItemSection from './components/FeatureItemSection.vue'
import HamburgerMenu from './components/HamburgerMenu.vue' // 引入漢堡選單
import { ref } from 'vue'
import { messages } from './locales/lang' // 引入語言資源

export default {
  name: 'App',
  components: {
    HazelnutParadiseNav,
    Navbar,
    Hero,
    LanguageSelector,
    FeatureItem, // 註冊 FeatureItem
    HamburgerMenu, // 註冊漢堡選單
    FeatureItemSection,
  },
  setup() {
    const initials = ['繁體中文', 'English']
    let currentLanguage = localStorage.getItem('language')
    if (!currentLanguage) {
      currentLanguage = initials[0]
    }
    const value = ref(currentLanguage) // 預設選擇繁體中文
    const currentMessages = ref(messages[value.value]); // 當前語言的文本

    const updateLanguage = (lang) => {
      if (messages[lang]) {
        value.value = lang;
        currentMessages.value = messages[lang]; // 更新當前語言的文本
      } else {
        console.error(`Language ${lang} not found in messages.`);
      }
    };

    return {
      currentMessages,
      updateLanguage,
    }
  }
};
</script>

<style scoped>
.main-content {
  background-color: #f4f4f4;
  /* padding-bottom: 200px; */
}
/* Footer */
.footer {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0px 60px;
  padding-bottom: 30px;
  margin-top: 0px;
  background-color: #000;
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
