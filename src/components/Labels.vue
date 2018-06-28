<template>
  <li class="labels">
    <span v-for="label in labels" :key="label.index" class="label">{{label}}</span>
  </li>
</template>

/**
 * TODO:
 * - Make this component reusable in Item component
 */

<script>
export default {
  name: 'Labels',
  props: {
    labels: {
      type: Array,
      required: false,
      default: function (value) {
        return ['Label']
      }
    }
  }
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .labels
    display: flex
    margin-bottom: .2rem
    padding-right: 1rem

  .sidebar-list .labels
    justify-content: space-between
    padding-left: 1.4rem

  .list .labels
    padding-left: 1.25rem

  .label
    font-size: .8rem
    color: $black
    opacity: .5
    margin-bottom: .2rem
    &:first-letter
      text-transform: uppercase

  .run-list
    @for $i from 1 through 3
      .label:nth-child(1)
        flex-basis: 60%
      .label:nth-child(2), .label:nth-child(3)
        flex-basis: 20%

  .tc-list, .step-list
    @for $i from 1 through 2
      .label:nth-child(1)
        flex-basis: 80%
      .label:nth-child(2)
        flex-basis: 20%

</style>
