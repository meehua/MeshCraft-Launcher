<template>
    <div class="flex gap-2 mb-6 border-b pb-1 border-gray-800">
        <button
            class="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-md transition-all hover:bg-gray-800 hover:border-gray-700 hover:cursor-pointer"
            v-for="item in tabs" :key="item.type" :class="{ 'selected': item.type == selectedTab?.type }"
            @click="resourceStore.setSelectedTab(item.type)">
            <!-- 图标 -->
            <!-- <span :class="item.icon"></span> -->
            {{ item.name }}
        </button>
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useResourceStore } from '@/stores/useResourceStore';
import { storeToRefs } from 'pinia';
const resourceStore = useResourceStore();
const { tabs, selectedTab } = storeToRefs(resourceStore);

</script>
<style scoped>
@reference "tailwindcss";

.selected {
    @apply bg-blue-500 border-amber-500 border-b-2;
}
</style>