<template>
  <div class="features-page">
    <TitleSection
      :title="currentMessages.Features.title"
      :description="currentMessages.Features.description"
    />

    <div class="read-docs-section">
      <h2>{{ currentMessages.Features.readDocs.title }}</h2>
      <p v-html="currentMessages.Features.readDocs.description"></p>
      <div class="docs-buttons">
        <a
          v-for="button in docsButtons"
          :key="button.title"
          :href="button.link"
          target="_blank"
          rel="noopener noreferrer"
          class="docs-button"
        >
          {{ button.title }}
        </a>
      </div>
    </div>

    <section class="core-structures-section">
      <h2>{{ currentMessages.Features.coreStructures.title }}</h2>
      <p class="section-description">
        {{ currentMessages.Features.coreStructures.description }}
      </p>
      <div class="feature-section">
        <div
          v-for="structure in coreStructures"
          :key="structure.key"
          class="feature-box"
        >
          <h3>{{ structure.title }}</h3>
          <p>{{ structure.description }}</p>
          <Collapse
            :title="structure.collapse.title"
            :content="structure.collapse.content"
            headerColor="var(--insyra-blue)"
            contentColor="var(--blue-95)"
            borderColor="var(--insyra-blue)"
            alignment="left"
            :codeBlock="true"
            :copyButtonText="structure.collapse.copyButtonText"
            codeLanguage="go"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            :href="structure.doc.link"
            class="a-link"
          >
            {{ structure.doc.title }}
          </a>
        </div>
      </div>
    </section>

    <section class="workflow-section">
      <h2>{{ currentMessages.Features.workflowHighlights.title }}</h2>
      <p class="section-description">
        {{ currentMessages.Features.workflowHighlights.description }}
      </p>
      <div class="workflow-grid">
        <a
          v-for="item in workflowHighlights"
          :key="item.title"
          :href="item.link"
          target="_blank"
          rel="noopener noreferrer"
          class="workflow-card"
        >
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </a>
      </div>
    </section>

    <section class="tabs-section">
      <h2>{{ currentMessages.Features.packagesSection.title }}</h2>
      <Tabs :tabs="tabs" />
    </section>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue';
import Collapse from '../components/Collapse.vue';
import Tabs from '../components/Tabs.vue';

export default {
  name: 'Features',
  components: {
    TitleSection,
    Collapse,
    Tabs,
  },
  props: {
    currentMessages: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tabs: [],
    };
  },
  computed: {
    docsButtons() {
      return Object.values(this.currentMessages?.Features?.readDocs?.docsButton ?? {});
    },
    coreStructures() {
      const structures = this.currentMessages?.Features?.coreStructures ?? {};
      return ['dataList', 'dataTable', 'ccl']
        .filter((key) => structures[key])
        .map((key) => ({
          key,
          title: structures[key].title ?? this.defaultStructureTitle(key),
          ...structures[key],
        }));
    },
    workflowHighlights() {
      return Object.values(this.currentMessages?.Features?.workflowHighlights?.items ?? {});
    },
  },
  methods: {
    buildTabs(messages) {
      const sourceTabs = messages?.Features?.packagesSection?.packages ?? [];
      return sourceTabs.map((tab) => {
        const nextTab = { ...tab };
        if (tab.collapses && typeof tab.collapses === 'object') {
          const nextCollapses = {};
          Object.keys(tab.collapses).forEach((key) => {
            nextCollapses[key] = {
              ...tab.collapses[key],
              headerColor: 'var(--insyra-blue)',
              contentColor: 'var(--blue-95)',
              borderColor: 'var(--insyra-blue)',
              alignment: 'left',
            };
          });
          nextTab.collapses = nextCollapses;
        }
        return nextTab;
      });
    },
    defaultStructureTitle(key) {
      if (key === 'dataList') return 'DataList';
      if (key === 'dataTable') return 'DataTable';
      return 'CCL';
    },
  },
  watch: {
    currentMessages: {
      immediate: true,
      deep: true,
      handler(newMessages) {
        this.tabs = this.buildTabs(newMessages);
      },
    },
  },
};
</script>

<style scoped>
.features-page {
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, var(--gray-98), var(--blue-95));
}

h1 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
  color: var(--blue-26);
}

h2 {
  text-align: center;
  font-size: 32px;
  color: var(--blue-26);
  margin-bottom: 20px;
}

p {
  text-align: start;
  margin: 0 auto 30px;
  color: var(--gray-29);
  font-size: 18px;
}

.section-description {
  text-align: center;
  max-width: 920px;
}

.core-structures-section,
.workflow-section,
.tabs-section {
  padding: 20px;
}

.feature-section {
  display: flex;
  max-width: 1200px;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.feature-box {
  flex: 1 1 320px;
  max-width: 360px;
  background-color: var(--white);
  border: 1px solid var(--gray-87);
  border-radius: 12px;
  padding: 25px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.feature-box h3,
.workflow-card h3 {
  color: var(--blue-26);
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 1.3;
  max-width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

@media (max-width: 480px) {
  .feature-box h3,
  .workflow-card h3 {
    font-size: 20px;
  }
}

:deep(.collapse-content) {
  color: var(--black);
}

:deep(.collapse-content pre) {
  margin-bottom: 20px;
}

.read-docs-section {
  background-color: var(--insyra-cream);
  border-radius: 12px;
  padding: 30px;
  margin: 30px auto;
  max-width: 960px;
  border: 1px solid var(--orange-69);
  box-shadow: 0 4px 6px rgba(var(--black-rgb), 0.1);
}

.read-docs-section h2 {
  color: var(--blue-26);
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
  flex-wrap: wrap;
}

.docs-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  min-width: 180px;
  background-color: var(--insyra-orange);
  color: var(--white);
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.docs-button:hover {
  background-color: var(--orange-69);
  transform: translateY(-1px);
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.workflow-card {
  display: block;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--blue-87);
  background: linear-gradient(180deg, var(--white) 0%, var(--gray-97c) 100%);
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(var(--insyra-blue-rgb), 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.workflow-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(var(--insyra-blue-rgb), 0.14);
}

.workflow-card h3 {
  color: var(--insyra-blue);
}

.workflow-card p {
  margin-bottom: 0;
}

.feature-box :deep(.collapse-container) {
  width: 100%;
}

@media (max-width: 768px) {
  .feature-section {
    flex-direction: column;
    align-items: stretch;
  }

  .feature-box {
    max-width: 100%;
    flex-basis: auto;
  }

  .read-docs-section {
    padding: 30px;
    margin: 20px 10px;
  }

  .docs-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .docs-button {
    width: 100%;
  }

  .workflow-grid {
    grid-template-columns: 1fr;
  }
}
</style>
