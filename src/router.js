import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects'
import Home from './views/Home'
import TheSidebar from './components/TheSidebar'
import store from './store/store'
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
      name: 'home',
      component: Home,
      redirect: {name: 'project', params: {title: store.state.projects[0].name, item: store.state.projects[0], items: store.state.projects, labels: ['Projects', '+']}}
    },
    {
      path: '/:title',
      name: 'project',
      props: true,
      component: Home,
      children: [
        {
          path: ':table',
          name: 'table',
          component: Home,
          props: true
        },
        {
          path: ':run',
          name: 'run',
          component: Home,
          props: true
        }
      ]
    },
    {
      path: 'test',
      name: 'test',
      component: Projects
    }
  ]
})
