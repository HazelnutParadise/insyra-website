<template>
  <div class="main-content">
    <!-- Hero Section -->
    <Hero :currentMessages="currentMessages" />

    <!-- 主題區：用「想做的事」介紹 Insyra -->
    <ThemeSection :themeSection="currentMessages.Main.themeSection" />

    <!-- Version Introduction Section（只介紹當前 minor 版，見 CLAUDE.md） -->
    <section class="version-intro">
      <div class="container">
        <h2>{{ currentMessages.Main.versionIntro.title }}</h2>
        <h3 class="version-slogan">{{ currentMessages.Main.versionIntro.slogan }}</h3>
        <div class="version-content">
          <!-- 上排：短文字（版本名稱＋定位）配圖片，高度相當 -->
          <div class="version-top">
            <div class="version-text">
              <p><strong>{{ currentMessages.Main.versionIntro.versionName }}</strong>{{
                currentMessages.Main.versionIntro.versionNameValue }}</p>
              <p><strong>{{ currentMessages.Main.versionIntro.placeIntro }}</strong>{{
                currentMessages.Main.versionIntro.placeIntroValue }}</p>
              <p><strong>{{ currentMessages.Main.versionIntro.pierIntro }}</strong>{{
                currentMessages.Main.versionIntro.pierIntroValue }}</p>
            </div>
            <div class="version-image">
              <img src="https://www.settour.com.tw/ss_img/poi/20210224/f316c7e0-1bcb-49e6-b140-eb9027bf489f.jpg"
                :alt="currentMessages.Main.versionIntro.imageAlt" />
              <p class="image-source">{{ currentMessages.Main.versionIntro.imageSource }}</p>
            </div>
          </div>
          <!-- 下排：較長的功能段落與版本註記改為全寬 -->
          <div class="version-features-text">
            <p><strong>{{ currentMessages.Main.versionIntro.versionFeatures }}</strong>{{
              currentMessages.Main.versionIntro.versionFeaturesValue }}</p>
            <div v-for="release in currentMessages.Main.versionIntro.versionReleases" :key="release.version"
              class="version-release">
              <h4>{{ release.version }}</h4>
              <ul>
                <li v-for="item in release.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
          <p class="version-note">{{ currentMessages.Main.versionIntro.currentNote }}</p>
        </div>
        <div class="version-history-link">
          <a :href="currentMessages.Main.versionIntro.history.href">
            {{ currentMessages.Main.versionIntro.history.text }}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 更多能力：原功能卡縮成連結標籤 -->
    <section class="more-abilities">
      <div class="container">
        <h2>{{ currentMessages.Main.moreAbilities.heading }}</h2>
        <ul>
          <li v-for="feature in abilities" :key="feature.id">
            <a :href="feature.learnMore.href" :target="isExternal(feature.learnMore.href) ? '_blank' : null"
              :rel="isExternal(feature.learnMore.href) ? 'noopener noreferrer' : null">{{ feature.title }}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import ThemeSection from '../components/ThemeSection.vue'

export default {
  components: {
    Hero,
    ThemeSection,
  },
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
  computed: {
    abilities() {
      return Object.values(this.currentMessages.Main.featureItemSection.features).sort((a, b) => a.id - b.id);
    },
  },
  methods: {
    isExternal(href) {
      return /^https?:\/\//.test(href);
    },
  },
};
</script>

<style scoped>
.version-intro {
  padding: 80px 0;
  padding-top: 20px;
  background: linear-gradient(135deg, #764ba2 0%, #1f449b 100%);
  position: relative;
  overflow: hidden;
}

.version-intro::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.version-intro .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.version-intro h2 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 3px;
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -0.5px;
}

.version-slogan {
  text-align: center;
  color: #f9ac41;
  margin-bottom: 20px;
  font-size: 1.7rem;
  font-weight: 600;
}

.version-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  /* border-radius: 20px; */
  padding: 40px;
  border: 5px dashed #f9ac41;
  position: relative;
}

.version-top {
  display: flex;
  gap: 50px;
  align-items: center;
}

.version-text {
  flex: 1.15;
}

.version-text p,
.version-features-text {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #2c3e50;
  font-size: 1.2rem;
  text-align: left;
}

.version-text p:last-child {
  margin-bottom: 0;
}

.version-features-text {
  margin-top: 1.6rem;
  margin-bottom: 0;
  padding-top: 1.4rem;
  border-top: 1px dashed rgba(102, 126, 234, 0.5);
}

.version-text strong,
.version-features-text strong {
  color: #667eea;
  font-weight: 600;
  font-size: 1.3rem;
}

.version-features-text > p {
  margin-bottom: 1rem;
}

.version-release {
  margin-bottom: 1rem;
}

.version-release h4 {
  margin: 0 0 0.35rem;
  color: #667eea;
  font-size: 1.1rem;
  font-weight: 600;
}

.version-release ul {
  margin: 0;
  padding-left: 1.4rem;
}

.version-release li {
  font-size: 1rem;
  line-height: 1.65;
  margin-bottom: 0.25rem;
}

.version-image {
  flex: 1;
  text-align: center;
}

.version-image img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-source {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #7f8c8d;
  text-align: center;
  font-style: italic;
  word-break: break-all;
}

@media (max-width: 768px) {
  .version-intro {
    padding: 10px 0;
    padding-bottom: 70px;
  }

  .version-intro h2 {
    font-size: 2.2rem;
  }

  .version-content {
    padding: 30px 25px;
  }

  .version-top {
    flex-direction: column;
    gap: 30px;
  }

  .version-text p,
  .version-features-text {
    font-size: 1rem;
  }

  .image-source {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .version-intro h2 {
    font-size: 1.8rem;
  }

  .version-content {
    padding: 25px 20px;
  }
}

.version-badge {
  display: block;
  width: fit-content;
  margin: 0 auto 14px;
  padding: 5px 16px;
  background: #f9ac41;
  color: #1a1a2e;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.version-note {
  margin-top: 1.2rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(102, 126, 234, 0.5);
  color: #764ba2;
  font-weight: 600;
  font-size: 1.1rem !important;
  line-height: 1.7;
}

.version-history-link {
  text-align: center;
  margin-top: 32px;
}

.version-history-link a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  background: #f9ac41;
  color: #1a1a2e !important;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 999px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.version-history-link a:hover {
  background: #ffbe63;
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  text-decoration: none;
}

.more-abilities {
  padding: 56px 0 64px;
  background: #d73e3e;
}

.more-abilities .container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.more-abilities h2 {
  margin-bottom: 24px;
  text-align: center;
  color: #ffffff;
  font-size: 1.8rem;
}

.more-abilities ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.more-abilities a {
  display: block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 999px;
  color: #a82a2a;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.more-abilities a:hover {
  background: #ffffff;
  transform: translateY(-2px);
}
</style>
