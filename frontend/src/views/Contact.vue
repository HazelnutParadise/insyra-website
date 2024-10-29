<template>
  <div class="contact-page">
    <TitleSection :title="currentMessages.Contact.title" :description="currentMessages.Contact.description" />

    <!-- Contribution Invitation -->
    <section class="contribution-section">
      <h2>加入貢獻</h2>
      <p>Insyra 是一個開源項目，我們熱切期待您的貢獻！不論是程式碼、文件改進或是問題反饋，任何幫助都會讓 Insyra 變得更好。</p>
      <p>前往我們的 <a href="https://github.com/HazelnutParadise/insyra" target="_blank">GitHub 儲存庫</a> 開始貢獻吧！</p>
    </section>

    <!-- Contact Information -->
    <section class="contact-info-section">
      <h2>聯絡信箱</h2>
      <p>若您有任何疑問或建議，歡迎透過電子郵件聯繫我們：</p>
      <p><a href="https://apps.hazelnut-paradise.com/mail" target="_blank">榛果繽紛樂網站信箱</a></p>
    </section>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue';

export default {
  name: 'Contact',
  props: {
    currentMessages: Object,
  },
  components: {
    TitleSection,
  },
};
</script>

<style scoped>
.contact-page {
  margin: 0 auto;
  min-height: 100vh;
  background: #d73e3e;
  text-align: center;
}

p {
  color: #4a4a4a;
  font-size: 18px;
  margin-bottom: 15px;
}

/* Section Styles */
.contribution-section, .contact-info-section {
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  color: #2e3b55;
  margin-bottom: 10px;
}

a {
  color: #2e3b55;
  font-weight: 600;
}
</style>
