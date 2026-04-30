import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import '../components/style/index.js'
import './common/theme/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
