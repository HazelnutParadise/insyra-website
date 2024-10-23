<template>
    <div class="main-content">
      <!-- Hero Section -->
      <Hero :currentMessages="currentMessages" />

    <!-- Features Section -->
    <FeatureItemSection :featureItemSection="currentMessages.featureItemSection" />
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