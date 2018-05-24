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
  flex-basis: 100%
  background: $white
  display: flex
  justify-content: space-between
  padding: 1rem
  margin-bottom: 1rem

aside.sidebar
  flex: 1
  margin-right: 1rem

main.content
  flex: 3
  background: $white
  border-radius: .2rem
  padding: 1rem

.wrapper
  display: contents

@supports (display: grid)
  #app
    display: grid
    grid-template-columns: repeat(12, 1fr)
    grid-template-rows: 55px auto auto
    grid-template-areas: "hd hd hd hd hd hd hd hd hd hd hd hd " ". sb sb mn mn mn mn mn mn mn mn ." ". sb sb mn mn mn mn mn mn mn mn ."
    grid-gap: 1rem

  header.header
    grid-area: hd
    margin-bottom: 0

  aside.sidebar
    grid-area: sb
    margin-right: 0

  main.content
    grid-area: mn

</style>
