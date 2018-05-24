import Vue from 'vue'
import Vuex from 'vuex'

/* ----------  Modules  ---------- */
// import projects from './modules/projects'

Vue.use(Vuex) // Tell our vue app to use Vuex

/* ----------  Global Scope  ---------- */
const state = {
  projects: [{
    name: 'Project 1',
    type: 'project',
    status: 'error',
    data: {
      'test cases': 123,
      tables: 3,
      runs: 34
    },
    tables: [
      {
        name: 'Project 1 Table 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        name: 'Project 1 Table 2',
        data: {
          'test cases': 23
        },
        status: 'success'
      },
      {
        name: 'Project 1 Table 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ],
    runs: [
      {
        name: 'Project 1 Run 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        name: 'Project 1 Run 2',
        data: {
          'test cases': 23
        },
        status: 'current'
      },
      {
        name: 'Project 1 Run 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ]
  },
  {
    name: 'Project 2',
    type: 'project',
    status: 'success',
    data: {
      'test cases': 123,
      tables: 3,
      runs: 34
    },
    tables: [
      {
        name: 'Project 2 Table 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        name: 'Project 2 Table 2',
        data: {
          'test cases': 23
        },
        status: 'success'
      },
      {
        name: 'Project 2 Table 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ],
    runs: [
      {
        name: 'Project 2 Run 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        name: 'Project 2 Run 2',
        data: {
          'test cases': 23
        },
        status: 'current'
      },
      {
        name: 'Project 2 Run 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ]
  },
  {
    name: 'Project 3',
    type: 'project',
    status: 'success',
    data: {
      'test cases': 123,
      tables: 3,
      runs: 34
    },
    tables: [
      {
        name: 'Project 3 Table 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        name: 'Project 3 Table 2',
        data: {
          'test cases': 23
        },
        status: 'success'
      },
      {
        name: 'Project 3 Table 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ],
    runs: [
      {
        name: 'Project 3 Run 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        name: 'Project 3 Run 2',
        data: {
          'test cases': 23
        },
        status: 'current'
      },
      {
        name: 'Project 3 Run 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ]
  }
  ]
}
const getters = {
}
const actions = {
}
const mutations = {
}

/* ----------  Export the store so main.js can import it when we bootstrap the app  ---------- */
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
  }
})
