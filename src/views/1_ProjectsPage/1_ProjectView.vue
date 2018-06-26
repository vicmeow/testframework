<template>
  <item :item="item">

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
                         run: item.id,
                         item: item
                       }
                     }"
                     class="item-title"
                     @click.native="fetchTc(item.id)">
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
import {mapGetters} from 'vuex'

export default {
  name: 'Project',
  components: {
    Item,
    ItemList,
    ListItem
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: function () {
        return false
      }
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading',
      runs: 'runs/runs',
      projects: 'projects/projects'
    })
  },
  created () {
    this.fetchRuns()
  },
  methods: {
    fetchTc (id) {
      this.$store.commit('loader/setLoading', true)
      this.$store.dispatch('testcases/FETCH_RUN_TCS', id).then(() => {
        this.$store.commit('loader/setLoading', false)
      })
    },
    fetchRuns () {
      this.$store.commit('loader/setLoading', true)
      this.$store.dispatch('runs/FETCH_PROJECT_RUNS').then(() => {
        this.$store.commit('loader/setLoading', false)
      })
    }
  }
}
</script>
