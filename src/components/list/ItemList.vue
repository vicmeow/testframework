<template>
  <ul class="list">
    <slot name="list-title"></slot>
    <slot name="labels"></slot>
    <slot name="list-item"></slot>
  </ul>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  ul.list
    list-style-type: none
    margin: 0
    padding: 0

</style>
