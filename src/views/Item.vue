<template>
  <div class="item">
    <h1>{{item.title}}</h1>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import MainContent from '@/components/MainContent'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'

export default {
  name: 'Item',
  components: {
    TheSidebar,
    MainContent,
    ItemList,
    ListItem
  },
  props: {
    item: {
      type: Object,
      required: false
    }
  },
  created () {
    if(!this.title){
      this.$router.push({ 
          name: 'project', 
          params: {
            id: this.$store.getters['projects/projects'][0].title,
            item: this.$store.getters['projects/projects'][0]
            }
          })
    }
  }
}
</script>

<style lang="sass">

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
