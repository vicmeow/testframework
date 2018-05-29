<template>
  <li class="list-item"
      :class="{
        success: item.status === 'OK',
        error: item.status === 'FAILED',
        current: item.status === 'current',
        sidebar: type === 'sidebar',
        table: type === 'table',
        run: type === 'run',
        testcase: type === 'testcase'
    }">

    <slot name="routerlink"></slot>

    <div class="sidebar-dataset" v-for="(value, key) in item.data" :key="key" v-if="type === 'sidebar'">
      <span class="data-title">{{key}}</span>
      <span>{{value}}</span>
    </div>

  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false
    },
    type: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>

  =border($width, $color)
    border-left: $width solid $color

  @import 'src/assets/styles/style-variables.sass'

  .list-item
    display: flex
    background: $white
    border-radius: 3px
    margin-bottom: .5rem
    box-sizing: border-box
    transition: transform .3s ease-in-out
    box-shadow: 0 .1rem .4rem $bg-darker
    justify-content: space-between
    flex-wrap: wrap

    *
      margin: .1rem 0
    &:hover
      transform: translateX(-.5rem)

  .item-title
    font-size: 1rem
    font-weight: normal
    cursor: pointer

  .sidebar-dataset
    display: contents
    display: flex
    justify-content: space-between

  .data-title::first-letter
    text-transform: capitalize

  .sidebar
    flex-direction: column
    padding: .5rem 1rem
    &.success
      +border(.4rem, $green)
    &.error
      +border(.4rem, $red)

    .item-title
      font-weight: bold
      flex-basis: 100%

  .table, .run, .testcase
    display: flex
    flex-direction: row
    justify-content: space-between
    align-content: center
    align-items: baseline
    min-height: 35px
    padding: .2rem 1rem
    &.success
      +border(.25rem, $green)
    &.error
      +border(.25rem, $red)
    &.current
      +border(.25rem, $blue)

  h3
    font-weight: normal
    font-size: 1rem

  .router-link-exact-active
    font-weight: bold

  .active
    transform: translateX(-.5rem)
    box-shadow: 0 .5rem 1rem $bg-darker

  .testcase-data
    display: contents

</style>
