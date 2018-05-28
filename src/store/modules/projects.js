const state = {
  projects: [{
    title: 'Project 1',
    type: 'project',
    status: 'error',
    data: {
      'test cases': 123,
      tables: 3,
      runs: 34
    },
    tables: [
      {
        title: 'Project 1 Table 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        title: 'Project 1 Table 2',
        data: {
          'test cases': 23
        },
        status: 'success'
      },
      {
        title: 'Project 1 Table 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ],
    runs: [
      {
        title: 'Project 1 Run 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        title: 'Project 1 Run 2',
        data: {
          'test cases': 23
        },
        status: 'current'
      },
      {
        title: 'Project 1 Run 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ]
  },
  {
    title: 'Project 2',
    type: 'project',
    status: 'success',
    data: {
      'test cases': 123,
      tables: 3,
      runs: 34
    },
    tables: [
      {
        title: 'Project 2 Table 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        title: 'Project 2 Table 2',
        data: {
          'test cases': 23
        },
        status: 'success'
      },
      {
        title: 'Project 2 Table 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ],
    runs: [
      {
        title: 'Project 2 Run 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        title: 'Project 2 Run 2',
        data: {
          'test cases': 23
        },
        status: 'current'
      },
      {
        title: 'Project 2 Run 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ]
  },
  {
    title: 'Project 3',
    type: 'project',
    status: 'success',
    data: {
      'test cases': 123,
      tables: 3,
      runs: 34
    },
    tables: [
      {
        title: 'Project 3 Table 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        title: 'Project 3 Table 2',
        data: {
          'test cases': 23
        },
        status: 'success'
      },
      {
        title: 'Project 3 Table 3',
        data: {
          'test cases': 23
        },
        status: 'success'
      }
    ],
    runs: [
      {
        title: 'Project 3 Run 1',
        data: {
          'test cases': 23
        },
        status: 'error'
      },
      {
        title: 'Project 3 Run 2',
        data: {
          'test cases': 23
        },
        status: 'current'
      },
      {
        title: 'Project 3 Run 3',
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
  projects () {
    return state.projects
  }
}
const actions = {
}

const mutations = {

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
