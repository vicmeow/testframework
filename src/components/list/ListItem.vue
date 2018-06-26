<template>
  <li :class="{
        active: item.title === $route.params.projecttitle || item.title === $route.params.runtitle || item.title === $route.params.tctitle || item.title === $route.params.steptitle,
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
    <span v-if="type === 'run' && item.duration" class="data-item">
      {{item.duration}}
    </span>

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
  filters: {
    truncate (value, length) {
      return value.substring(0, length) + '...'
    }
  },
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
        return ['sidebar', 'table', 'run'].indexOf(value) !== -1
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

    *
      margin: .1rem 0

    &:hover
      transform: translateX(-.5rem)

  .item-title
    font-size: 1rem
    font-weight: normal
    cursor: pointer
    word-break: break-all

  .data-title::first-letter
    text-transform: capitalize

  /* STYLING OF LIST ITEMS IN SIDEBAR */

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

  /* STYLING OF LIST ITEMS WHEN A TABLE, RUN OR TESTCASE */

  .table, .run, .testcase, .step
    display: flex
    flex-direction: row
    justify-content: space-between
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
      flex-basis: 80%
      padding-right: 1rem

    .data-item
      flex-basis: 20%
      word-break: break-word

  /* ROUTER LINK STYLING */

  .router-link-exact-active
    font-weight: bold

  .active
    transform: translateX(-.5rem)
    box-shadow: 0 .5rem 1rem $bg-darker

</style>
