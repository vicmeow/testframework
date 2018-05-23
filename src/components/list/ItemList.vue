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

  li.list-item
    background: $white
    border-radius: 3px
    margin-bottom: .5rem
    box-sizing: border-box
    padding: .5rem 1rem
    transition: transform .3s ease-in-out
    box-shadow: 0 -2px 2px $bg
  
    *
      margin: .1rem 0
    
    &:hover
      transform: translateX(-.5rem)
  
  .dataset
    display: flex
    justify-content: space-between

  .table, .run
    display: flex
    flex-direction: row
    justify-content: space-between
    min-height: 35px

  .item-title
    font-size: 1rem
    font-weight: bold
  
  h3
    font-weight: normal
    font-size: 1rem
</style>
