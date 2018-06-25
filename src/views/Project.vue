<template>
  <item :title="$route.params.projecttitle" :item="item">

    <item-list slot="list-bottom"
               :title="'Runs'"
               :labels="['Name', 'Date', 'Duration (min)']"
               class="run-list">

      <li
        v-if="runs.length === 0"
        slot="no-items"
        class="no-items">This project does not have any runs.</li>

      <list-item v-for="item in runs"
                 slot="list-item"
                 :key="item.title"
                 :item="item"
                 :type="'run'">

        <router-link slot="routerlink"
                     :to="{
                       name: 'run',
                       params: {
                         runtitle: item.title,
                         item: item
                       }
                     }"
                     class="item-title"
                     @click.native="fetchRunTcs(item.id)">
          {{item.title}}
        </router-link>
      </list-item>
    </item-list>
  </item>
</template>

<script>
import Item from '@/components/Item'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Project',
  components: {
    Item,
    ItemList,
    ListItem
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Item title'
    },
    item: {
      type: Object,
      required: true,
      default: function () {
        return {
          name: 'Unavailable'
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      runs: 'runs/runs',
      projects: 'projects/projects'
    })
  },
  created () {
    if (this.$store.getters['runs/runs'].length === 0) {
      this.fetchRuns()
    }
  },
  methods: {
    ...mapActions({
      fetchRunTcs: 'testcases/FETCH_RUN_TCS',
      fetchRuns: 'runs/FETCH_PROJECT_RUNS'
    }),
    fetch (itemid) {
      console.log(itemid)
    }
  }
}
</script>
