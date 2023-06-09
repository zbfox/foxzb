import { createApp } from 'vue'
import './style.css'


import App from './App.vue'
import store from '@/store/index.js'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
app.use(store)
app.use(router)
app.mount("#app")
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
