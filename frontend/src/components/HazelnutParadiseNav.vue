<template>
    <div id="navbar-placeholder">
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const script = document.createElement('script');
    // 忽略cors
    fetch('https://cors-anywhere.herokuapp.com/hazelnut-paradise.com/utils.js')
        .then(response => response.text())
        .then(data => {
            script.textContent = data;
            document.head.appendChild(script);
            getNavbar();
        });
});
</script>
