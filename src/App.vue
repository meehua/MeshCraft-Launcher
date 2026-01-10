<script setup lang="ts">
import { KeepAlive, Transition } from "vue";
import { RouterView } from "vue-router";
import { invoke } from "@tauri-apps/api/core";
import Sidebar from '@/components/Sidebar.vue';
import { useRoute } from "vue-router";
const route = useRoute();

</script>

<template>
  <div class="h-dvh w-dvw flex bg-neutral-50 dark:bg-neutral-900">
    <Sidebar class="sidebar" />
    <main class="main-container">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="default">
          <div :key="route.fullPath">
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </div>
        </Transition>
      </RouterView>
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

/* 路由切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.05s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>