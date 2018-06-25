import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

// Main Routes
const LandingPage = () => import('@/views/0_LandingPage/0_LandingPage')
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
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
      props: true,
      redirect: {
        name: 'project',
        params: {
          projecttitle: store.getters['projects/projects'][0].title,
          item: store.getters['projects/projects'][0]
        }
      },
      children: [{
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
        },
        {
          path: ':projecttitle/:runtitle/:tctitle/:steptitle',
          name: 'step',
          component: Step,
          props: true
        }
      ]
    }
  ]
})