<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import Sidebar from '@/components/Sidebar.vue';


</script>

<template>
  <div class="h-dvh w-dvw flex bg-neutral-50 dark:bg-neutral-900">
  <Sidebar class="sidebar"/>
    <main class="main-container">
      <router-view />
    </main>
  </div>

</template>

<style scoped>
@reference "tailwindcss";

.sidebar {
  /* @apply fixed left-0 top-0 min-h-dvh w-1/3; */
}

.main-container {
  /* @apply fixed min-h-dvh right-0 top-0 w-2/3 flex bg-cover bg-center bg-no-repeat; */
  @apply flex-1 overflow-auto;
}
</style>