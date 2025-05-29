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

    <!-- Go Language Efficiency Section -->
    <section class="go-efficiency-section">
      <h2>{{ currentMessages.WhyInsyra.goEfficiency.title }}</h2>
      <p v-html="currentMessages.WhyInsyra.goEfficiency.description"></p>
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
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background: #f9f9f9;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 32px;
  color: #2e3b55;
  margin-bottom: 20px;
}

p {
  color: #4a4a4a;
  font-size: 18px;
  margin-bottom: 20px;
}

/* Code Comparison Section */
.code-comparison-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.code-example {
  margin-top: 20px;
}

.code-block {
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-top: 10px;
  flex-wrap: wrap;
}

.code-box {
  background: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 280px;
  margin-bottom: 15px;
}

h2 {
  font-size: 24px;
  color: black;
  margin-bottom: 10px;
}

h3,
h4 {
  color: #2e3b55;
}

h3 {
  margin-bottom: 20px;
  font-size: 20px;
}

h4 {
  margin-bottom: 10px;
  font-size: 18px;
}

pre {
  text-align: left;
  font-size: 14px;
  color: #4a4a4a;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  display: block;
  padding: 10px;
  line-height: 1.5;
}

/* Go Efficiency Section */
.go-efficiency-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.go-efficiency-section p {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .code-block {
    flex-direction: column;
  }

  .code-box {
    width: 100%;
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  .why-insyra-page {
    padding: 15px;
  }

  h1 {
    font-size: 24px;
  }

}
</style>
