<template>
    <div class="tabs-container">
      <!-- Left-Side Tabs -->
      <div class="tabs">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="selectTab(index)"
          :class="{ active: selectedTab === index }">
          {{ tab.name }}
        </button>
      </div>

      <!-- Tab Content on the Right -->
      <div class="tab-content">
        <div v-for="(tab, index) in tabs" :key="index" v-show="selectedTab === index">
          <h3>{{ tab.name }}</h3>
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
    }
  },
  components: {
    Collapse
  }
}
</script>

<style scoped>
.tab-content-description {
  text-align: justify;
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

@media (max-width: 768px) {
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
