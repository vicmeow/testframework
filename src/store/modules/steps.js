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
  async FETCH_TC_STEPS ({commit}, tcid) {
    try {
      const response = await axios.get(
        'http://localhost:3000/teststeps/' + tcid
      )
      console.log('http://localhost:3000/teststeps/' + tcid)
      // Send data to mutations to write/give(mutate) data to state
      commit('RECEIVE_TC_STEPS', {data: response.data})
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  RECEIVE_TC_STEPS (state, {data}) {
    // Empty current array to prevent duplicating
    state.steps = []
    // Loop through objects in response data
    for (let step of data) {
      // Push objects with custom keys to state
      state.steps.push({
        title: 'belongs to: ' + step.meta.tc.name + ' | ' + step.meta.step.name,
        status: 'OK',
        time: step.meta.time,
        log: step,
        parentid: step.meta.tc.id,
        data: {
          type: step.meta.step.type,
          parent: step.meta.tc.name,
          'parent ID': step.meta.tc.id
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
