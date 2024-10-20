<template>
      <el-select-v2
        v-model="value"
        :options="options"
        placeholder="Please select"
        size="large"
        style="width: 240px"
    />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const initials = ['繁體中文', 'English']

    const value = ref()
    const options = Array.from({ length: 2 }).map((_, idx) => ({
      value: `${initials[idx]}`,
      label: `${initials[idx]}`,
    }))
    // 預設選擇繁體中文
    value.value = initials[0]

    // 確保 options 在使用前已正確初始化
    if (!Array.isArray(options) || options.length === 0) {
      console.error('Options is not iterable or is empty');
    }

    return {
      value,
      options,
    }
  }
}
</script>

<style scoped>
.example-showcase .el-select-v2 {
  margin-right: 20px;
}
</style>
