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
  // Async call to API
  async FETCH_DATA ({commit}) {
    try {
      const response = await axios.get(
        'http://localhost:3000/testcases/3f2376db-1e68-4a16-a280-f346317ed46f'
      )
      // Send data to mutations to write/give(mutate) data to state
      console.log(response.data)
      commit('RECEIVE_DATA', {data: response.data})
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  RECEIVE_DATA (state, {data}) {
    // Loop through objects in response data
    for (let testcase of data) {
      // Push objects with custom keys to state
      state.testcases.push({
        time: testcase.meta.time,
        title: testcase.meta.tc.name,
        id: testcase._id,
        status: testcase.meta.tc.status
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
