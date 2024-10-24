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
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 300;
}
</style>