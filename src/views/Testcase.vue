<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search testcases...'"
                 :back="{name: 'run'}"
                 :items="testcases"
                 :routename="'testcase'"
                 :labels="['testcase', '+']">
    </the-sidebar>

   <item :titleLabel="'Testcase'" :title="$route.params.tctitle">

      <item-list slot="list-bottom"
                 class="run-list"
                 :title="'Test cases'"
                 :labels="['Name', 'Timestamp']">

          <list-item slot="list-item"
                    v-for="item in steps"
                    :key="item.title"
                    :item="item"
                    :type="'step'">

            <router-link
                      slot="routerlink"
                      class="item-title"
                      :to="{
                        name: 'step',
                        params: {
                          steptitle: item.title,
                          item: item
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

export default {
  name: 'Testcase',
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
    },
    activeList: {
      type: Array,
      required: false
    }
  },
  computed: {
    testcases () {
      return this.$store.getters['testcases/testcases']
    },
    steps () {
      return this.$store.getters['testcases/steps']
    }
  }
}
</script>
