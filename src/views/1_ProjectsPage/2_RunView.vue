<template>
  <item :item="item">

    <item-list slot="list-bottom"
               :title="'Test cases'"
               :labels="['Name', 'Timestamp']"
               class="tc-list">

      <li
        v-if="testcases.length === 0"
        slot="no-items"
        class="no-items">This run does not have any test cases.</li>

      <list-item v-for="item in testcases"
                 slot="list-item"
                 :key="item.title"
                 :item="item"
                 :type="'testcase'">

        <router-link
          slot="routerlink"
          :to="{
            name: 'testcase',
            params: {
              id: item.id,
              item: item
          }}"
          class="item-title"
          @click.native="fetchTc(item.id)">{{item.title}}</router-link>
      </list-item>
    </item-list>
  </item>
</template>

<script>
import Item from '@/components/Item'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'Run',
  components: {
    Item,
    ItemList,
    ListItem
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading',
      testcases: 'testcases/testcases'
    }),
    item () {
      if(this.$route.params.item) {
        return this.$route.params.item
      } else {
        console.log(this.$route.params)
      }
    }
  },
  created () {
    this.fetchTcs()
  },
  methods: {
    fetchTc (id, item) {
      this.$store.commit('RECIEVE_SIDEBAR_ITEMS', this.testcases)
      //this.$store.commit('RECIEVE_ITEM', item)
      this.$store.commit('loader/setLoading', true)
      this.$store.dispatch('testcases/FETCH_RUN_TCS', id).then(() => {
        this.$store.commit('loader/setLoading', false)
      })
    },
    fetchTcs () {
      this.$store.commit('loader/setLoading', true)
      this.$store.dispatch('testcases/FETCH_RUN_TCS', this.$route.params.id).then(() => {
        this.$store.commit('loader/setLoading', false)
      })
    }
  }
}
</script>
