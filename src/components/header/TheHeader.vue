<template>
  <header class="header">
    <div class="logo">xhub.io</div>
    <the-nav/>
  </header>
</template>

<script>
import TheNav from '@/components/header/TheNav'
export default {
  name: 'Header',
  components: {
    TheNav
  }
}
</script>

<style lang="sass" scoped>

  @import 'src/assets/styles/style-variables.sass'

  .header
    display: flex
    min-height: 55px
    padding-top: 1rem

  .logo
    align-self: flex-start
    font-family: $heading
    font-weight: bold
    color: $blue
    font-size: 2rem
    margin: 0 1rem

</style>

