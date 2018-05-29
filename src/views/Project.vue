<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search projects...'" :routename="'project'" :items="projects"/>
    <div class="item">
      <span class="label">Title</span>
      <h1 class="item-title">{{$route.params.projecttitle}}</h1>

      <item-list 
        class="run-list" 
        :title="'Runs'" 
        :labels="['Name', 'Test cases', 'Success', 'Fail']"
        >
        <list-item
          slot="list-item"
          v-for="item in runs"
          :key="item.title"
          :item="item"
          :type="'run'">

          <router-link
            slot="routerlink"
            class="item-title"
            :to="{name: 'run', params: {runtitle: item.title}}"
            >{{item.title}}
            </router-link>

            </list-item>

        </item-list>

    </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import MainContent from '@/components/MainContent'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'

export default {
  name: 'Project',
  components: {
    TheSidebar,
    MainContent,
    ItemList,
    ListItem
  },
  props: {
    title: {
      type: String,
      required: false
    },
    item: {
      type: Object,
      required: false
    }
  },
  computed: {
    projects(){
      return this.$store.getters['projects/projects']
    },
    runs(){
      return this.$store.getters['runs/runs']
    }
  }
}
</script>

<style lang="sass">

  .wrapper
    display: contents

  .route
    border: 1px solid red

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
