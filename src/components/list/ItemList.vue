<template>
  <ul class="list">
    <labels :labels="labels"/>
    <slot name="active-item"/>
    <slot name="no-items"/>
    <slot name="list-item"/>
  </ul>
</template>

<script>
import Labels from '@/components/Labels'
export default {
  components: {
    Labels
  },
  props: {
    labels: {
      type: Array,
      required: false,
      default: function () {
        return ['Name', 'Date']
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .list
    list-style-type: none
    margin: 0
    padding: 0

  .sidebar-list
    display: flex
    flex-direction: column

  .list-title
    font-size: 1.2rem
    margin-bottom: .2rem
    &:first-letter
      text-transform: uppercase

  .run-list, .tc-list, .step-list
    margin-top: 1rem

</style>
