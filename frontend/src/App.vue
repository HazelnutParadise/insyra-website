<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar @language-changed="updateLanguage" :currentMessages="currentMessages" />

    <!-- Hero Section -->
    <Hero :currentMessages="currentMessages" />

    <!-- Features Section -->
    <section class="features">
      <FeatureItem v-if="currentMessages.features" v-for="(feature, index) in currentMessages.features" :key="index" :feature="feature" />
    </section>

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
import Navbar from './components/navbar.vue'
import Hero from './components/Hero.vue'
import HazelnutParadiseNav from './components/HazelnutParadiseNav.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import FeatureItem from './components/FeatureItem.vue' // 引入 FeatureItem
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
  },
  setup() {
    const initials = ['繁體中文', 'English']
    const value = ref(initials[0]) // 預設選擇繁體中文
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
/* Features Section */
.features {
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
}

/* Footer */
.footer {
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0px 60px;
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
