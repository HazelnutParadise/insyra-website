<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar @language-changed="updateLanguage" :currentMessages="currentMessages" @page-selected="selectPage" />
    <component :is="currentPage" :currentMessages="currentMessages" />
    <HazelnutParadiseNav />
    <!-- Footer -->
    <footer class="footer">
      <p>© 2024 HazelnutParadise. All Rights Reserved.</p>
      <ul class="social-links">
        <li><a href="https://github.com/HazelnutParadise" style="display: flex; align-items: baseline;gap: 5px"><i
              class="fa fa-github" style="font-size:16px;color:#fff"></i><span>GitHub</span></a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue'
import HazelnutParadiseNav from './components/HazelnutParadiseNav.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import HamburgerMenu from './components/HamburgerMenu.vue' // 引入漢堡選單
import { ref, onMounted } from 'vue'
import { messages } from './locales/lang' // 引入語言資源
import Main from './views/Main.vue'
import WhatIsInsyra from './views/WhatIsInsyra.vue'
import Features from './views/Features.vue'
import HowToUse from './views/HowToUse.vue'
import WhyInsyra from './views/WhyInsyra.vue'
import Contact from './views/Contact.vue'

export default {
  name: 'App',
  components: {
    HazelnutParadiseNav,
    Navbar,
    LanguageSelector,
    HamburgerMenu, // 註冊漢堡選單
  },
  setup() {
    const initials = ['繁體中文', 'English']
    let currentLanguage = localStorage.getItem('language')

    if (!currentLanguage) {
      const browserLang = navigator.language || navigator.userLanguage;
      currentLanguage = browserLang.toLowerCase().includes('zh') ? '繁體中文' : 'English';
      localStorage.setItem('language', currentLanguage);
    }
    const value = ref(currentLanguage) // 預設選擇繁體中文
    const currentMessages = ref(messages[value.value]); // 當前語言的文本
    const currentPage = ref(Main); // 當前顯示的組件
    const applyYear = (str) => str ? str.replace('{year}', new Date().getFullYear()) : str;
    document.title = applyYear(currentMessages.value.siteTitle);

    const updateTitle = (pageName) => {
      const pageTitle = currentMessages.value.pageTitle?.[pageName] || '';
      const siteTitle = applyYear(currentMessages.value.siteTitle);
      document.title = pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle;
    };

    const updateLanguage = (lang) => {
      if (messages[lang]) {
        value.value = lang;
        currentMessages.value = messages[lang]; // 更新當前語言的文本
        // 根據當前頁面更新 title
        const currentPageName = currentPage.value === Main ? 'Main' :
          currentPage.value === WhatIsInsyra ? 'WhatIsInsyra' :
            currentPage.value === Features ? 'Features' :
              currentPage.value === HowToUse ? 'HowToUse' :
                currentPage.value === WhyInsyra ? 'WhyInsyra' :
                  currentPage.value === Contact ? 'Contact' : 'Main';
        updateTitle(currentPageName);
      } else {
        console.error(`Language ${lang} not found in messages.`);
      }
    };

    const selectPage = (page) => {
      switch (page) {
        case 'Main':
          currentPage.value = Main;
          window.history.replaceState(null, '', window.location.pathname); // 去掉 #
          break;
        case 'WhatIsInsyra':
          currentPage.value = WhatIsInsyra;
          window.history.replaceState(null, '', `#${page}`); // 更新 URL
          break;
        case 'Features':
          currentPage.value = Features;
          window.history.replaceState(null, '', `#${page}`); // 更新 URL
          break;
        case 'HowToUse':
          currentPage.value = HowToUse;
          window.history.replaceState(null, '', `#${page}`); // 更新 URL
          break;
        case 'WhyInsyra':
          currentPage.value = WhyInsyra;
          window.history.replaceState(null, '', `#${page}`); // 更新 URL
          break;
        case 'Contact':
          currentPage.value = Contact;
          window.history.replaceState(null, '', `#${page}`); // 更新 URL
          break;
        default:
          currentPage.value = Main; // 預設為主頁
          window.history.replaceState(null, '', window.location.pathname); // 去掉 #
      }
      updateTitle(page || 'Main');
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      selectPage(hash || 'Main'); // 根據 hash 切換組件
      window.scrollTo(0, 0);
    };

    onMounted(() => {
      // 設置初始標題（帶入年份）
      const initialPage = window.location.hash.replace('#', '') || 'Main';
      updateTitle(initialPage);

      handleHashChange(); // 初始化時根據 hash 切換組件
      window.addEventListener('hashchange', handleHashChange); // 監聽 hash 變化
    });

    return {
      currentMessages,
      updateLanguage,
      currentPage,
      selectPage,
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

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    padding-bottom: 30px;
  }
}
</style>
