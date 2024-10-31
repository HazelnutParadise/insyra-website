<template>
    <div id="navbar-placeholder">
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
    let response = await fetch('/navbar')
    const data = await response.text()
    console.log(data);
    document.getElementById('navbar-placeholder').innerHTML = data;
});
</script>
<style scoped>
#navbar-placeholder {
    padding: 10px 40px;
    background-color: #000;
    margin-bottom: 0px;
    padding-bottom: 0px;
}
</style>
