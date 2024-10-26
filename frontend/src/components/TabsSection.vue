<template>
  <section class="tabs-section">
    <h2>{{ title }}</h2>
    <Tabs :tabs="tabsData" />
  </section>
</template>

<script>
import Tabs from './Tabs.vue';

export default {
  components: {
    Tabs
  },
  data() {
    return {
      title: '特色功能',
      tabsData: [
        { name: '標籤1', description: '這是標籤1的描述<br>可以包含HTML標籤' },
        { name: '標籤2', description: '這是標籤2的描述<br>也可以包含HTML標籤' },
        // 添加更多標籤...
      ]
    }
  }
}
</script>
