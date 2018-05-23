<template>
  <div class="projects">
    <TheSidebar>
      <!-- searchbar -->
      <!-- List of Projects -->
      <item-list slot="list" :items="items">
        <!-- Labels for List of Projects -->
        <labels slot="labels" :labels="['Project', '+']"/>
        <!-- Loop to render list-items -->
        <list-item
          slot="list-item"
          v-for="item in items"
          :key="item.name"
          :item="item"
          :class="{
            success: item.status === 'success',
            error: item.status === 'error',
            current: item.status === 'current',
            project: item.type === 'project',
            table: item.type === 'table',
            run: item.type === 'run'
          }"/>
        </item-list>
      </TheSidebar>
    <MainContent/>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import ItemList from '@/components/list/ItemList'
import MainContent from '@/components/MainContent'
import ListItem from '@/components/list/ListItem'
import Labels from '@/components//Labels'

export default {
  name: 'Projects',
  components: {
    TheSidebar,
    ItemList,
    MainContent,
    ListItem,
    Labels
  },
  data: () => ({
    items: [
      {
        name: 'Webshop',
        type: 'project',
        status: 'error',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 2',
        type: 'project',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 3',
        type: 'project',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 4',
        type: 'project',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Project 5',
        type: 'project',
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

<style lang="sass">

  .projects
    display: contents

</style>
