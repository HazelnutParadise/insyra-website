<template>
  <div class="collapse" :style="{ borderColor: borderColor }">
    <div class="collapse-header" @click="toggle" :style="{ backgroundColor: headerColor }">
      <h3>{{ title }}</h3>
      <span class="toggle-icon" :class="{ 'is-open': isOpen }">▼</span>
    </div>
    <transition
      name="collapse-transition"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div v-show="isOpen" class="collapse-content" :style="{ backgroundColor: contentColor }">
        <div class="content-inner" :style="{ textAlign: alignment }" v-html="content"></div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

// 定義 props
const props = defineProps<{
  title: string;
  content?: string;
  headerColor?: string;
  contentColor?: string;
  borderColor?: string;
  alignment?: 'left' | 'center' | 'right'; // 新增對齊方式選項
}>()

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const enter = (el: HTMLElement) => {
  el.style.height = 'auto'
  const height = el.scrollHeight
  el.style.height = '0px'
  el.offsetHeight // 觸發重繪
  el.style.transition = 'height 0.3s ease-out, opacity 0.3s ease-out'
  el.style.height = height + 'px'
  el.style.opacity = '1'
}

const afterEnter = (el: HTMLElement) => {
  el.style.height = 'auto'
  el.style.overflow = 'visible'
}

const leave = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + 'px'
  el.offsetHeight // 觸發重繪
  el.style.transition = 'height 0.3s ease-out, opacity 0.3s ease-out'
  el.style.height = '0px'
  el.style.opacity = '0'
}
</script>

<style scoped>
.collapse {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px 0;
  overflow: hidden;
}

.collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-icon {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.toggle-icon.is-open {
  transform: rotate(180deg);
}

.collapse-content {
  overflow: hidden;
  transition: height 0.3s ease-out, opacity 0.3s ease-out;
  opacity: 0;
  height: 0;
}

.content-inner {
  padding: 10px;
  color: #333;
}

.collapse-transition-enter-active,
.collapse-transition-leave-active {
  transition: height 0.3s ease-out, opacity 0.3s ease-out;
  overflow: hidden;
}

.collapse-transition-enter-from,
.collapse-transition-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
