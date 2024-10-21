<template>
    <div class="feature-item-section-container">
        <div class="feature-item-section">
            <FeatureItem v-for="feature in features" :key="feature.id" :feature="feature" />
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
        features: {
            type: Array,
            required: true,
        },
    },
};
</script>
<style scoped>
.feature-item-section {
    width: 100%;
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    padding: 50px 20px;
    align-items: center; /* 新增這一行以垂直置中 */
}
.feature-item-section-container {
    min-height: 400px;
    background-color: #f4f4f4;
    /* 紅色斜線 */
    background-image: linear-gradient(3.1deg, #d73e3e 12%, transparent 12%, transparent 88%, #d73e3e 88%, #d73e3e);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
