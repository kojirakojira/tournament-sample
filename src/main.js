import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents, {
  namespace: 'touch-events'
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
