import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './common.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios' 

 
var app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
