<template>
  <div class="feature">
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature {
  text-align: center;
  max-width: 300px;
}
</style>
