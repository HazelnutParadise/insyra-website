<template>
  <div>
    <v-btn :variant="settings.variant" :color="settings.color" :size="settings.size" :href="settings.href">
      {{ currentMessages}}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-btn {
  z-index: 1;
}
</style>