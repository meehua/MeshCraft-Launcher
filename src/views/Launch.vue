<template>
    <!-- 背景层-全窗口 -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <img :src="backgroundImage" alt="" class="w-full h-full object-cover opacity-10 dark:opacity-20" />
    </div>
    <!-- 游戏信息 -->
    <div class="pt-2 h-full relative">
        <div class="p-6" w-full h-full>
            <!-- 游戏卡片 -->
            <div class="relative rounded-lg shadow-lg overflow-hidden transition-all">
                <!-- 背景层 -->
                <div class="absolute inset-0 pointer-events-none">
                    <img :src="backgroundImage" alt="" class="w-full h-full object-cover" />
                </div>

                <!-- 图片遮罩 -->
                <div class="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/20 backdrop-blur-xs">
                </div>

                <!-- 游戏信息 -->
                <div class="relative p-4 w-full pt-16">
                    <!-- tags -->

                    <div class="flex items-center gap-3 mb-4"><span
                            class="px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold uppercase rounded flex items-center gap-1.5">
                            <div class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>Official Server
                        </span><span
                            class="px-2 py-1 bg-secondary/50 backdrop-blur-md border border-border/50 text-muted-foreground text-[10px] font-bold uppercase rounded">Mesh
                            Fabric 1.20.1</span></div>
                    <h1 class="text-3xl font-bold mb-2">Mesh Official: Survival</h1>
                    <p class="text-sm text-muted-foreground font-medium max-w-lg mb-8 line-clamp-2">
                        Multiplayer survival experience on our high-performance mesh network with optimized latency.
                    </p>
                    <div class="flex items-center gap-4">
                        <!-- 主要按钮 -->
                        <button
                            class="group h-14 px-8 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 active:scale-[0.98] hover:scale-[1.02] relative overflow-hidden">
                            <!-- 发光效果 -->
                            <span
                                class="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                            <!-- 图标和文字 -->
                            <span class="icon-[lucide--play] w-5 h-5 relative z-10"></span>
                            <span class="relative z-10">启动游戏 (LAUNCH)</span>
                        </button>

                        <!-- 次要按钮 -->
                        <button
                            class="group h-14 w-14 flex items-center justify-center rounded-lg border border-border/60 bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 backdrop-blur-md text-foreground transition-all duration-300 hover:shadow-lg hover:border-blue-400/30 active:scale-95">
                            <span
                                class="icon-[lucide--box] w-6 h-6 group-hover:scale-110 transition-transform duration-300"></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- 卡片列表 -->
            <div class="pt-6 flex gap-6 overflow-x-auto pb-6 scrollbar-hide w-full h-42">
                <!-- 卡片 -->
                <button
                    class="relative shrink-0 w-64 min-h-full rounded-lg shadow-lg overflow-hidden transition-all bg-white/10 backdrop-blur-md">
                    <!-- 背景图片 -->
                    <img src="https://www.loliapi.com/acg/" class="absolute inset-0 w-full h-full object-cover -z-1" />
                    <!-- 遮罩 -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <!-- 卡片内容 -->
                    <div class="relative p-4 h-full w-full flex flex-col justify-end">
                        <h2 class="text-lg font-bold mb-1 text-white">Card Title</h2>
                        <p class="text-sm text-white/90">Card description goes here.</p>
                    </div>
                </button>

            </div>
        </div>
    </div>
</template>

<script setup>
const backgroundImage = 'https://www.loliapi.com/acg/'
</script>

<style scoped>
/* 自定义按钮悬停效果 */
button {
    transform-origin: center;
}

/* 主要按钮的额外效果 */
button:first-child::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent);
    border-radius: inherit;
    z-index: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
}

button:first-child:hover::before {
    opacity: 1;
}
</style>