// Import axios so that we can use it in this module
import axios from 'axios'

const state = {
  message: 'this message comes from our api module. Data from the API call will be put somewhere here.',
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
      // Insert proper url
      const response = await axios.get(
        'URL'
      )
      // Send data to mutations to write/give(mutate) data to state
      commit('RECEIVE_DATA', {data: response.data})
    } catch (error) {
      // Without link it's logging 'Request failed with status code 404'
      console.log(error)
    }
  }
}

const mutations = {
  RECEIVE_DATA (state, {data}) {
    // Loop through objects in response
    for (let tc of data) {
      // Push objects with custom keys to state
      state.testcases.push({
        // Examples
        exampleKey: tc.exampleData
      })
    }
  }
}

// Go to store.js to see what's next

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
