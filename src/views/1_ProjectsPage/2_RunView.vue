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
              tc: item.title,
              item: item
          }}"
          class="item-title"
          @click.native="fetchTcSteps(item.id)">{{item.title | truncate(60)}}</router-link>
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
  name: 'Run',
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
      testcases: 'testcases/testcases'
    })
  },
  methods: {
    ...mapActions({
      fetchTcSteps: 'steps/FETCH_TC_STEPS'
    })
  }
}
</script>
