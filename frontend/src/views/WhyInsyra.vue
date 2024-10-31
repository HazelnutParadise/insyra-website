<template>
  <div class="why-insyra-page">
    <h1>為什麼選擇 Insyra？</h1>
    <p>Insyra 不僅提供更簡單易用的語法，更因為基於 Go 語言而具備節能效益。以下為 Insyra 和 Pandas 在相同操作上的代碼對比，讓您更直觀地了解它的優勢。</p>

    <!-- Code Comparison Section -->
    <section class="code-comparison-section">
      <h2>Insyra vs Pandas 語法對比</h2>

      <!-- Comparison 1 -->
      <div class="code-example">
        <h3>1. 計算列的平均值</h3>
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
    </section>

    <!-- Code Comparison Section -->
    <section class="code-comparison-section">
      <h2>資料清理：移除字串 Insyra vs Pandas</h2>

      <!-- Comparison: Removing Strings -->
      <div class="code-example">
        <h3>移除資料中的字串</h3>
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
fmt.Println(cleanedData.Data())
            </code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Go Language Efficiency Section -->
    <section class="go-efficiency-section">
      <h2>Go 語言的節能優勢</h2>
      <p>Insyra 基於 Go 語言開發，Go 以高效的記憶體管理與並行處理能力聞名。<a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/09/paperSLE.pdf" target="_blank">研究指出</a>，與 Python 相比，Go 能更高效地使用系統資源，顯著降低運行時的能耗，讓您的資料分析更環保。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WhyInsyra',
};
</script>

<style scoped>
.why-insyra-page {
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background: #f9f9f9;
  border-radius: 10px;
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
  color: #333;
  margin-bottom: 10px;
}

h3, h4 {
  color: #2e3b55;
}

h3 {
  margin-bottom: 10px;
  font-size: 20px;
}

h4 {
  margin-bottom: 10px;
  font-size: 18px;
}

pre {
  text-align: left;
  font-size: 14px;
  color: #333;
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

@media (max-width: 768px) {
  .code-block {
    flex-direction: column;
  }
  
  .code-box {
    width: 100%;
    margin: 10px 0;
  }
  
  pre {
    font-size: 13px;
  }
  
  h1 {
    font-size: 28px;
  }
  
  h2 {
    font-size: 22px;
  }
  
  p {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .why-insyra-page {
    padding: 15px;
  }
  
  h1 {
    font-size: 24px;
  }
  
  pre {
    font-size: 12px;
  }
}
</style>
