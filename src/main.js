import { createApp } from 'vue'
import App from './App.vue'
import './common.css'
import router from './router' 


var app=createApp(App)
app.use(router)
app.mount('#app')
