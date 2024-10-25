<template>
  <div class="collapse-container" :style="{ borderColor: borderColor }">
    <div class="collapse-header" @click="toggle" :style="{ backgroundColor: headerColor }">
      {{ title }}
      <span class="toggle-icon" :class="{ 'is-open': isOpen }">▼</span>
    </div>
    <transition
      name="collapse"
      @enter="enter"
      @leave="leave"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div v-show="isOpen" class="collapse-content" :style="{ backgroundColor: contentColor }">
        <div class="collapse-inner">
          <div v-if="codeBlock" class="code-block-wrapper">
            <pre><code ref="codeBlock" :class="codeLanguage">{{ content }}</code></pre>
            <button @click="copyCode" class="copy-button">複製</button>
          </div>
          <div v-else v-html="content"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 或者選擇其他樣式

export default {
  props: {
    title: String,
    content: String,
    headerColor: String,
    contentColor: String,
    borderColor: String,
    alignment: String,
    codeBlock: Boolean,
    language: {
      type: String,
      default: 'plaintext'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    codeLanguage() {
      return `language-${this.language}`;
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    enter(element) {
      const height = element.scrollHeight;
      element.style.height = '0px';
      setTimeout(() => {
        element.style.height = height + 'px';
      }, 0);
    },
    afterEnter(element) {
      element.style.height = 'auto';
      if (this.codeBlock) {
        this.$nextTick(() => {
          hljs.highlightElement(this.$refs.codeBlock);
        });
      }
    },
    leave(element) {
      const height = element.scrollHeight;
      element.style.height = height + 'px';
      setTimeout(() => {
        element.style.height = '0px';
      }, 0);
    },
    afterLeave(element) {
      element.style.height = null;
    },
    copyCode() {
      const codeElement = this.$refs.codeBlock;
      const range = document.createRange();
      range.selectNode(codeElement);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      alert('代碼已複製到剪貼板');
    }
  }
}
</script>

<style scoped>
.collapse-container {
  border: 1px solid;
  border-radius: 4px;
  margin-bottom: 10px;
}

.collapse-header {
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.collapse-content {
  overflow: hidden;
  transition: height 0.3s ease-out;
}

.collapse-inner {
  padding: 10px;
}

.collapse-inner pre {
  white-space: pre;
  overflow-x: auto;
  margin: 0;
  padding-bottom: 20px;
}

.collapse-content pre {
  white-space: pre;
  overflow-x: auto;
  text-align: left;
  margin: 0;
  padding-bottom: 20px;
}

.collapse-content code {
  font-family: monospace;
  font-size: 14px;
  color: black;
}

.toggle-icon {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.toggle-icon.is-open {
  transform: rotate(180deg);
}

/* 動畫相關樣式 */
.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.3s ease-out;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  height: 0;
}

.code-block-wrapper {
  position: relative;
}

.copy-button {
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
}

.copy-button:hover {
  background-color: #e0e0e0;
}

/* 確保代碼塊內的文字顏色正確 */
:deep(pre code) {
  color: inherit;
}
</style>
