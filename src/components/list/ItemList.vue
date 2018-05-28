<template>
  <ul class="list">
    <slot name="list-item"></slot>
  </ul>
</template>

<script>
import Labels from '@/components/Labels'
export default {
  components: {
    Labels
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .list
    list-style-type: none
    margin: 0
    padding: 0

  .list-title
    font-size: 1rem
    font-weight: bold
    margin-bottom: .2rem

</style>
