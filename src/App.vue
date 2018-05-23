<template>
  <div id="app">
    <the-header/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="sass">

@import 'src/assets/styles/style-variables.sass'

body, html
  height: 100%
  font-family: $font
  font-size: 16px
  color: $black
  background: $bg

*
  box-sizing: border-box
  padding: 0
  margin: 0

/* Flexbox fallback */
#app
  display: flex
  flex-wrap: wrap

header.header
  flex-basis: 100%
  background: $white
  display: flex
  justify-content: space-between
  padding: 1rem

aside.sidebar
  flex: 1

main.main-content
  flex: 3
  background: $white
  border-radius: 3px
  padding: 1rem

@supports (display: grid)
  #app
    display: grid
    grid-template-columns: repeat(12, 1fr)
    grid-template-rows: 55px auto
    grid-template-areas: "hd hd hd hd hd hd hd hd hd hd hd hd " ". sb sb mn mn mn mn mn mn mn mn ."
    grid-gap: 1rem

  header.header
    grid-area: hd

  aside.sidebar
    grid-area: sb

  main.main-content
    grid-area: mn

</style>
