const state = {
  runs: [
    {
      title: 'Run 1',
      suite: 'RI-Kern Suite',
      status: 'FAILED',
      id: '3f2376db-1e68-4a16-a280-f346317ed46f',
      data: {
        'test cases': 45,
        success: 30,
        error: 15
      }
    },
    {
      title: 'Run 2',
      suite: 'RI-Kern Suite',
      status: 'OK',
      id: '3f2376db-1e68-4a16-a280-f346317ed46f',
      data: {
        'test cases': 45,
        success: 45,
        error: 0
      }
    }
  ]
}

const getters = {
  runs () {
    return state.runs
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
