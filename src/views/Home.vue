<template>
    <div class="home-container" :style="{ 'background-image': `url(${backgroundImage})` }">
        <!-- 左侧预留空间 -->
        <!-- <div class="home-left"></div> -->
        
        <!-- 右侧内容区域 -->
        <!-- <div class="home-right"> -->
            <LaunchButton />
        <!-- </div> -->
    </div>
</template>
<script setup>
import LaunchButton from '../components/LaunchButton.vue'
// import backgroundImage from '../assets/vue.svg'
const backgroundImage = 'https://www.loliapi.com/acg/'
</script>

<style scoped src="./Home.css"></style>