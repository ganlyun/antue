import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import '../components/style/index.js'
import './index.less'

const app = createApp(App)
app.use(router)
app.mount('#app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
