import Vue from 'vue'
import Vuex from 'vuex'
/* ----------  Modules  ---------- */
import loader from './modules/loader'
import projects from './modules/projects'
import runs from './modules/runs'
import testcases from './modules/testcases'
import steps from './modules/steps'

Vue.use(Vuex) // Tell our vue app to use Vuex

/* ----------  Global Scope  ---------- */
const state = {
}
const getters = {
}
const actions = {
}
const mutations = {
}

/* ----------  Export the store so main.js can import it when we bootstrap the app  ---------- */
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    loader,
    projects,
    runs,
    testcases,
    steps
  }
})
