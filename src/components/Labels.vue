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
    justify-content: space-between
    margin-bottom: .5rem
    padding-right: 1rem

  .sidebar .labels
    padding-left: 1.4rem

  .list .labels
    padding-left: 1.25rem

  .label
    font-size: .8rem
    color: $grey
    margin-bottom: .2rem
    &:first-letter
      text-transform: uppercase

  .list .labels .label:nth-child(1)
    flex-basis: 80%

  .list .labels .label:nth-child(2)
    flex-basis: 20%

</style>
