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
              step: item.title,
              item: item
          }}"
          class="item-title"
          @click.native="fetchTcSteps(item.parentid)">{{item.title | truncate(60)}}</router-link>
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
      testcases: 'testcases/testcases',
      steps: 'steps/steps'
    })
  },
  methods: {
    ...mapActions({
      fetchTcSteps: 'steps/FETCH_TC_STEPS'
    })
  }
}
</script>
