<template>
  <div class="features-page">
    <TitleSection :title="currentMessages.Features.title" :description="currentMessages.Features.description"/>

    <!-- 核心資料結構 Section -->
    <section class="core-structures-section">
      <br>
      <h2>{{ currentMessages.Features.coreStructures.title }}</h2>
      <p style="text-align: center;">{{ currentMessages.Features.coreStructures.description }}</p>
      <div class="feature-section">
        <div class="feature-box">
          <h3>DataList</h3>
          <p>{{ currentMessages.Features.coreStructures.dataList.description }}</p>
          <Collapse 
            :title="currentMessages.Features.coreStructures.dataList.collapse.title" 
            :content="currentMessages.Features.coreStructures.dataList.collapse.content"
            headerColor="#1f449b" 
            contentColor="#e6f0ff"  
            borderColor="#1f449b"
            alignment="left"
            :codeBlock="true" 
            :copyButtonText="currentMessages.Features.coreStructures.dataList.collapse.copyButtonText"
            language="go"
            />
          <a :href="currentMessages.Features.coreStructures.dataList.doc.link">{{ currentMessages.Features.coreStructures.dataList.doc.title }}</a>
        </div>
        <div class="feature-box">
          <h3>DataTable</h3>
          <p>{{ currentMessages.Features.coreStructures.dataTable.description }}</p>
          <Collapse 
            :title="currentMessages.Features.coreStructures.dataTable.collapse.title" 
            :content="currentMessages.Features.coreStructures.dataTable.collapse.content"
            headerColor="#1f449b" 
            contentColor="#e6f0ff" 
            borderColor="#1f449b"
            alignment="left"
            :codeBlock="true"
            :copyButtonText="currentMessages.Features.coreStructures.dataTable.collapse.copyButtonText"
            language="go"
            />
          <a :href="currentMessages.Features.coreStructures.dataTable.doc.link">{{ currentMessages.Features.coreStructures.dataTable.doc.title }}</a>
        </div>
      </div>
    </section>
    <br>
    <!-- 套件包 Section -->
    <section class="tabs-section">
      <h2>套件包功能展示</h2>
      <Tabs :tabs="tabs" />
    </section>
    <br>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue';
import Collapse from '../components/Collapse.vue';
import Tabs from '../components/Tabs.vue';

export default {
  name: 'Features',
  data() {
    return {
      isOpen: {},
      tabs: [
        {
          name: 'sliceutil 套件包',
          descriptions: {
            first: '提供數組操作工具，包括分割、排序、唯一值篩選等。',
          }
        },
        {
          name: 'maputil 套件包',
          descriptions: {
            first4: '提供字典操作工具1，例如鍵值對篩選、合併和查找。',
            second: '提供字典操作工具，例如鍵值對篩選、合併和查找。',
          },
          collapses: {
            second: {
              title: 'MapUtil',
              content: '提供字典操作工具1，例如鍵值對篩選、合併和查找。',
              headerColor: '#1f449b',
              contentColor: '#e6f0ff',
              borderColor: '#1f449b',
              alignment: 'left',
            },
            second3: {
              title: 'MapUtil2',
              content: '提供字典操作工具，例如鍵值對篩選、合併和查找。',
              headerColor: '#1f449b',
              contentColor: '#e6f0ff',
              borderColor: '#1f449b',
              alignment: 'left',
            },
          },
        },
        {
          name: 'conv 套件包',
          descriptions: {
            first: '提供數據格式轉換工具，用於轉換類型和格式。',
          },

        },
      ],
    };
  },
  components: {
    TitleSection,
    Collapse,
    Tabs,
  },
  methods: {
    togglePanel(index) {
      this.$set(this.isOpen, index, !this.isOpen[index]);
    },
  },
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.features-page {
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #f9f9f9, #e6f0ff);
}

h1 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: #2e3b55;
}

p {
  text-align: center;
  margin: 0 auto 30px;
  color: #4a4a4a;
  font-size: 18px;
}

/* 核心資料結構區段樣式 */
.core-structures-section {
  padding: 20px;
}

.core-structures-section p {
  text-align: justify;
}

.core-structures-section a:hover {
  text-decoration: underline;
}

h2 {
  text-align: center;
  font-size: 32px;
  color: #2e3b55;
  margin-bottom: 20px;
}

.feature-section {
  display: flex;
  max-width: 900px;
  justify-content: space-around;
  gap: 10px;
  margin: 0 auto;
}

.feature-box {
  flex: 1;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 25px;
  overflow: hidden; /* 防止內容溢出 */
}

.feature-box h3 {
  color: #2e3b55;
  font-size: 24px;
  margin-bottom: 10px;
}

/* 新增以下樣式 */
:deep(.collapse-content) {
  color: black; /* 確保摺疊內容的文字為黑色 */
}

:deep(.collapse-content pre) {
  margin-bottom: 20px; /* 為滾動條提供額外空間 */
}

/* Responsive Design */
@media (max-width: 768px) {
  .feature-section {
    flex-direction: column;
  }
}
</style>




