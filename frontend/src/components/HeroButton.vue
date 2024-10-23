<template>
  <div>
    <v-btn :variant="settings.variant" :color="settings.color" :size="settings.size">
      {{ currentMessages}}
    </v-btn>
    <!-- <el-button :color="settings.color" :size="settings.size" :round="settings.round">{{ currentMessages.hero.getStarted }}</el-button> -->
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