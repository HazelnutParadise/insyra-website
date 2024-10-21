<template>
    <div class="feature-item-section">
        <FeatureItem v-for="feature in features" :key="feature.id" :feature="feature" />
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
    height: 400px;
    background-color: #f4f4f4;
    /* 紅色斜線 */
    background-image: linear-gradient(3.1deg, #d73e3e 12%, transparent 12%, transparent 88%, #d73e3e 88%, #d73e3e);
    display: flex;
    justify-content: space-around;
    padding: 50px 20px;
}
</style>