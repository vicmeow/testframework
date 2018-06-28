<template>
  <li :class="{
        active: item.title === $route.params.project || item.title === $route.params.run || item.title === $route.params.tc || item.title === $route.params.step,
        success: item.status === 'OK' || item.status === 0 || item.status === 'info',
        error: item.status === 'error' || item.status === 1,
        current: item.status === 'current',
        sidebar: type === 'sidebar',
        table: type === 'table',
        run: type === 'run',
        testcase: type === 'testcase',
        step: type === 'step'
      }"
      class="list-item">

    <slot name="routerlink"/>
    <span v-if="type === 'run' && item.date" class="data-item">{{item.date}}</span>
    <span v-if="type === 'run' && item.duration" class="data-item">{{item.duration}}</span>

    <span v-if="type === 'testcase'" class="data-item">
      {{new Date(item.time).toLocaleDateString('de-DE')}} {{new Date(item.time).toLocaleTimeString('de-DE')}}
    </span>

    <span v-if="type === 'step'" class="data-item">
      {{new Date(item.time).toLocaleDateString('de-DE')}} {{new Date(item.time).toLocaleTimeString('de-DE')}}
    </span>

    <div v-for="(value, key) in item.data" v-if="type === 'sidebar'" :key="key" class="sidebar-dataset">
      <span class="data-title">{{key}}</span>
      <span class="data-item">{{value}}</span>
    </div>

  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: function () {
        return {
          name: 'Unavailable'
        }
      }
    },
    type: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        // Value must match one of these strings
        return ['sidebar', 'table', 'project', 'run', 'testcase', 'step'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="sass" scoped>

  =border($width, $color)
    border-left: $width solid $color

  @import 'src/assets/styles/style-variables.sass'

  /* GENERAL STYLING OF LIST ITEM */

  .list-item
    display: flex
    background: $white
    border-radius: 3px
    margin-bottom: .5rem
    box-sizing: border-box
    transition: transform .3s ease-in-out
    box-shadow: 0 .1rem .4rem $bg-darker
    justify-content: space-between
    flex-wrap: no-wrap
    order: 2

    *
      margin: .1rem 0

    &:hover
      transform: translateX(-.2rem)

  .item-title
    font-size: 1rem
    font-weight: normal
    cursor: pointer
    word-break: break-all

  .data-title::first-letter
    text-transform: capitalize

  // List items in sidebar

  .sidebar-dataset
    display: contents
    display: flex
    justify-content: space-between

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

  // List item styling based on type

  .table, .run, .testcase, .step
    flex-direction: row
    justify-content: flex-start
    align-content: center
    align-items: baseline
    min-height: 35px
    padding: .2rem 1rem
    align-items: center
    &.success
      +border(.25rem, $green)
    &.error
      +border(.25rem, $red)
    &.current
      +border(.25rem, $blue)

    .item-title
      padding-right: 1rem

    .data-item
      word-break: break-word

  // Active item styling

  .list-item.active
    order: 1
    transform: translateX(0rem)
    box-shadow: 0 .5rem 1rem $bg-darker
    &:hover
      transform: 0
    &::after
      position: absolute
      display: block
      content: ''
      top: 0
      right: -1.5rem
      height: 100%
      width: 1.5rem
      background: $white

  // Flex-basis for items in lists

  .list-item.testcase, .list-item.step
    @for $i from 1 through 2
      a:nth-child(1)
        flex-basis: 80%
      span:nth-child(2)
        flex-basis: 20%

  .list-item.run
    @for $i from 1 through 3
      a:nth-child(1)
        flex-basis: 60%
      span:nth-child(2), .label:nth-child(3)
        flex-basis: 20%

</style>
