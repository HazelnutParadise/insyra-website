<template>
    <h2 class="feature-item-section-title">{{ featureItemSection.title }}</h2>
    <div class="feature-item-section-container">
        <div class="feature-item-section">
            <FeatureItem v-for="feature in featureItemSection.features" :key="feature.id" :feature="feature" />
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
}
h2 {
    background-color: #f4f4f4;
    border-color: #d73e3e;
    border-style: solid;
    border-width: 2px;
    color: #d73e3e;
    text-align: center;
    padding: 20px 0;
}
</style>
