<template>
  <div class="projects-route">
    <the-sidebar :back="{name: 'project'}" :placerholder="'Filter items...'"/>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>

import TheSidebar from '@/components/TheSidebar'

export default {
  name: 'Projects',
  components: {
    TheSidebar
  }
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  @supports (display: grid)
    .projects-route
      width: 100%
      display: grid
      grid-template-columns: repeat(12, 1fr)
      grid-template-rows: repeat(3, auto)
      grid-template-areas: "hd hd hd hd hd hd hd hd hd hd hd hd " ". sb sb mn mn mn mn mn mn mn mn ." ". sb sb mn mn mn mn mn mn mn mn ."
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
