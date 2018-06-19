<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search projects...'" :routename="'project'" :labels="['project', '+']" :items="projects"/>

    <item :title="$route.params.projecttitle">

      <item-list slot="list-bottom"
                 class="run-list"
                 :title="'Runs'"
                 :labels="['Name', 'Duration (min)']">

        <li 
            slot="no-items"
            class="no-items" 
            v-if="runs.length === 0">This project does not have any runs.</li>

        <list-item slot="list-item"
                   v-for="item in runs"
                   :key="item.title"
                   :item="item"
                   :type="'run'">

          <router-link slot="routerlink"
                       class="item-title"
                       @click.native="fetchRunTcs(item.id)"
                       :to="{
                         name: 'run',
                         params: {
                           runtitle: item.title
                            }
                          }">
              {{item.title}}
              </router-link>
            </list-item>
        </item-list>
      </item>
    </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import Item from '@/components/Item'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Project',
  components: {
    TheSidebar,
    Item,
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
  methods: {
    ...mapActions({
      fetchRunTcs: 'testcases/FETCH_RUN_TCS',
      fetchRuns: 'runs/FETCH_PROJECT_RUNS'
    }),
    fetch(itemid){
      console.log(itemid)
    }
  },
  computed: {
    ...mapGetters({
      runs: 'runs/runs',
      projects: 'projects/projects'
    })
  },
  created(){
    if(this.$store.getters['runs/runs'].length === 0){
      this.fetchRuns()
    }
  }
}
</script>
