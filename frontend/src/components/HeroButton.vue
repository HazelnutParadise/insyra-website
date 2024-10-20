<template>
  <div>
    <el-button color="#d73e3e" size="large">{{ currentMessages.hero.getStarted }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
};
</script>