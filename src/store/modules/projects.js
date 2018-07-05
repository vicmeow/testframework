const state = {
  projects: [{
    title: 'Project 1',
    type: 'project',
    id: 1234,
    status: 1,
    date: 'XX.XX.XXXX',
    description: 'This will be the description of this project.',
    data: {
      'test cases': 45,
      runs: 2,
      tables: 0
    }
  },
  {
    title: 'Project 2',
    type: 'project',
    id: 6789,
    status: 0,
    date: 'XX.XX.XXXX',
    description: 'This will be the description of this project.',
    data: {
      'test cases': 45,
      runs: 2,
      tables: 0
    }
  }
  ]
}

const getters = {
  projects () {
    return state.projects
  }
}
const actions = {}

const mutations = {

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
