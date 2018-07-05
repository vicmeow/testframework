import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/store'
import Meta from 'vue-meta'

// Main Routes
const HomePage = () => import('@/views/0_HomePage/0_HomePage')
const ProjectsPage = () => import('@/views/1_ProjectsPage/0_ProjectsPage')

// Child Routes (Projects)
const Project = () => import('@/views/1_ProjectsPage/1_ProjectView')
const Run = () => import('@/views/1_ProjectsPage/2_RunView')
const Testcase = () => import('@/views/1_ProjectsPage/3_TestcaseView')
const Step = () => import('@/views/1_ProjectsPage/4_StepView')

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage,
    props: true,
    redirect: {
      name: 'project',
      params: {
        id: Store.getters['projects/projects'][0].id
      }
    },
    children: [{
      path: ':id',
      name: 'project',
      component: Project,
      props: true
    },
    {
      path: ':id',
      name: 'run',
      component: Run,
      props: true
    },
    {
      path: ':id',
      name: 'testcase',
      component: Testcase,
      props: true
    },
    {
      path: ':id',
      name: 'step',
      component: Step,
      props: true
    }
    ]
  }
  ]
})
