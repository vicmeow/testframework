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
          :key="item.index"
          :title="item.name"
          :tc="item.tc"
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
    <MainContent>

      </MainContent>
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
        tc: 123,
        tables: 3,
        runs: 34,
        type: 'project',
        status: 'error'
      },
      {
        name: 'Project 2',
        tc: 124,
        tables: 3,
        runs: 34,
        type: 'project',
        status: 'success'
      },
      {
        name: 'Project 3',
        tc: 11134,
        tables: 3,
        runs: 34,
        type: 'project',
        status: 'success'
      },
      {
        name: 'Project 4',
        tc: 1219,
        tables: 3,
        runs: 34,
        type: 'project',
        status: 'success'
      },
      {
        name: 'Project 5',
        tc: 1337,
        tables: 3,
        runs: 34,
        type: 'project',
        status: 'error'
      }
    ]
  })
}
</script>

<style lang="sass">

  .projects
    display: contents

</style>
