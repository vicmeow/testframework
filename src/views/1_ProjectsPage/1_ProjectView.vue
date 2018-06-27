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
                         run: item.id
                       }
                     }"
                     class="item-title"
                     @click.native="fetchTcs(item.id, item)">
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
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading',
      runs: 'runs/runs',
      projects: 'projects/projects',
      item: 'item'
    })
  },
  created () {
    this.fetchRuns()
    this.fetchProject()
  },
  methods: {
    fetchProject () {
      this.$store.commit('RECIEVE_ITEM', this.$store.getters['projects/projects'][0])
      //this.$store.commit('loader/setLoading', true)
      //this.$store.dispatch('projects/FETCH_PROJECTS').then(() => {
      //this.$store.commit('loader/setLoading', false)})
    },
    fetchTcs (id, item) {
      this.$store.commit('RECIEVE_ITEM', item)
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