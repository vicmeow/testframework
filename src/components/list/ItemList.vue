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
    margin-top: 1rem

  .list-title
    font-size: 1rem
    font-weight: bold
    margin-bottom: .2rem

</style>
