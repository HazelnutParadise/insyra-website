<template>
  <div>
    <v-btn :variant="settings.variant" :color="settings.color" :size="settings.size" :href="settings.href"
      :target="settings.target" :rel="settings.rel">
      {{ currentMessages }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    currentMessages: {
      type: [Object, String],
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  /* default: not full width */
  /* Ensure vertical centering for button text */
}

/* Make the v-btn adapt on smaller screens when used in the hero */
@media (max-width: 768px) {
  .v-btn {
    font-size: 0.95rem;
    padding: 8px 14px;
  }
}

@media (max-width: 480px) {

  /* full width buttons when parent stacks vertically */
  .v-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>