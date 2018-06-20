import axios from 'axios'

const state = {
  runs: []
}

const getters = {
  runs () {
    return state.runs
  }
}
const actions = {
  async FETCH_PROJECT_RUNS ({
    commit
  }) {
    try {
      const response = await axios.get(
        'http://localhost:3000/runs/'
      )
      // Send data to mutations to write/give(mutate) data to state
      commit('RECEIVE_PROJECT_RUNS', {
        data: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const mutations = {
  RECEIVE_PROJECT_RUNS (state, {
    data
  }) {
    // Empty current array to prevent duplicating
    state.runs = []
    // Loop through objects in response data
    for (let run of data) {
      // Push objects with custom keys to state
      state.runs.push({
        title: run.runId,
        status: run.run.meta.logLevel,
        duration: run.duration_in_min,
        id: run.runId,
        data: {}
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
