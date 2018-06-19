const state = {
  projects: [
    {
      title: 'Project 1',
      type: 'project',
      status: 1,
      data: {
        'test cases': 45,
        runs: 2,
        tables: 0
      }
    },
    {
      title: 'Project 2',
      type: 'project',
      status: 0,
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
