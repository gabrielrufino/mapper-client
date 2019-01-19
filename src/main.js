import Vue from 'vue'
import VueRouter from 'vue-router'

import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
}).$mount('#app')
