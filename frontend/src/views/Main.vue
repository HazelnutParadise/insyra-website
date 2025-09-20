<template>
  <div class="main-content">
    <!-- Hero Section -->
    <Hero :currentMessages="currentMessages" />

    <!-- Version 0.2.x Introduction Section -->
    <section class="version-intro">
      <div class="container">
        <h2>{{ currentMessages.Main.versionIntro.title }}</h2>
        <div class="version-content">
          <div class="version-text">
            <p><strong>{{ currentMessages.Main.versionIntro.versionName }}</strong>{{
              currentMessages.Main.versionIntro.versionNameValue }}</p>
            <p><strong>{{ currentMessages.Main.versionIntro.versionFeatures }}</strong>{{
              currentMessages.Main.versionIntro.versionFeaturesValue }}</p>
            <p><strong>{{ currentMessages.Main.versionIntro.pierIntro }}</strong>{{
              currentMessages.Main.versionIntro.pierIntroValue }}</p>
          </div>
          <div class="version-image">
            <img src="https://www.settour.com.tw/ss_img/poi/20220307/c2c94200-2858-4914-bc77-f45fbea3abc2.jpg"
              :alt="currentMessages.Main.versionIntro.imageAlt" />
            <p class="image-source">{{ currentMessages.Main.versionIntro.imageSource }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <FeatureItemSection :featureItemSection="currentMessages.Main.featureItemSection" />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import FeatureItemSection from '../components/FeatureItemSection.vue'

export default {
  components: {
    Hero,
    FeatureItemSection,
  },
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.version-intro {
  padding: 80px 0;
  padding-top: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  margin-bottom: 2px;
  font-size: 2.8rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
}

.version-content {
  display: flex;
  gap: 50px;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.version-text {
  flex: 1;
}

.version-text p {
  margin-bottom: 25px;
  line-height: 1.7;
  color: #2c3e50;
  font-size: 1.2rem;
  text-align: left;
}

.version-text strong {
  color: #667eea;
  font-weight: 600;
  font-size: 1.3rem;
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

.version-image img:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
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
    padding: 60px 0;
  }

  .version-intro h2 {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }

  .version-content {
    flex-direction: column;
    padding: 30px 25px;
    gap: 30px;
  }

  .version-text p {
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
</style>