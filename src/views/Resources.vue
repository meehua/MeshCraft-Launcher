<template>
    <div class="p-6 h-full w-full">
        <!-- 顶栏标题 -->
        <TopBar title="Resources"
            subtitle="Manage all game resources uniformly. MeshCraft will automatically mount resources according to the save configuration on startup." />
        <!-- 资源导航栏 -->
        <ResourceTabs />
    </div>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue';
import ResourceTabs from '@/components/ResourceTabs.vue';
import { useResourceStore } from '@/stores/useResourceStore';
import { storeToRefs } from 'pinia';
const resourceStore = useResourceStore();
const { tabs } = storeToRefs(resourceStore);
</script>
<style scoped>
@reference "tailwindcss";
</style>