<template>
  <div class="how-to-use-page" :class="{ 'page-visible': isVisible }">
    <div class="cyber-background">
    </div>
    <div class="content-wrapper">
      <h1 class="cyber-title" :class="{ 'title-visible': isVisible }">
        如何使用 Insyra
      </h1>
      <p class="cyber-subtitle" :class="{ 'subtitle-visible': isVisible }">
        探索下一代程式開發體驗
      </p>

      <!-- Installation Section -->
      <section class="neo-section installation-section" :class="{ 'section-visible': isVisible }">
        <div class="section-header">
          <div class="header-line"></div>
          <h2>安裝 Insyra</h2>
          <div class="header-line"></div>
        </div>
        <p>在終端機中執行以下指令來安裝 Insyra：</p>
        <div class="terminal-window">
          <div class="terminal-header">
            <span class="terminal-button"></span>
            <span class="terminal-button"></span>
            <span class="terminal-button"></span>
          </div>
          <div class="terminal-content">
            <pre><code>go get -u github.com/HazelnutParadise/Insyra</code></pre>
          </div>
        </div>
        <a href="https://github.com/HazelnutParadise/Insyra" class="cyber-link">
            Go 初學者？
        </a>
      </section>

      <!-- Idensyra IDE Section -->
      <section class="neo-section ide-section" :class="{ 'section-visible': isVisible }">
        <div class="section-header">
          <div class="header-line"></div>
          <h2>專屬 IDE：Idensyra</h2>
          <div class="header-line"></div>
        </div>
        
        <div class="ide-intro">
          <p class="ide-description">
            Idensyra 是一個輕量級的 Go IDE，內建 Insyra。無需安裝 Go 環境即可執行 Go 代碼！
          </p>
          <div class="download-button">
            <a href="#" class="cyber-button">
              下載 Idensyra
              <span class="button-glow"></span>
            </a>
          </div>
        </div>

        <div class="mode-cards">
          <div class="mode-card">
            <h3>GUI 模式</h3>
            <img src="https://placehold.co/500x300" alt="GUI Mode" class="mode-icon">
            
            <div class="mode-icon">🖥️</div>
            <p>使用 Fyne 構建的圖形界面</p>
            <ul>
              <li>即時運行功能</li>
              <li>視覺化界面</li>
              <li>快捷鍵支持</li>
            </ul>
          </div>

          <div class="mode-card">
            <h3>WebUI 模式</h3>
            <img src="https://placehold.co/500x300" alt="WebUI Mode" class="mode-icon">
            <div class="mode-icon">🌐</div>
            <p>基於 monaco-editor 的網頁界面</p>
            <ul>
              <li>代碼高亮</li>
              <li>智能補全</li>
              <li>在線編輯</li>
            </ul>
          </div>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h4>無需環境</h4>
            <p>內建 Go 運行環境</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h4>即寫即用</h4>
            <p>Insyra 功能隨寫隨用</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h4>實時運行</h4>
            <p>支持代碼實時執行</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h4>雙模式</h4>
            <p>GUI/Web 隨心切換</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowToUse',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    // 直接設置為可見
    this.isVisible = true
  }
}
</script>

<style scoped>
p {
  font-size: 1.2rem;
}

pre {
  font-size: 1.2rem;
}

/* 更新背景色和基礎文字顏色 */
.how-to-use-page {
  min-height: 100vh;
  background: #1a1a2e;  /* 更新背景色 */
  color: #ffffff;  /* 更新基礎文字顏色 */
  font-family: 'Space Grotesk', sans-serif;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.page-visible {
  opacity: 1;
  transform: translateY(0);
}

.cyber-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(26,26,46,.97) 0%, rgba(40,40,80,.95) 100%);  /* 調整漸層色 */
  z-index: 0;
  overflow: hidden;
}

.content-wrapper {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  z-index: 1;
}

.cyber-title {
  font-size: 3.5rem;
  text-align: center;
  color: #f9ac41;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.8s ease-out 0.2s;
}

.title-visible {
  opacity: 1;
  transform: translateY(0);
}

.cyber-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: #ff69b4;  /* 粉紅色副標題 */
  text-shadow: 0 0 5px rgba(255, 105, 180, 0.3);
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out 0.4s;
}

.subtitle-visible {
  opacity: 1;
  transform: translateY(0);
}

.neo-section {
  background: rgba(20, 20, 40, 0.8);
  border: 1px solid rgba(255, 227, 176, 0.2);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(255, 227, 176, 0.1);
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out 0.6s;
  position: relative;
}

.section-visible {
  opacity: 1;
  transform: translateY(0);
}

.neo-section::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(90deg, #a2d5ab, transparent, #ff69b4);
  border-radius: 16px;
  z-index: -1;
  animation: borderRotate 4s linear infinite;
  opacity: 0.5;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.header-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, #a2d5ab, #ff69b4, #a2d5ab);
}

h2 {
  color: #fbe3b0;
  margin: 0 20px;
  font-size: 2rem;
}

.terminal-content {
  overflow-x: auto;
  /* 滾動條下移 */
  padding-bottom: 20px;
}

@keyframes borderRotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.terminal-window {
  background: rgba(15, 15, 35, 0.95);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid rgba(255, 227, 176, 0.2);
}

.terminal-header {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-button:nth-child(1) { background: #ff5f56; }
.terminal-button:nth-child(2) { background: #ffbd2e; }
.terminal-button:nth-child(3) { background: #27c93f; }

.mode-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

.mode-card {
  display: flex;
  flex-direction: column;
  background: rgba(25, 25, 45, 0.8);
  border: 1px solid rgba(255, 227, 176, 0.2);
  border-radius: 15px;
  padding: 20px 20px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 227, 176, 0.1);
}

.mode-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.mode-card:hover {
  transform: translateY(-5px);
}

.mode-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.mode-card h3 {
  color: #ff69b4;
  font-size: 1.5rem;
  text-shadow: 0 0 5px rgba(255, 105, 180, 0.3);
  margin-bottom: 15px;
}

.mode-card ul {
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding: 0;
  text-align: left;
}

.mode-card ul li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

.mode-card ul li:before {
  content: "→ ";
  color: #fbe3b0;
}

.cyber-button {
  margin-top: 40px;
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(45deg, #a2d5ab, #ff69b4);
  color: #1a1a2e;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cyber-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 227, 176, 0.5);
  background: linear-gradient(45deg, #ff69b4, #a2d5ab);
}

.cyber-link {
  color: #fbe3b0;
  text-decoration: underline;
}

.cyber-link:hover {
  color: #ff69b4;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.feature-card {
  background: rgba(25, 25, 45, 0.8);
  border: 1px solid rgba(255, 105, 180, 0.2);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.1);
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: #ff69b4;
  box-shadow: 0 6px 20px rgba(255, 105, 180, 0.2);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.feature-card h4 {
  color: #fbe3b0;
  margin: 10px 0;
}

@media (max-width: 768px) {
  .cyber-title {
    font-size: 2.5rem;
  }
  
  .mode-cards {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

/* 新增發光線特效 */
.glow-line {
  position: absolute;
  width: 150px;
  height: 150px;
  background: linear-gradient(90deg, transparent, #a2d5ab, #ff69b4);
  animation: borderGlow 8s linear infinite;
  filter: blur(5px);
}

.glow-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #ff69b4, #a2d5ab);
  filter: blur(5px);
}

@keyframes borderGlow {
  0% {
    transform: rotate(0deg) translate(-50%, -50%) scale(2);
    left: 0%;
    top: 0%;
  }
  25% {
    transform: rotate(90deg) translate(-50%, -50%) scale(2);
    left: 100%;
    top: 0%;
  }
  50% {
    transform: rotate(180deg) translate(-50%, -50%) scale(2);
    left: 100%;
    top: 100%;
  }
  75% {
    transform: rotate(270deg) translate(-50%, -50%) scale(2);
    left: 0%;
    top: 100%;
  }
  100% {
    transform: rotate(360deg) translate(-50%, -50%) scale(2);
    left: 0%;
    top: 0%;
  }
}
</style>

