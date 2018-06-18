import Vue from 'vue'
import Vuex from 'vuex'
/* ----------  Modules  ---------- */
import projects from './modules/projects'
import runs from './modules/runs'
import testcases from './modules/testcases'
import steps from './modules/steps'

Vue.use(Vuex) // Tell our vue app to use Vuex

/* ----------  Global Scope  ---------- */
const state = {
  sidebarList: [],
  activeItem: {}
}
const getters = {
  sidebarList () {
    return state.sidebarList
  },
  activeItem () {
    return state.activeItem
  }
}
const actions = {
  get_sidebarList ({commit}, list) {
    commit('set_sidebarList', list)
  },
  get_activeItem ({commit}, item) {
    commit('RECEIVE_ACTIVEITEM', item)
  }
}
const mutations = {
  set_sidebarList (state, {data}) {
    state.sidebarList = []
    state.sidebarList.push(data)
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
    projects,
    runs,
    testcases,
    steps
  }
})
