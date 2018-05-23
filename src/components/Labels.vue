<template>
  <li class="labels">
    <span
      class="label"
      v-for="label in labels"
      :key="label.index"
      >
      {{label}}
    </span>
  </li>
</template>

<script>
export default {
  name: 'Labels',
  props: {
    labels: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>

  @import 'src/assets/styles/style-variables.sass'

  .labels
    display: flex
    justify-content: space-between
    margin-bottom: .5rem
    padding-left: 1.4rem
    padding-right: 1rem

  .label
    font-size: .8rem
    font-weight: 300
    color: $grey

  .action
    cursor: pointer

</style>
