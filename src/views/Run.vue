<template>
   <item :title="$route.params.runtitle" :item="item">

      <item-list slot="list-bottom"
                 class="tc-list"
                 :title="'Test cases'"
                 :labels="['Name', 'Timestamp']">

          <li
            slot="no-items"
            class="no-items"
            v-if="testcases.length === 0">This run does not have any test cases.</li>

          <list-item slot="list-item"
                    v-for="item in testcases"
                    :key="item.title"
                    :item="item"
                    :type="'testcase'">

            <router-link
                      slot="routerlink"
                      class="item-title"
                      @click.native="fetchTcSteps(item.id)"
                      :to="{
                        name: 'testcase',
                        params: {
                          tctitle: item.title,
                          item: item
                          }}">{{item.title | truncate(60)}}</router-link>
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
  },
  filters: {
    truncate(value, length) {
      return value.substring(0, length) + '...'
    }
  }
}
</script>
