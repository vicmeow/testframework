import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
