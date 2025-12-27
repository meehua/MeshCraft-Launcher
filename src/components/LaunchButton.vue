<template>
    <div class="button-container">
        <button 
            @click="launchGame"
            :disabled="isLoading"
            class="btn-base btn-lg btn-primary"
        >
            <span class="btn-text">Launch Game</span>
        </button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    // import { useGameStore } from '@/stores/game'
    // const gameStore = useGameStore()
    
    const isLoading = ref(false)
    
    const launchGame = () => {
        isLoading.value = true
        console.log('Launch Game')
        // Simulate game launch process
        setTimeout(() => {
            // gameStore.launchGame()
            // In a real app, you would call the actual game launch function here
            console.log('Game launched!')
            // You might want to keep the button disabled after launch, or reset it
            // isLoading.value = false
        }, 3000)
    }
</script>

<style scoped src="./LaunchButton.css"></style>
