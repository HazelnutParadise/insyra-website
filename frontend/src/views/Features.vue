<template>
  <div class="features-page">
    <TitleSection :title="currentMessages.Features.title" :description="currentMessages.Features.description"/>
    <div class="read-docs-section">
      <h2>{{ currentMessages.Features.readDocs.title }}</h2>
      <p v-html="currentMessages.Features.readDocs.description"></p>
      <div class="docs-buttons">
        <a :href="currentMessages.Features.readDocs.docsButton.docs.link" target="_blank" rel="noopener noreferrer" class="docs-button">
          <i class="fa fa-github" style="color:#fff"></i>
          {{ currentMessages.Features.readDocs.docsButton.docs.title }}
        </a>
        <a :href="currentMessages.Features.readDocs.docsButton.goDoc.link" target="_blank" rel="noopener noreferrer" class="docs-button">
          <i class="fa fa-file-text-o" style="color:#fff"></i>
          {{ currentMessages.Features.readDocs.docsButton.goDoc.title }}
        </a>
      </div>
    </div>
    <!-- 核心資料結構 Section -->
    <section class="core-structures-section">
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
            codeLanguage="go"
            />
          <a :href="currentMessages.Features.coreStructures.dataList.doc.link" class="a-link">{{ currentMessages.Features.coreStructures.dataList.doc.title }}</a>
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
            codeLanguage="go"
            />
          <a :href="currentMessages.Features.coreStructures.dataTable.doc.link" class="a-link">{{ currentMessages.Features.coreStructures.dataTable.doc.title }}</a>
        </div>
      </div>
    </section>
    <br>
    <!-- 套件包 Section -->
    <section class="tabs-section">
      <h2>{{ currentMessages.Features.packagesSection.title }}</h2>
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
    const tabs = this.currentMessages.Features.packagesSection.packages;
    tabs.forEach(tab => {
      if (tab.collapses && typeof tab.collapses === 'object') {
        Object.keys(tab.collapses).forEach(key => {
          tab.collapses[key] = {
            ...tab.collapses[key],
            headerColor: '#1f449b',
            contentColor: '#e6f0ff',
            borderColor: '#1f449b',
            alignment: 'left',
          };
        });
      }
    });
    return {
      isOpen: {},
      tabs: tabs,
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
  text-align: start;
  margin: 0 auto 30px;
  color: #4a4a4a;
  font-size: 18px;
}

/* 核心資料結構區段樣式 */
.core-structures-section {
  padding: 20px;
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

.read-docs-section {
  background-color: #fff4e6;
  border-radius: 12px;
  padding: 30px;
  margin: 30px auto;
  max-width: 800px;
  border: 1px solid #fcc366;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.read-docs-section h2 {
  color: #2e3b55;
  font-size: 28px;
  margin-bottom: 15px;
}

.read-docs-section p {
  padding: 0 10px;
}

.docs-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.docs-button {
  display: inline-flex;
  align-items: baseline;
  padding: 10px 20px;
  background-color: #f9ac41;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.docs-button:hover {
  background-color: #fcc366;
}

.docs-button i {
  margin-right: 8px;
}

@media (max-width: 768px) {
  .read-docs-section {
    padding: 30px;
    margin: 20px 10px;
  }

  .docs-buttons {
    flex-direction: column;
    align-items: center;
  }

  .docs-button {
    width: 100%;
    justify-content: center;
  }
}
</style>



