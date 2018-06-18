// Import axios so that we can use it in this module
import axios from 'axios'

const state = {
  steps: []
}

const getters = {
  steps () {
    return state.steps
  }
}

const actions = {
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
