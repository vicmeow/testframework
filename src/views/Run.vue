<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search runs...'"
                 :back="{name: 'project'}"
                 :items="runs"
                 :routename="'run'"
                 :labels="['runs', '+']">
    </the-sidebar>

   <item :title="$route.params.runtitle">

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
                      @click.native="fetchTcSteps(item.parentid)"
                      :to="{
                        name: 'testcase',
                        params: {
                          tctitle: item.title
                          }}">{{item.title}}</router-link>
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
  name: 'Run',
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
