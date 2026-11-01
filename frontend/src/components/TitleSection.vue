<template>
    <section class="title-section">
        <h1>{{ title }}</h1>
        <p v-html="description"></p>
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
  min-height: 320px;
  text-align: center;
  padding: 60px 20px;
  background-color: var(--gray-96b);
  background-image: 
    linear-gradient(45deg, var(--orange-69) 15%, transparent 15%, transparent 85%, transparent 85%, transparent),
    linear-gradient(45deg, transparent 15%, transparent 15%, transparent 85%, var(--blue-80) 85%, var(--blue-80));
}

.title-section h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: var(--insyra-blue);
  font-weight: 700;
}

.title-section p {
  font-size: 20px;
  color: var(--gray-29);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .title-section {
    min-height: 400px;
    background-image: 
    linear-gradient(45deg, var(--orange-69) 10%, transparent 10%, transparent 90%, transparent 90%, transparent),
    linear-gradient(45deg, transparent 10%, transparent 10%, transparent 90%, var(--blue-80) 90%, var(--blue-80));
  }
  .title-section h1 {
    margin-bottom: 10px;
  }
  .title-section p {
    max-width: 300px;
    text-align: center;
  }
}
</style>
