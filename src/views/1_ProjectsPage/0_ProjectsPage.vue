<template>
  <div class="projects-route">
    <div v-if="loading" class="loader">
      <div class="spinner"/>
    </div>
    <the-sidebar :placerholder="'Filter items...'"/>
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
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  // Temporary loader

  .loader
    position: absolute
    right: 0

  .spinner
    width: 1.5rem
    height: 1.5rem
    border-radius: 50%
    border: 3px solid $blue
    border-top: 3px solid transparent
    margin: .5rem 1rem
    animation: spin 1s linear infinite

  @keyframes spin
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)

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

</style>
