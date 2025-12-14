<template>
  <div class="contact-page">
    <TitleSection :title="currentMessages.Contact.title" :description="currentMessages.Contact.description" />

    <!-- Contribution Invitation -->
    <section class="contribution-section">
      <h2>{{ currentMessages.Contact.contribution.title }}</h2>
      <p>{{ currentMessages.Contact.contribution.description }}</p>
      <a href="https://github.com/HazelnutParadise/insyra" target="_blank" style="margin-right: 10px;">{{
        currentMessages.Contact.contribution.repositoryText }}</a>
      <a href="https://support.hazelnut-paradise.com/index.php?category_id=5&category_name=%E9%96%8B%E6%BA%90%E8%B2%A2%E7%8D%BB"
        target="_blank">{{ currentMessages.Contact.contribution.supportText }}</a>
    </section>

    <!-- Discord Servers -->
    <section class="discord-section">
      <h2>{{ currentMessages.Contact.discord.title }}</h2>
      <p>{{ currentMessages.Contact.discord.description }}</p>
      <div class="discord-servers">
        <a v-for="server in currentMessages.Contact.discord.servers" :key="server.url" :href="server.url"
          target="_blank" rel="noopener noreferrer" class="discord-link">
          <i class="fab fa-discord" style="margin-right: 8px;"></i>{{ server.name }}
        </a>
      </div>
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
.contribution-section,
.discord-section {
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.discord-servers {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
}

.discord-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background: linear-gradient(135deg, #5865F2 0%, #4752C4 100%);
  color: #ffffff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.discord-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(88, 101, 242, 0.4);
  color: #ffffff;
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
