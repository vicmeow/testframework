import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects'
// import Tables from './views/Tables'
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
      name: 'projects',
      component: Projects,
      children: [
        {
          path: '/:title',
          name: 'project',
          props: true,
          component: Projects
        }
        // {
        // path: 'runs/:id',
        // props: true,
        // component: Runs
        // }
      ]
    }
  ]
})
