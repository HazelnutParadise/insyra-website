<template>
  <div class="about-insyra">
    <!-- Title Section -->
    <TitleSection :title="currentMessages.AboutInsyra.title" :description="currentMessages.AboutInsyra.description" />
    <div class="container">
      <!-- Why We Created Insyra Section -->
      <section class="why-section card">
        <h2>Why We Created Insyra</h2>
        <p>Insyra was born out of the need for a data analysis library that combines high performance, flexibility, and seamless integration with existing tools. Many existing solutions fall short in either performance or adaptability, making them difficult to use in diverse and complex data environments.</p>
      </section>

      <!-- Core Philosophy Section -->
      <section class="philosophy-section card">
        <h2>Core Philosophy</h2>
        <ul>
          <li><strong>Performance-Driven</strong>: Built to handle large datasets with speed and efficiency.</li>
          <li><strong>Flexible and Adaptable</strong>: Customizable for various project needs, offering modern data workflows.</li>
          <li><strong>Seamless Integration</strong>: Works smoothly with Python to improve performance without disrupting workflows.</li>
        </ul>
      </section>

      <!-- Problems We Solve Section -->
      <section class="problems-section card">
        <h2>Problems We Solve</h2>
        <div class="problems-grid">
          <div class="problem card">
            <h3>Performance Bottlenecks</h3>
            <p>Insyra optimizes algorithms to handle large datasets, mitigating performance issues in traditional libraries.</p>
          </div>
          <div class="problem card">
            <h3>Lack of Flexibility</h3>
            <p>Its modular architecture allows for custom workflows, making it suitable for various use cases without sacrificing performance.</p>
          </div>
          <div class="problem card">
            <h3>Complex Integration</h3>
            <p>Insyra integrates smoothly with Python, eliminating the steep learning curve while offering improved performance.</p>
          </div>
        </div>
      </section>

      <!-- Future Vision Section -->
      <section class="vision-section card">
        <h2>Our Future Vision</h2>
        <p>We envision Insyra becoming a go-to tool for data analysts, expanding its capabilities to support more advanced data manipulation, visualization, and machine learning.</p>
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

/* Philosophy Section */
.philosophy-section ul {
  list-style: none;
  padding: 0;
  text-align: justify;
}

.philosophy-section ul li {
  font-size: 18px;
  color: #4a4a4a;
  margin-bottom: 15px;
  text-align: justify;
}

.philosophy-section ul li strong {
  color: #4a4a4a;
  font-weight: 600;
}

.problems-section h2 {
  margin-bottom: 30px;
}

/* Problems Section */
.problems-grid {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.problem h3 {
  font-size: 20px;
  color: #d73e3e;
  margin-bottom: 10px;
}

.problem p {
  font-size: 16px;
  color: #4a4a4a;
}

.problems-grid .card {
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
@media (max-width: 768px) {
  .problems-grid {
    flex-direction: column;
  }

  .container {
    padding: 15px;
  }
}
</style>
