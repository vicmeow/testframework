<template>
  <nav class="nav">
    <router-link to="/" class="nav-link" :class="{active: $route.name === 'landing'}">Home</router-link>
    <router-link to="/projects" class="nav-link" :class="{active: $route.path.includes('/projects')}">Projects</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="sass" scoped>

  @import 'src/assets/styles/style-variables.sass'

  .nav
    display: flex
    height: 100%
    margin-left: 1rem

  .nav-link
    align-self: flex-end
    font-size: 1rem
    margin-right: 1rem
    border-bottom: 2px solid $bg-darker
    padding: 0 .5rem
    padding-bottom: .5rem

  .active
    border-bottom: 2px solid $blue


</style>
