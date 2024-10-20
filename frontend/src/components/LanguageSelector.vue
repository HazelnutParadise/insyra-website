<template>
      <el-select-v2
        v-model="value"
        :options="options"
        placeholder="Please select"
        size="large"
        style="width: 240px"
        @change="updateLanguage"
    />
</template>

<script>
import { ref } from 'vue'
import { messages } from '../locales/lang' // 引入語言資源

export default {
  setup() {
    const initials = ['繁體中文', 'English']
    const value = ref(initials[0]) // 預設選擇繁體中文
    const options = initials.map((lang) => ({
      value: lang,
      label: lang,
    }));

    const currentMessages = ref(messages[value.value]); // 當前語言的文本

    const updateLanguage = (lang) => {
      value.value = lang;
      currentMessages.value = messages[lang]; // 更新當前語言的文本
    };

    return {
      value,
      options,
      currentMessages,
      updateLanguage,
    }
  }
}
</script>

<style scoped>
.example-showcase .el-select-v2 {
  margin-right: 20px;
}
</style>
