<template>
    <div class="grid grid-cols-1 md:grid-cols-2 items-center mb-8">
        <div class="mb-4 md:mb-0">
            <h1 class="text-3xl font-bold mb-2">{{ props.title }}</h1>
            <p class="text-muted-foreground text-sm">{{ props.subtitle }}</p>
        </div>
        <div class="flex justify-start md:justify-end gap-3">
            <component :is="props.component" />
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: 'My Application',
        required: true
    },
    subtitle: {
        type: String,
        default: '',
        required: false
    },
    component: {
        type: Object,
        default: () => ({}),
        required: false
    }
});
</script>
<style scoped>
@reference "tailwindcss";
</style>