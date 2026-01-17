<template>
    <div class="grid grid-cols-1 items-center mb-8" :class="{'md:grid-cols-2': hasComponent}">
        <div class="mb-4 md:mb-0">
            <h1 class="text-3xl font-bold mb-2">{{ props.title }}</h1>
            <p v-if="hasSubtitle" class="text-muted-foreground text-sm">{{ props.subtitle }}</p>
        </div>
        <div v-if="hasComponent" class="flex justify-start md:justify-end gap-3 mt-4 md:mt-0">
            <component :is="props.component" />
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

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
        default: null,
        required: false
    }
});

const hasSubtitle = computed(() => props.subtitle && props.subtitle.trim() !== '');
const hasComponent = computed(() => props.component && Object.keys(props.component).length > 0);
</script>

<style scoped>
@reference "tailwindcss";
</style>