<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search runs...'" :items="runs" :routename="'run'">
      <router-link slot="back" to="/projects" class="label">Go back</router-link>
    </the-sidebar>

    <div class="item">
      <span class="label">Title</span>
      <h1 class="item-title">{{$route.params.runtitle}}</h1>

      <item-list 
        class="run-list" 
        :title="'Test cases'" 
        :labels="['Name', 'Test cases']"
        >
        <list-item
          slot="list-item"
          v-for="item in testcases"
          :key="item.title"
          :item="item"
          :type="'testcase'">

         <h3 slot="routerlink" class="data-title">
           {{item.title}}
         </h3>

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
  name: 'Run',
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
    },
    activeList: {
      type: Array,
      required: false
    }
  },
  computed: {
  runs(){
      return this.$store.getters['runs/runs']
    },
    testcases(){
      return this.$store.getters['testcases/testcases']
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
