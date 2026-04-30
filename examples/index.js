import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import '../components/style/index.js'
import './index.less'

const app = createApp(App)
app.use(router)
app.mount('#app')
