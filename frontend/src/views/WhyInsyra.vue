<template>
  <TitleSection :title="currentMessages.WhyInsyra.title" :description="currentMessages.WhyInsyra.description" />
  <div class="why-insyra-page">

    <!-- Code Comparison Section -->
    <section class="code-comparison-section">
      <h2>{{ currentMessages.WhyInsyra.codeComparison.title }}</h2>

      <!-- Comparison 1 -->
      <div class="code-example">
        <h3>{{ currentMessages.WhyInsyra.codeComparison.calculateAverage.title }}</h3>
        <div class="code-block">
          <div class="code-box">
            <h4>Pandas</h4>
            <pre><code>
data = pd.DataFrame({'col1': [1, 2, 3, 4, 5]})

avg = data['col1'].mean()
print(avg)
            </code></pre>
          </div>
          <div class="code-box">
            <h4>Insyra</h4>
            <pre><code>
data := insyra.NewDataList(1, 2, 3, 4, 5)

avg := data.Mean()
fmt.Println(avg)
            </code></pre>
          </div>
        </div>
      </div>

      <!-- Comparison: Removing Strings -->
      <div class="code-example">
        <h3>{{ currentMessages.WhyInsyra.codeComparison.removeStrings.title }}</h3>
        <div class="code-block">
          <div class="code-box">
            <h4>Pandas</h4>
            <pre><code>
data = pd.DataFrame({'col1': [1, 'a', 3, 'b', 5]})

data['col1'] = pd.to_numeric(data['col1'], errors='coerce')
cleaned_data = data.dropna()
print(cleaned_data)
            </code></pre>
          </div>
          <div class="code-box">
            <h4>Insyra</h4>
            <pre><code>
data := insyra.NewDataList(1, "a", 3, "b", 5)

cleanedData := data.ClearStrings()
cleanedData.Show()
            </code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Display Comparison Section -->
    <section class="display-comparison-section">
      <h2>{{ currentMessages.WhyInsyra.codeComparison.dataDisplayComparison.title }}</h2>
      <div class="display-content" v-html="currentMessages.WhyInsyra.codeComparison.dataDisplayComparison.description">
      </div>
    </section>

    <!-- Go Language Efficiency Section with SDGs -->
    <section class="go-efficiency-section">
      <h2>{{ currentMessages.WhyInsyra.goEfficiency.title }}</h2>
      <div class="efficiency-content" v-html="currentMessages.WhyInsyra.goEfficiency.description"></div>
    </section>
  </div>
</template>

<script>
import TitleSection from '../components/TitleSection.vue';

export default {
  name: 'WhyInsyra',
  components: {
    TitleSection,
  },
  props: {
    currentMessages: Object,
  },
};
</script>

<style scoped>
.why-insyra-page {
  margin: 0 auto;
  padding: 40px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #f9fafb 100%);
  text-align: center;
}

h1 {
  font-size: 32px;
  color: #1f3a70;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

p {
  color: #555;
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.6;
}

/* Code Comparison Section */
.code-comparison-section {
  background-color: #ffffff;
  padding: 30px 30px;
  border-radius: 12px;
  margin-bottom: 40px;
  margin-top: 0px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.code-comparison-section h2 {
  font-size: 28px;
  color: #1f3a70;
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
}

.code-example {
  margin-top: 35px;
  margin-bottom: 35px;
}

.code-example h3 {
  font-size: 22px;
  color: #2e5090;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;
}

.code-block {
  display: flex;
  gap: 25px;
  justify-content: center;
  margin-top: 15px;
  flex-wrap: wrap;
}

.code-box {
  background: #f8f9fb;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #2a9d8f;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  flex: 1;
  min-width: 300px;
  margin-bottom: 0;
  text-align: left;
}

.code-box h4 {
  font-size: 16px;
  color: #1f3a70;
  margin-bottom: 12px;
  font-weight: 600;
}

pre {
  text-align: left;
  font-size: 13px;
  color: #4a4a4a;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  background: #f0f2f5;
  padding: 12px;
  border-radius: 4px;
  line-height: 1.5;
  font-family: 'Monaco', 'Courier New', monospace;
}

code {
  display: block;
  padding: 0;
  line-height: 1.5;
  color: #2c3e50;
}

/* Go Efficiency Section */
.go-efficiency-section {
  background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%);
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.go-efficiency-section h2 {
  font-size: 28px;
  color: #1f3a70;
  margin-bottom: 35px;
  font-weight: 700;
  text-align: center;
}

.efficiency-content {
  max-width: 850px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.85;
  color: #505050;
}

:deep(.efficiency-content h3) {
  font-size: 22px;
  color: #2e5090;
  margin-top: 30px;
  margin-bottom: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 2px solid #d0e3f5;
}

:deep(.efficiency-content p) {
  margin-bottom: 18px;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.85;
  color: #555;
}

:deep(.efficiency-content p:first-child) {
  font-size: 17px;
  font-weight: 500;
  color: #333;
}

:deep(.efficiency-content ul) {
  margin-left: 0;
  margin-bottom: 22px;
  padding-left: 50px;
}

:deep(.efficiency-content li) {
  margin-bottom: 16px;
  margin-left: 20px;
  font-size: 16px;
  list-style-type: disc;
  color: #555;
  line-height: 1.8;
}

:deep(.efficiency-content li strong) {
  color: #1f3a70;
  font-weight: 700;
}

:deep(.efficiency-content strong) {
  color: #2e5090;
  font-weight: 700;
}

:deep(.efficiency-content a) {
  color: #2a9d8f;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(42, 157, 143, 0.3);
}

:deep(.efficiency-content a:hover) {
  color: #1f7a70;
  border-bottom: 1px solid #2a9d8f;
  text-decoration: none;
}

/* Data Display Comparison Section */
.display-comparison-section {
  background: linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%);
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-top: 40px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.display-comparison-section h2 {
  font-size: 28px;
  color: #1f3a70;
  margin-bottom: 35px;
  font-weight: 700;
  text-align: center;
}

.display-content {
  max-width: 850px;
  margin: 0 auto;
  text-align: left;
  line-height: 1.85;
  color: #505050;
}

:deep(.display-content h3) {
  font-size: 22px;
  color: #2e5090;
  margin-top: 30px;
  margin-bottom: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: 2px solid #d0e3f5;
}

:deep(.display-content p) {
  margin-bottom: 18px;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.85;
  color: #555;
}

:deep(.display-content ul) {
  margin-left: 0;
  margin-bottom: 22px;
  padding-left: 50px;
}

:deep(.display-content li) {
  margin-bottom: 16px;
  margin-left: 20px;
  font-size: 16px;
  list-style-type: disc;
  color: #555;
  line-height: 1.8;
}

:deep(.display-content strong) {
  color: #1f3a70;
  font-weight: 700;
}

/* Responsive Design */
@media (max-width: 768px) {
  .why-insyra-page {
    padding: 30px 15px;
  }

  .code-comparison-section {
    padding: 25px 20px;
    margin-bottom: 30px;
  }

  .code-comparison-section h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .code-block {
    flex-direction: column;
    gap: 15px;
  }

  .code-box {
    width: 100%;
    min-width: auto;
    margin: 0;
  }

  .go-efficiency-section {
    padding: 30px 20px;
    margin-top: 30px;
  }

  .go-efficiency-section h2 {
    font-size: 24px;
    margin-bottom: 25px;
  }

  .efficiency-content h3 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  .efficiency-content p {
    font-size: 15px;
    text-align: left;
  }

  :deep(.efficiency-content ul) {
    margin-left: 0;
    padding-left: 30px;
  }

  :deep(.efficiency-content li) {
    font-size: 15px;
    margin-left: 10px;
  }
}

@media (max-width: 480px) {
  .why-insyra-page {
    padding: 20px 12px;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .code-comparison-section {
    padding: 15px;
    margin-bottom: 20px;
  }

  .code-comparison-section h2 {
    font-size: 20px;
  }

  .code-box h4 {
    font-size: 14px;
  }

  pre {
    font-size: 12px;
    padding: 10px;
  }

  .go-efficiency-section {
    padding: 20px 12px;
  }

  .go-efficiency-section h2 {
    font-size: 20px;
  }

  .efficiency-content h3 {
    font-size: 18px;
  }

  .efficiency-content p {
    font-size: 14px;
  }

  :deep(.efficiency-content ul) {
    padding-left: 20px;
  }

  :deep(.efficiency-content li) {
    font-size: 14px;
    margin-bottom: 12px;
    margin-left: 5px;
  }
}
</style>
