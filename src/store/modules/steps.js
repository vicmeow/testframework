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
        title: step.meta.step.name,
        id: step._key,
        status: step.meta.logLevel,
        time: step.meta.time,
        date: new Date(step.meta.time).toLocaleDateString('de-DE'),
        description: 'This will be the description of this test step.',
        log: step,
        parentid: step.meta.tc.id,
        data: {
          type: step.meta.step.type
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
