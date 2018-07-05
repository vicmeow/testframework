<template>
  <item :item="item">

    <item-list slot="list-bottom"
               :title="'steps'"
               :labels="['Name', 'Timestamp']"
               class="step-list">

      <li
        v-if="steps.length === 0"
        slot="no-items"
        class="no-items">This test case does not have any steps.</li>

      <list-item v-for="item in steps"
                 slot="list-item"
                 :key="item.title"
                 :item="item"
                 :type="'step'">

        <router-link
          slot="routerlink"
          :to="{
            name: 'step',
            params: {
              id: item.id
          }}"
          class="item-title"
          @click.native="fetchStep(item.id, item)">{{item.title}}</router-link>
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
  name: 'Testcase',
  components: {
    Item,
    ItemList,
    ListItem
  },
  filters: {
    truncate (value, length) {
      return value.substring(0, length) + '...'
    }
  },
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading',
      steps: 'steps/steps',
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
    console.log(this.$route.params.item)
    this.fetchSteps()
  },
  methods: {
    fetchStep (id, item) {
      this.$store.commit('RECIEVE_SIDEBAR_ITEMS', this.steps)
      //this.$store.commit('RECIEVE_ITEM', item)
      this.$store.commit('loader/setLoading', true)
      this.$store.dispatch('steps/FETCH_TC_STEPS', id).then(() => {
        this.$store.commit('loader/setLoading', false)
      })
    },
    fetchSteps () {
      this.$store.commit('loader/setLoading', true)
      this.$store.dispatch('steps/FETCH_TC_STEPS', this.$route.params.id).then(() => {
        this.$store.commit('loader/setLoading', false)
      })
    }
  }
}
</script>
