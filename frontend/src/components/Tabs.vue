<template>
    <div class="tabs-container">
      <!-- Left-Side Tabs -->
      <div class="tabs">
        <button 
          class="tab-button"
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="selectTab(index)"
          :class="{ active: selectedTab === index }">
          <span class="btn-title">{{ tab.title }}</span><span class="btn-sub-title">{{ tab.subTitle }}</span>
        </button>
      </div>

      <!-- Tab Content on the Right -->
      <div class="tab-content">
        <div v-for="(tab, index) in tabs" :key="index" v-show="selectedTab === index">
          <h3>{{ tab.title }} ({{ tab.subTitle }})</h3>
          <br>
          <div v-for="(description, descriptionIndex) in tab.descriptions" :key="descriptionIndex"> 
            <div class="tab-content-description" v-html="description"></div>
            <div v-if="tab.collapses && tab.collapses[descriptionIndex]">
              <Collapse 
                :title="tab.collapses[descriptionIndex].title" 
                :content="tab.collapses[descriptionIndex].content" 
                :headerColor="tab.collapses[descriptionIndex].headerColor" 
                :contentColor="tab.collapses[descriptionIndex].contentColor" 
                :borderColor="tab.collapses[descriptionIndex].borderColor"
                :alignment="tab.collapses[descriptionIndex].alignment"
                :codeBlock="tab.collapses[descriptionIndex].codeBlock"
                :codeLanguage="tab.collapses[descriptionIndex].codeLanguage"
                :copyButtonText="tab.collapses[descriptionIndex].copyButtonText"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Collapse from './Collapse.vue';
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedTab: 0
    }
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index
      // scroll to the top of the element
      this.$el.scrollIntoView({ behavior: 'smooth' });
    }
  },
  components: {
    Collapse
  }
}
</script>

<style scoped>
.btn-title {
  font-size: 20px;
}

.btn-sub-title {
  font-size: 16px;
  text-align: center;
}

.tab-button {
  display: inline-flex;
  flex-direction: column;
}

.tab-content-description {
  text-align: start;
  margin: 0 auto 30px;
  color: #4a4a4a;
  font-size: 18px;
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
  color: #4a4a4a;
  margin-bottom: 20px;
}

.tabs-container {
  display: flex;
  max-width: 900px;
  min-height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #f7f7f7;
}

.tabs {
  max-width: 180px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 15px 0;
  background: #e6e6e6;
  border-radius: 10px 0 0 10px;
  min-width: 180px;
}

.tabs button {
  padding: 12px;
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
  display: flex;
  align-items: center;
  min-height: 50px; /* 設置最小高度 */
  height: auto; /* 允許自動增加高度 */
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
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 0 10px 10px 0;
}

.tab-content h3 {
  color: #2e3b55;
  font-size: 26px;
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

@media (max-width: 768px) {
  .btn-title {
    font-size: 18px;
  }

  .btn-sub-title {
    font-size: 14px;
  }

  .tabs-container {
    flex-direction: column;
  }

  .tabs {
    max-width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 0;
    padding: 10px;
    padding-bottom: 0;
    justify-content: center;
  }

  .tabs button {
    flex: 1 1 calc(33.33% - 10px);
    border-radius: 10px 10px 0 0;
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
    padding: 12px 8px;
    justify-content: center;
    min-height: 60px;
  }

  .tabs button:hover {
    border-radius: 10px 10px 0 0;
  }

  .tab-content {
    border-radius: 0;
  }
}

@media (max-width: 480px) {
  .tabs button {
    flex: 1 1 calc(50% - 10px);
    min-height: 70px; /* 在更小的螢幕上進一步增加最小高度 */
  }
}
</style>
