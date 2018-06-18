<template>
  <ul class="list">
    <h4 class="list-title">{{title}}</h4>
    <labels :labels="labels"/>
    <slot name="list-item"></slot>
  </ul>
</template>

<script>
import Labels from '@/components/Labels'
export default {
  components: {
    Labels
  },
  props: {
    title: {
      type: String,
      required: false
    },
    labels: {
      type: Array,
      required: false
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

  .list-title
    font-size: 1.2rem
    margin-bottom: .2rem
    &:first-letter
      text-transform: uppercase
  
  .run-list, .tc-list, .step-list
    margin-top: 1rem

</style>
