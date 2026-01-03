// stores/theme.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type ThemeMode = 'system' | 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
    // 'system' 跟随系统 | 'light' 浅色 | 'dark' 深色
    const mode = ref<ThemeMode>('system')

    const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

    const isDark = computed(() => {
        if (mode.value === 'dark') return true
        if (mode.value === 'light') return false
        return prefersDark()
    })

    // 将当前 mode 应用到 document，并记录到 localStorage
    const applyTheme = () => {
        const html = document.documentElement
        if (isDark.value) html.classList.add('dark')
        else html.classList.remove('dark')
        // 始终保存当前选择（包括 'system'）以便下次启动能正确恢复
        try {
            localStorage.setItem('theme', mode.value)
        } catch (e) {
            /* ignore */
        }
    }

    // 依次循环模式：system -> light -> dark -> system
    const toggleTheme = () => {
        mode.value = mode.value === 'system' ? 'light' : mode.value === 'light' ? 'dark' : 'system'
        applyTheme()
    }

    // 初始化主题并监听系统主题变化（只有在 mode === 'system' 时会响应）
    const initTheme = () => {
        try {
            const saved = localStorage.getItem('theme') as ThemeMode | null
            if (saved === 'light' || saved === 'dark' || saved === 'system') mode.value = saved
            else mode.value = 'system'
        } catch (e) {
            mode.value = 'system'
        }

        applyTheme()

        // 监听系统主题变化
        const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
        if (!mq) return
        const handler = () => {
            if (mode.value === 'system') applyTheme()
        }
        if (mq.addEventListener) mq.addEventListener('change', handler)
        else if ((mq as any).addListener) (mq as any).addListener(handler)
    }

    return { mode, isDark, toggleTheme, initTheme, applyTheme }
})