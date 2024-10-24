<template>
  <div class="about-insyra">
    <!-- Title Section -->
    <TitleSection :title="currentMessages.AboutInsyra.title" :description="currentMessages.AboutInsyra.description" />
    <div class="container">
      <!-- Why We Created Insyra Section -->
      <section class="why-section card">
        <h2>{{ currentMessages.AboutInsyra.whyCreate.title }}</h2>
        <p v-html="currentMessages.AboutInsyra.whyCreate.description"></p>
      </section>

      <!-- Core Philosophy Section -->
      <section class="philosophy-section card">
        <h2>{{ currentMessages.AboutInsyra.corePhilosophy.title }}</h2>
        <div class="philosophy-grid">
          <div class="philosophy card" v-for="(item, index) in currentMessages.AboutInsyra.corePhilosophy.items" :key="index">
            <h3>{{ item.title }}</h3>
            <p v-html="item.description"></p>
          </div>
        </div>
      </section>

      <!-- Future Vision Section -->
      <section class="vision-section card">
        <h2>{{ currentMessages.AboutInsyra.futureVision.title }}</h2>
        <p v-html="currentMessages.AboutInsyra.futureVision.description"></p>
      </section>
    </div>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue';

export default {
  name: 'AboutInsyra',
  components: {
    TitleSection,
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
.about-insyra {
  background-color: #fbb3b0;
  padding-bottom: 60px;
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* Card Style */
.card {
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 40px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

/* Section Titles */
h2 {
  font-size: 28px;
  color: #2e3b55;
  font-weight: 700;
  margin-bottom: 10px;
}

/* Why Section */
.why-section p,
.philosophy-section p,
.vision-section p {
  font-size: 18px;
  color: #4a4a4a;
  line-height: 1.8;
  text-align: justify;
}

.philosophy-section h2 {
  margin-bottom: 30px;
}

/* Problems Section */
.philosophy-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.philosophy-grid h3 {
  font-size: 20px;
  color: #d73e3e;
  margin-bottom: 10px;
}

.philosophy-grid p {
  font-size: 18px;
  color: #4a4a4a;
  text-align: start;
}

.philosophy-grid .card {
  width: 33%;
  background-color: #fff4e6;
  border: 1px solid #ffd99e;
}

/* Future Vision Section */
.vision-section p {
  font-size: 18px;
  text-align: center;
  color: #4a4a4a;
}

/* Responsive Design */
@media (max-width: 850px) {
  .philosophy-grid {
    flex-direction: column;
  }

  .philosophy-grid .card {
    width: 100%;
  }

  .container {
    padding: 15px;
  }
}
</style>
