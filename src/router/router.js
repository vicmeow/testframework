import Vue from 'vue'
import Router from 'vue-router'
import Item from '@/views/Item'
// import TheSidebar from './components/TheSidebar'
import store from '@/store/store'
// import Runs from './views/Runs'

Vue.use(Router)

/**
 * TODO:
 * Load last active or first project in list on initial render
 * Add dynamic routing for tables and runs by name or id
 */

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Projects'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Item,
      props: true,
      children: [
        {
          path: ':id',
          name: 'project',
          component: Item,
          props: true
        }
      ]
    }
  ]
})
