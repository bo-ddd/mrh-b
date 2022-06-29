import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './common.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
<<<<<<< HEAD
import axios from 'axios'
import VueAxios from 'vue-axios' 

 
var app = createApp(App)
app.use(VueAxios, axios)
=======
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



var app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
>>>>>>> 2e791a1a3dc6d4cf61fb0dd14c0db31ec4f3d31f
app.use(router)
app.use(ElementPlus)
app.mount('#app')
