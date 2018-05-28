<template>
  <div class="item">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import MainContent from '@/components/MainContent'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'

export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      required: false
    },
    item: {
      type: Object,
      required: false
    },
    activeList: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>
  .border
    border: 5px solid red
</style>


<style lang="sass">

  .border
    grid-column: 2/12
    

  .item
    grid-column: 4 / 12
    background: white
    border-radius: .2rem
    padding: .5rem 1rem

  .table-list
    grid-column-start: 8
    grid-column: span 4

  .run-list
    grid-column: span 8

</style>
