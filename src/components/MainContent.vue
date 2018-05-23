<template>
  <main class="main-content">
    <div class="project-selected"></div>
      <item-list>
        <labels slot="labels" :labels="['Name', 'Test cases']"/>
        <li slot="list-title"><h2 class="list-title">Tables</h2></li>
        <list-item
          slot="list-item"
          v-for="item in items"
          :key="item.name"
          :item="item"
          :class="{
            success: item.status === 'success',
            error: item.status === 'error',
            table: item.type === 'table',
            run: item.type === 'run'
          }"/>
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
        name: 'Webshop',
        type: 'table',
        status: 'error',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 2',
        type: 'table',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 3',
        type: 'table',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 4',
        type: 'table',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 5',
        type: 'table',
        status: 'error',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
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
