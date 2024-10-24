<template>
    <div class="language-selector">
      <el-select-v2
        v-model="value"
        :options="options"
        placeholder="Please select"
        size="large"
        style="width: 240px"
        @change="emitLanguageChange"
    />
    </div>
</template>

<script>
import { ref } from 'vue'


export default {
  props: {
    currentLanguage: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const initials = ['繁體中文', 'English']
    let currentLanguage = localStorage.getItem('language')
    if (!currentLanguage) {
      currentLanguage = initials[0]
    }
       
    const value = ref(currentLanguage) // 預設選擇繁體中文
    const options = initials.map((lang) => ({
      value: lang,
      label: lang,
    }));

    const emitLanguageChange = (lang) => {
      localStorage.setItem('language', lang);
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

</style>
