<template>
    <div class="feature-item">
        <div class="card">
            <div class="card-content">
                <p class="title">{{ feature.title }}</p>
                <br>
                <div class="description">
                    {{ feature.description }}
                </div>
            </div>

            <div class="card-actions">
                <button class="learn-more" @click="reveal = true">Learn More</button>
            </div>

            <transition name="fade">
                <div v-if="reveal" class="card-expanded">
                    <div class="expanded-content">
                        <p class="origin-title">Origin</p>
                        <p class="description">{{ feature.description }}</p>
                    </div>
                    <div class="card-actions">
                        <button class="close" @click="reveal = false">Close</button>
                    </div>
                </div>
            </transition>
        </div>
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
.feature-item {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    margin: 10px; /* 增加邊距 */
}

.card {
    width: 100%;
    max-width: 400px;
    border: none; /* 移除邊框 */
    box-sizing: border-box;
    border-radius: 20px; /* 更大的圓角 */
    background-color: #ffffff; /* 背景顏色 */
    overflow: hidden; 
}

.card:hover {
    border: 5px solid #ff4081; /* 添加邊框 */
}

.card-content {
    padding: 20px; /* 增加內邊距 */
}

.title {
    font-size: 1.8em; /* 更大的字體 */
    font-weight: bold;
    color: #ff4081; /* 鮮豔的顏色 */
    text-transform: uppercase; /* 大寫字母 */
}

.description {
    color: #333; /* 深色文字 */
    font-style: italic; /* 斜體 */
}

.card-actions {
    padding: 8px;
    text-align: right;
}

.learn-more, .close {
    background-color: #ff4081; /* 按鈕顏色 */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px; /* 增加按鈕內邊距 */
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s; /* 增加變形效果 */
}

.learn-more:hover, .close:hover {
    background-color: #e91e63; /* 懸停時的顏色 */
    transform: scale(1.05); /* 懸停時放大 */
}

.card-expanded {
    position: absolute;
    width: 100%;
    background-color: white;
    border-radius: 20px; /* 更大的圓角 */
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.origin-title {
    font-size: 1.5em; /* 更大的字體 */
    font-weight: bold;
    color: #ff4081; /* 鮮豔的顏色 */
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
}

@media (max-width: 1300px) {
    .card {
        max-width: 100%;
        width: 100%;
    }
  }
</style>