import Vue from 'vue'
import Router from 'vue-router'
import Run from '@/views/Run'
import LandingPage from '@/views/LandingPage'
// import TheSidebar from './components/TheSidebar'
import store from '@/store/store'
import Projects from '@/views/Projects'
import Project from '@/views/Project'
import Testcase from '@/views/Testcase'

Vue.use(Router)

/**
 * TODO:
 * Load last active or first project in list on initial render
 * Add dynamic routing for tables and runs by name or id
 */

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
      redirect: {
        name: 'projects'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      props: true,
      redirect: {
        name: 'project',
        params: {
          projecttitle: store.getters['projects/projects'][0].title,
          item: store.getters['projects/projects'][0]
        }
      },
      children: [
        {
          path: ':projecttitle',
          name: 'project',
          component: Project,
          props: true
        },
        {
          path: ':projecttitle/:runtitle',
          name: 'run',
          component: Run,
          props: true
        },
        {
          path: ':projecttitle/:runtitle/:tctitle',
          name: 'testcase',
          component: Testcase,
          props: true
        }
      ]
    }
  ]
})
