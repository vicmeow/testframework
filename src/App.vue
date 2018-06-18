<template>
  <div id="app">
    <the-header/>
    <router-view></router-view>
  </div>
</template>

/**
 * TODO:
 * - Add route transitions
 * - Add a footer with neccessary information
 */

<script>
import TheHeader from '@/components/header/TheHeader'
// Enables us to use ...mapActions in our component
import {mapActions} from 'vuex'
export default {
  components: {
    TheHeader
  },
  methods: {
    ...mapActions({
      fetchData: 'testcases/FETCH_DATA' // maps 'this.fetchData()' to 'this.$store.dispatch['api/FETCH_DATA'
    })
  },
  created () {
    this.fetchData()
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

ul
  list-style-type: none
  margin: 0
  padding: 0

button
  outline: 0
  background: 0
  border: 0

input, input:focus
  padding: 0
  margin: 0
  font-family: $font
  font-size: 1rem
  color: $black
  border: 0
  border-radius: .2rem
  outline: 0

a, a:hover, a:visited, a:focus
  color: $black
  text-decoration: none

h1
  font-size: 1.8rem

/* Flexbox fallback */
#app
  display: flex
  flex-wrap: wrap
  margin: auto

.wrapper
  display: contents

header.header
  position: sticky
  top: 0
  flex-basis: 100%
  background: $white
  display: flex
  justify-content: flex-start
  align-items: center
  z-index: 99

aside.sidebar
  flex: 1
  margin-right: 1rem
  position: sticky
  top: calc(55px + 1rem)
  height: 100vh

main.content
  flex: 3
  background: $white
  border-radius: .2rem
  padding: 1rem

@supports (display: grid)
  #app
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

/* TRANSITIONS */

.page-enter-active, .page-leave-active
  transition: all .3s

.page-enter, .page-leave-to
  transform: translateY(5rem)

</style>
