<template>
  <li class="labels">
    <span class="label" v-for="label in labels" :key="label.index">{{label}}</span>
  </li>
</template>

<script>
export default {
  name: 'Labels',
  props: {
    labels: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .labels
    display: flex
    justify-content: space-between
    margin-bottom: .25rem
    padding-right: 1rem

  .sidebar .labels
    padding-left: 1.4rem

  .run-list .labels
    padding-left: 1.25rem

  .label
    font-size: .8rem
    color: $grey

  .label::first-letter
    text-transform: capitalize

  .run-list .labels .label:nth-child(1)
    flex-basis: 80%

  .run-list .labels .label:nth-child(2)
    flex-basis: 20%

</style>
