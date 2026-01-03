import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./assets/styles/main.css";
import router from './router'
import { useThemeStore } from './stores/theme'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia).use(router)

// 立即初始化主题，确保在挂载前应用正确的 dark 类
const themeStore = useThemeStore()
themeStore.initTheme()

app.mount("#app");