<template>
    <div id="navbar-placeholder">
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    fetch('/navbar')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById('navbar-placeholder').innerHTML = data;
    });
});
</script>
<style scoped>
#navbar-placeholder {
    padding: 10px 40px;
    background-color: #000;
    margin-bottom: 0px;
    padding-bottom: 0px;
    z-index: 1;
}
</style>
