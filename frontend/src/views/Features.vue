<template>
  <div class="features-page">
    <TitleSection title="核心資料結構" description="Insyra 提供兩大核心數據結構，分別是 DataList 和 DataTable。"/>

    <!-- 核心資料結構 Section -->
    <section class="core-structures-section">
      <h2>核心資料結構</h2>
      <div class="feature-section">
        <div class="feature-box">
          <h3>DataList</h3>
          <p>DataList 是 Insyra 中的基本結構，用於處理單一維度的數據，具備快速檢索、篩選、分組和運算的能力。</p>
          <Collapse 
            title="DataList" 
            content="DataList 是 Insyra 中的基本結構，用於處理單一維度的數據，具備快速檢索、篩選、分組和運算的能力." 
            headerColor="#1f449b" 
            contentColor="#e6f0ff"  
            borderColor="#1f449b"
            alignment="left" />
          <a href="/docs/core-structures/datalist">了解更多</a>
        </div>
        <div class="feature-box">
          <h3>DataTable</h3>
          <p>DataTable 提供類似表格的結構設計，適合進行多維數據的處理，具備強大的資料篩選、整合與計算功能。</p>
          <Collapse 
            title="DataTable" 
            content="DataTable 提供類似表格的結構設計，適合進行多維數據處理，具備強大的資料篩選、整合與計算功能." 
            headerColor="#1f449b" 
            contentColor="#e6f0ff" 
            borderColor="#1f449b"
            alignment="left" />
          <a href="/docs/core-structures/datatable">了解更多</a>
        </div>
      </div>
    </section>

    <!-- 套件包 Section -->
    <section class="tabs-section">
      <h2>套件包功能展示</h2>
      <div class="tabs-container">
        <!-- Left-Side Tabs -->
        <div class="tabs">
          <button 
            v-for="(tab, index) in tabs" 
            :key="index" 
            @click="activeTab = index" 
            :class="{ active: activeTab === index }">
            {{ tab.name }}
          </button>
        </div>

        <!-- Tab Content on the Right -->
        <div class="tab-content">
          <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index">
            <h3>{{ tab.name }} 功能</h3>
            <p>{{ tab.description }}</p>

            <!-- Expandable Panel for Code Examples -->
            <div class="panel">
              <button @click="togglePanel(index)">
                {{ isOpen[index] ? '收合範例代碼' : '顯示範例代碼' }}
              </button>
              <div v-show="isOpen[index]" class="code-example">
                <pre>{{ tab.codeExample }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue';
import Collapse from '../components/Collapse.vue';

export default {
  name: 'Features',
  data() {
    return {
      activeTab: 0,
      isOpen: {},
      tabs: [
        {
          name: 'sliceutil 套件包',
          description: '提供數組操作工具，包括分割、排序、唯一值篩選等。',
          codeExample: `
          // SliceUtil - 獲取唯一值範例代碼
          import { unique } from 'insyra/sliceutil';

          const data = [1, 2, 2, 3, 4];
          const uniqueData = unique(data); // 結果：[1, 2, 3, 4]
          `,
        },
        {
          name: 'maputil 套件包',
          description: '提供字典操作工具，例如鍵值對篩選、合併和查找。',
          codeExample: `
          // MapUtil - 範例代碼
          import { filterKeys } from 'insyra/maputil';

          const data = { a: 1, b: 2, c: 3 };
          const filteredData = filterKeys(data, (key) => key !== 'b'); // 結果：{ a: 1, c: 3 }
          `,
        },
        {
          name: 'conv 套件包',
          description: '提供數據格式轉換工具，用於轉換類型和格式。',
          codeExample: `
          // ConvUtil - 範例代碼
          import { toString } from 'insyra/conv';

          const data = 123;
          const stringData = toString(data); // 結果："123"
          `,
        },
      ],
    };
  },
  components: {
    TitleSection,
    Collapse,
  },
  methods: {
    togglePanel(index) {
      this.$set(this.isOpen, index, !this.isOpen[index]);
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
  max-width: 800px;
  margin: 0 auto 30px;
  color: #555;
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

.core-structures-section h2 {
  text-align: center;
  font-size: 28px;
  color: #333;
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
}



.feature-box h3 {
  color: #2e3b55;
  font-size: 24px;
  margin-bottom: 10px;
}

/* 左側 Tabs 樣式 */
.tabs-section {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
}

.tabs-section h2 {
  text-align: center;
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.tabs-container {
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #f7f7f7;
}

.tabs {
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  background: #e6e6e6;
  border-radius: 10px 0 0 10px;
  min-width: 180px;
}

.tabs button {
  padding: 12px 12px;
  border: none;
  border-radius: 0px;
  background: none;
  color: #2e3b55;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
  width: 100%;
}

.tabs button.active {
  background-color: #1f449b;
  color: white;
}

.tabs button:hover {
  border-radius: 0px;
  background-color: #a3c4f3;
  color: #2e3b55;
}

/* Tab Content 樣式 */
.tab-content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 0 10px 10px 0;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.tab-content h3 {
  color: #2e3b55;
  font-size: 22px;
  margin-top: 10px;
}

.panel {
  margin-top: 15px;
}

.panel button {
  padding: 8px 15px;
  border: none;
  background: #1f449b;
  color: white;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  margin-top: 10px;
}

.code-example {
  background: #f8f8f8;
  padding: 15px;
  margin-top: 10px;
  border-radius: 8px;
  font-family: monospace;
  white-space: pre-wrap;
  font-size: 14px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .feature-section {
    flex-direction: column;
  }

  .tabs-container {
    flex-direction: column;
  }

  .tabs {
    flex-direction: row;
    border-radius: 0;
    padding: 10px;
    padding-bottom: 0;
    justify-content: space-around;
  }

  .tabs button {
    border-radius: 10px 10px 0 0;
    text-align: center;
  }

  .tabs button:hover {
    border-radius: 10px 10px 0 0;
  }

  .tab-content {
    border-radius: 0;
  }
}
</style>




