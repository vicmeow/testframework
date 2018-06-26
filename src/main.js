import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

// vuex router synx
import { sync } from 'vuex-router-sync'

// FA Icons
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft'
sync(store, router, { moduleName: 'RouteModule' })

fontawesome.library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
