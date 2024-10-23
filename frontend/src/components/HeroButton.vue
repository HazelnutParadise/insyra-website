<template>
  <div>
    <el-button :color="settings.color" :size="settings.size" :round="settings.round">{{ currentMessages.hero.getStarted }}</el-button>
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