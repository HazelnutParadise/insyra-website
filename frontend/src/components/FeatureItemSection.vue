<template>
    <div class="feature-item-section-container">
        <div class="feature-item-section">
            <FeatureItem v-for="feature in featuresArray" :key="feature.id" :feature="feature" />
        </div>
    </div>
</template>

<script>
import FeatureItem from './FeatureItem.vue';

export default {
    components: {
        FeatureItem,
    },
    props: {
        featureItemSection: {
            type: Object,
            required: true,
        },
    },
    computed: {
        featuresArray() {
            // 將 features 物件轉為陣列，並依 id 排序，確保所有亮點都會顯示
            return Object.values(this.featureItemSection.features).sort((a, b) => a.id - b.id);
        },
    },
};
</script>

<style scoped>
.feature-item-section {
    position: relative;
    top: -100px;
    width: 100%;
    display: flex;
    /* 使用 flexbox */
    flex-wrap: wrap;
    /* 允許換行 */
    justify-content: center;
    /* 水平置中 */
    padding: 50px 20px;
}

.feature-item-section-container {
    background-color: #d73e3e;
}

h2 {
    display: none;
    /* 隱藏標題 */
}
</style>
