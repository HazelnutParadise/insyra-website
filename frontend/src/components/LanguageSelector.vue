<template>
      <el-select-v2
        v-model="value"
        :options="options"
        placeholder="Please select"
        size="large"
        style="width: 240px"
        @change="emitLanguageChange"
    />
</template>

<script>
import { ref } from 'vue'


export default {
  setup(props, { emit }) {
    const initials = ['繁體中文', 'English']
    const value = ref(initials[0]) // 預設選擇繁體中文
    const options = initials.map((lang) => ({
      value: lang,
      label: lang,
    }));

    const emitLanguageChange = (lang) => {
      emit('language-changed', lang); // 發射事件
    };

    return {
      value,
      options,
      emitLanguageChange,
    }
  }
}
</script>

<style scoped>
.example-showcase .el-select-v2 {
  margin-right: 20px;
  
}
.el-select {
    z-index: 2;
}
</style>
