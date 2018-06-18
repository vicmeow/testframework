// Import axios so that we can use it in this module
import axios from 'axios'

const state = {
  testcases: [],
  steps: []
}

const getters = {
  testcases () {
    return state.testcases
  },
  steps () {
    return state.steps
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
      commit('RECEIVE_DATA', {data: response.data})
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_STEPS ({commit}, id) {
    try {
      const response = await axios.get(
        'http://localhost:3000/teststeps/' + id
      )
      // Send data to mutations to write/give(mutate) data to state
      commit('RECEIVE_STEPS', {data: response.data})
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
        status: 'OK',
        data: {
          data1: 'data1',
          data2: 'data2',
          data3: 'data3'
        }
      })
    }
  },
  RECEIVE_STEPS (state, {data}) {
    // Loop through objects in response data
    for (let step of data) {
      // Push objects with custom keys to state
      state.steps.push({
        title: step.meta.step.name,
        status: 'OK',
        time: step.meta.time,
        log: step,
        data: {
          data1: 'data1',
          data2: 'data2',
          data3: 'data3'
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
