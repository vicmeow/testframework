import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'
/* ----------  Modules  ---------- */
// import projects from './modules/projects'

Vue.use(Vuex) // Tell our vue app to use Vuex

/* ----------  Global Scope  ---------- */
const state = {
  activeList: [],
  activeItem: {}
}
const getters = {
  activeList () {
    return state.activeList
  },
  activeItem () {
    return state.activeItem
  }
}
const actions = {
  get_activeList ({commit}, list) {
    commit('RECEIVE_ACTIVELIST', list)
  },
  get_activeItem ({commit}, item) {
    commit('RECEIVE_ACTIVEITEM', item)
  }
}
const mutations = {
  RECEIVE_ACTIVELIST (state, {data}) {
    state.activeList = []
    state.activeList.push(data)
  },
  RECEIVE_ACTIVEItem (state, {data}) {
    state.activeItem = data
  }
}

/* ----------  Export the store so main.js can import it when we bootstrap the app  ---------- */
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    projects
  }
})
