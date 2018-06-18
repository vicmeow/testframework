<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search projects...'" :routename="'project'" :labels="['project', '+']" :items="projects"/>

    <item :title="$route.params.projecttitle">

      <item-list slot="list-bottom"
                 class="run-list"
                 :title="'Runs'"
                 :labels="['Name']">

        <list-item slot="list-item"
                   v-for="item in runs"
                   :key="item.title"
                   :item="item"
                   :type="'run'">

          <router-link slot="routerlink"
                       class="item-title"
                       @click.native="fetchTc"
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
      fetchTc: 'testcases/FETCH_TC',
    })
  },
  computed: {
    ...mapGetters({
      runs: 'runs/runs',
      projects: 'projects/projects'
    })
  }
}
</script>
