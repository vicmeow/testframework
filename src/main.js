import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft'

fontawesome.library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
