import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './common.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios' 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

var app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(VueAxios, axios)
app.use(ElementPlus)

app.mount('#app')
