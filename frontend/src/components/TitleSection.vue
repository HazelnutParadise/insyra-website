<template>
    <section class="title-section">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
    },
};
</script>
<style scoped>
.title-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 280px;
  text-align: center;
  padding: 60px 20px;
  background-color: #f5f5f5;
  background-image: 
    linear-gradient(45deg, #fcc366 15%, transparent 15%, transparent 85%, transparent 85%, transparent),
    linear-gradient(45deg, transparent 15%, transparent 15%, transparent 85%, #a3c4f3 85%, #a3c4f3);
}

.title-section h1 {
  font-size: 48px;
  margin-bottom: 30px;
  color: #1f449b;
  font-weight: 700;
}

.title-section p {
  font-size: 20px;
  color: #4a4a4a;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .title-section {
    height: 350px;
    background-image: 
    linear-gradient(45deg, #fcc366 10%, transparent 10%, transparent 90%, transparent 90%, transparent),
    linear-gradient(45deg, transparent 10%, transparent 10%, transparent 90%, #a3c4f3 90%, #a3c4f3);
  }
  .title-section h1 {
    margin-bottom: 15px;
  }
  .title-section p {
    max-width: 300px;
    text-align: start;
  }
}
</style>
