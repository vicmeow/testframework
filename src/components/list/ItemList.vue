<template>
  <ul class="list">
    <li v-if="title"><h2 class="list-title">{{title}}</h2></li>
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
      required: true
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
    font-size: 1rem
    font-weight: bold
    margin-bottom: .2rem

</style>
