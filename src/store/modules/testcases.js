import testcases from '@/assets/run_testcases.json'

const state = {
  testcases: []
}

const getters = {
  testcases () {
    for (let item of testcases) {
      state.testcases.push(item.meta.tc)
    }
    return state.testcases.sort((a, b) => {
      return b.time - a.time
    })
  }
}

const actions = {}

const mutations = {}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
