<template>
  <div id="app">
    <the-header/>
    <transition name="page" mode="out-in">
      <router-view :key="$route.path"/>
    </transition>
  </div>
</template>

/**
 * TODO:
 * - Add route transitions
 * - Add a footer with neccessary information
 */

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

header.header
  position: sticky
  top: 0
  flex-basis: 100%
  background: $white
  display: flex
  justify-content: flex-start
  align-items: center
  z-index: 99

/* TRANSITIONS */

.page-enter-active, .page-leave-active
  transition: all .3s

.page-enter, .page-leave-to
  transform: translateY(5rem)

</style>
