import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
