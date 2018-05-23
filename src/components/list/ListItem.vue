<template>
  <li class="list-item">
    <!-- Data sets -->
    <h2 class="item-title">{{item.name}}</h2>
    <div class="dataset" v-for="(value, key) in item.data" :key="key">
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
      required: true
    }
    /* title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    tables: {
      type: Number,
      required: false
    },
    runs: {
      type: Number,
      required: false
    },
    steps: {
      type: String,
      required: false
    } */
  }
}
</script>

<style lang="sass" scoped>

  =border($width, $color)
    border-left: $width solid $color

  @import 'src/assets/styles/style-variables.sass'

  li.list-item
    background: $white
    border-radius: 3px
    margin-bottom: .5rem
    box-sizing: border-box
    transition: transform .3s ease-in-out
    box-shadow: 0 2px 2px 0 $bg, 0 -1px 2px 0 $bg
    *
      margin: .1rem 0
    &:hover
      transform: translateX(-.5rem)

  .dataset
    display: flex
    justify-content: space-between
    &::first-letter
      text-transform: capitalize

  .project
    padding: .5rem 1rem
    &.success
      +border(.4rem, $green)
    &.error
      +border(.4rem, $red)

  .table, .run
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: baseline
    min-height: 35px
    padding: .2rem 1rem
    &.success
      +border(.25rem, $green)
    &.error
      +border(.25rem, $red)
    &.current
      +border(.25rem, $blue)

  .item-title
    font-size: 1rem
    font-weight: bold

  h3
    font-weight: normal
    font-size: 1rem

</style>
