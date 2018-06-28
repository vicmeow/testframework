import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store/store'

// Main Routes
const HomePage = () => import('@/views/0_HomePage/0_HomePage')
const ProjectsPage = () => import('@/views/1_ProjectsPage/0_ProjectsPage')

// Child Routes (Projects)
const Project = () => import('@/views/1_ProjectsPage/1_ProjectView')
const Run = () => import('@/views/1_ProjectsPage/2_RunView')
const Testcase = () => import('@/views/1_ProjectsPage/3_TestcaseView')
const Step = () => import('@/views/1_ProjectsPage/4_StepView')

Vue.use(Router)

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
        project: Store.getters['projects/projects'][0].id
      }
    },
    children: [{
      path: ':project',
      name: 'project',
      component: Project,
      props: true
    },
    {
      path: ':project/:run',
      name: 'run',
      component: Run,
      props: true
    },
    {
      path: ':project/:run/:tc',
      name: 'testcase',
      component: Testcase,
      props: true
    },
    {
      path: ':project/:run/:tc/:step',
      name: 'step',
      component: Step,
      props: true
    }
    ]
  }
  ]
})
