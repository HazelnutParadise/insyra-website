<template>
  <div class="feature">
    <h3>{{ feature.title }}</h3>
    <p>{{ feature.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.feature {
  text-align: center;
  border: 1px solid #e0e0e0; /* 增加邊框 */
  border-radius: 10px; /* 增加圓角 */
  padding: 20px; /* 增加內邊距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 增加陰影 */
  transition: transform 0.2s; /* 增加過渡效果 */
  background-color: #f9f9f9; /* 增加背景顏色 */
  color: #333; /* 設定文字顏色 */
}

.feature:hover {
  transform: scale(1.05); /* 滑鼠懸停時放大 */
  background-color: #e0f7fa; /* 滑鼠懸停時改變背景顏色 */
}
</style>
