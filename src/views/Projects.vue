<template>
  <div class="projects">
    <h1>Hello world</h1>
    <!-- SIDEBAR 
    <TheSidebar :placeholder="'Search projects...'" :items="projects" :labels="['Projects', '+']"/> -->
    <!-- MAIN COMPONENT 
    <main-content :title="title">
      
    </main-content>-->
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import MainContent from '@/components/MainContent'
import mapGetters from 'vuex'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'

export default {
  name: 'Projects',
  components: {
    TheSidebar,
    MainContent,
    ItemList,
    ListItem
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    }
  },
  computed: {
    projects(){
      return this.$store.state.projects
    },
    tables(){
      
    }
  },
  mounted () {
    // FETCH FIRST PROJECT IN LIST ON INITIAL RENDER
    const projects = this.$store.state.projects
    let tables = []
      for (let project of projects ) {
        for (let table of project.tables){
          tables.push(table)
        }
      }
      console.log(tables)
  }
}
</script>

<style lang="sass">

  .projects
    display: contents

  .table-list
    grid-column-start: 8
    grid-column: span 4
  
  .run-list
    grid-column: span 8

</style>
