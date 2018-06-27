import Vue from 'vue'
import Vuex from 'vuex'
/* ----------  Modules  ---------- */
import loader from './modules/loader'
import projects from './modules/projects'
import runs from './modules/runs'
import testcases from './modules/testcases'
import steps from './modules/steps'
// vuex persisted state
import VuexPersist from 'vuex-persist'

Vue.use(Vuex) // Tell our vue app to use Vuex

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.sessionStorage, // or window.sessionStorage or localForage
  reducer: state => ({
    item: state.item,
    sidebarItems: state.sidebarItems
  })
})

/* ----------  Global Scope  ---------- */
const state = {
  item: {},
  sidebarItems: {}
}
const getters = {
  item () {
    return state.item
  },
  sidebarItems () {
    return state.sidebarItems
  }
}

const actions = {
  set_item ({commit}, item) {
    commit('RECIEVE_ITEM', item)
  }
}

const mutations = {
  RECIEVE_ITEM (state, item) {
    state.item = item
  },
  RECIEVE_SIDEBAR_ITEMS (state, items) {
    state.sidebarItems = []
    state.sidebarItems = items
  }
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
  },
  plugins: [vuexLocalStorage.plugin]
})
