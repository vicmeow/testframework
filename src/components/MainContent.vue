<template>
  <main class="main-content">
    <div class="project-selected"></div>
      <item-list>
        <labels slot="labels" :labels="['Name', 'Test cases']"/>
        <li slot="list-title"><h2 class="list-title">Tables</h2></li>
        <list-item
          v-for="item in items"
          :key="item.index"
          :tc="item.tc"
          :class="{
            success: item.status === 'success',
            error: item.status === 'error',
            current: item.status === 'current',
            project: item.type === 'project',
            table: item.type === 'table',
            run: item.type === 'run'
          }">
          
          </list-item>
      </item-list>
  </main>
</template>

<script>
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'
import Labels from '@/components//Labels'

export default {
  name: 'MainContent',
  components: {
    ItemList,
    ListItem,
    Labels
  },
  data: () => ({
    items: [
      {
        name: 'table 1',
        tc: 1234,
        type: 'table',
        status: 'success'
      },
      {
        name: 'table 2',
        tc: 1234,
        tables: 3,
        runs: 34,
        type: 'table',
        status: 'error'
      },
      {
        name: 'table 3',
        tc: 1234,
        tables: 3,
        runs: 34,
        type: 'table',
        status: 'success'
      },
      {
        name: 'table 4',
        tc: 1234,
        type: 'table',
        status: 'success'
      },
      {
        name: 'table 5',
        tc: 1234,
        tables: 3,
        runs: 34,
        type: 'table',
        status: 'error'
      }
    ]
  })
}

</script>

<style scoped lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .main-content
    background: $white
  
  .list
    grid-column-start: 8
    grid-column: span 4
    z-index: 2
  
  .list-title
    font-size: 1rem
    font-weight: bold
    margin-bottom: .5rem

</style>
