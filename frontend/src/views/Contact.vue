<template>
  <div class="contact-page">
    <TitleSection :title="currentMessages.Contact.title" :description="currentMessages.Contact.description" />

    <!-- Contribution Invitation -->
    <section class="contribution-section">
      <h2>{{ currentMessages.Contact.contribution.title }}</h2>
      <p>{{ currentMessages.Contact.contribution.description }}</p>
      <a href="https://github.com/HazelnutParadise/insyra" target="_blank" style="margin-right: 10px;">{{ currentMessages.Contact.contribution.repositoryText }}</a>
      <a href="https://support.hazelnut-paradise.com/index.php?category_id=5&category_name=%E9%96%8B%E6%BA%90%E8%B2%A2%E7%8D%BB" target="_blank">{{ currentMessages.Contact.contribution.supportText }}</a>
    </section>

    <!-- Contact Information -->
    <section class="contact-info-section">
      <h2>{{ currentMessages.Contact.mail.title }}</h2>
      <p>{{ currentMessages.Contact.mail.description }}</p>
      <p><a href="https://apps.hazelnut-paradise.com/mail" target="_blank">{{ currentMessages.Contact.mail.text }}</a></p>
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
  padding-bottom: 20px;
  background: #d73e3e;
  text-align: center;
}

p {
  max-width: 800px;
  margin: 0 auto;
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
