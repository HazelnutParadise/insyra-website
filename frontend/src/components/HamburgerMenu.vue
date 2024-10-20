<template>
  <div>
    <div class="hamburger" @click="toggleMenu">
      <div :class="['bar', { 'active': isOpen }]"></div>
      <div :class="['bar', { 'active': isOpen }]"></div>
      <div :class="['bar', { 'active': isOpen }]"></div>
    </div>
    <div v-if="isOpen" class="menu">
      <ul>
        <li @click="selectLanguage('繁體中文')">繁體中文</li>
        <li @click="selectLanguage('English')">English</li>
        <!-- 添加其他導航項目 -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    selectLanguage(lang) {
      this.$emit('language-changed', lang);
      this.toggleMenu(); // 點擊後關閉菜單
    },
  },
};
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
}

.bar {
  height: 4px;
  width: 100%;
  background-color: #333;
  transition: all 0.3s ease;
}

.bar.active:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu {
  position: absolute;
  top: 40px; /* 根據需要調整 */
  right: 0;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px 20px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .hamburger {
    display: flex;
  }
}

</style>
