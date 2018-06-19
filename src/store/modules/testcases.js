// Import axios so that we can use it in this module
import axios from 'axios'

const state = {
  testcases: []
}

const getters = {
  testcases () {
    return state.testcases
  }
}

const actions = {
  async FETCH_RUN_TCS ({commit}, runid) {
    try {
      const response = await axios.get(
        'http://localhost:3000/testcases/' + runid
      )
      console.log('http://localhost:3000/testcases/' + runid)
      // Send data to mutations to write/give(mutate) data to state
      commit('RECEIVE_RUN_TCS', {data: response.data})
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  RECEIVE_RUN_TCS (state, {data}) {
    // Empty current array to prevent duplicating
    state.testcases = []
    // Loop through objects in response data
    for (let testcase of data) {
      // Push objects with custom keys to state
      state.testcases.push({
        time: testcase.meta.time,
        title: testcase.meta.tc.name,
        id: testcase._key,
        parentid: testcase.meta.run.id,
        status: testcase.meta.logLevel,
        data: {
          'parent ID': testcase.meta.run.id
        }
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
