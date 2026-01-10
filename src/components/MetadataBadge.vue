<template>
  <span :class="badgeClass" class="inline-flex items-center gap-1.5 rounded border px-2 py-1 text-[10px] font-bold uppercase">
    <!-- server 类型：脉动圆点 -->
    <template v-if="type === 'server'">
      <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
    </template>
    
    <!-- local 类型：硬盘图标 -->
    <template v-else-if="type === 'local'">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="10" 
        height="10" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        class="hard-drive-icon"
      >
        <line x1="22" y1="12" x2="2" y2="12"></line>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        <line x1="6" y1="16" x2="6.01" y2="16"></line>
        <line x1="10" y1="16" x2="10.01" y2="16"></line>
      </svg>
    </template>
    
    <!-- normal 类型：可选自定义图标 -->
    <template v-else-if="iconClass">
      <i :class="iconClass"></i>
    </template>
    
    <!-- 徽章文本 -->
    <span>{{ text }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['server', 'local', 'normal'].includes(value),
    default: 'normal'
  },
  text: {
    type: String,
    required: true
  },
  iconClass: {
    type: String,
    default: ''
  }
})

// 根据type动态生成Tailwind样式类
const badgeClass = computed(() => {
  const base = 'backdrop-blur-md'
  
  switch(props.type) {
    case 'server':
      return `${base} bg-green-500/10 text-green-400 border-green-500/20`
    case 'local':
      return `${base} bg-blue-500/10 text-blue-400 border-blue-500/20`
    case 'normal':
    default:
      return `${base} bg-secondary/50 text-muted-foreground border-border/50`
  }
})
</script>

<style scoped>
@reference "tailwindcss";

.hard-drive-icon {
  min-width: 10px;
  min-height: 10px;
}
</style>