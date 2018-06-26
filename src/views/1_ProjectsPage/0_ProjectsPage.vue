<template>
  <div class="projects-route">
    <div v-if="loading" class="loader">
      <div class="loader-bar"/>
    </div>
    <the-sidebar :back="{name: 'project'}" :placerholder="'Filter items...'"/>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>

import TheSidebar from '@/components/TheSidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'Projects',
  components: {
    TheSidebar
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading'
    })
  }
  /* created() {
    // When API is ready, this will fetch projects from the API.
    this.fetchProjects()
  },
  methods: {
    fetchProjects () {
      this.$store.commit('loader/setLoading', true)
      this.$store.dispatch('projects/FETCH_PROJECTS').then(() => {
      this.$store.commit('loader/setLoading', false)
    })
    }
  } */
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .loader
    flex-basis: 100%
    height: .2rem
    width: 100%

    .loader-bar
      width: 100%
      height: 100%
      background: $blue

  @keyframes loading
    0%
      width: 0%
    100%
      width: 100%

  @supports (display: grid)
    .projects-route
      width: 100%
      display: grid
      grid-template-columns: repeat(12, 1fr)
      grid-template-rows: repeat(3, auto)
      grid-template-areas: "hd hd hd hd hd hd hd hd hd hd hd hd" ". sb sb mn mn mn mn mn mn mn mn ."
      grid-gap: 1rem
      @include tablet
        padding: 0 1rem
        grid-template-columns: repeat(8, 1fr)
        grid-template-areas: "hd hd hd hd hd hd hd hd " "sb sb mn mn mn mn mn mn" "sb sb mn mn mn mn mn mn"

    header.header
      grid-area: hd
      margin-bottom: 0

    aside.sidebar
      grid-area: sb
      margin-right: 0

    main.content
      grid-area: mn

    .loader
      grid-column: span 12

</style>
