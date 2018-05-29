<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search runs...'"
                 :items="runs"
                 :routename="'run'"
                 :labels="['runs', '+']">

        <router-link slot="back" to="/projects" tag="span" exact class="label">Go back</router-link>

      </the-sidebar>

   <item :titleLabel="'Run'" :title="$route.params.runtitle">

      <item-list slot="list-bottom"
                 class="run-list"
                 :title="'Test cases'"
                 :labels="['Name', 'Timestamp']">

          <list-item slot="list-item"
                    v-for="item in testcases"
                    :key="item.title"
                    :item="item"
                    :type="'testcase'">

            <h3 slot="routerlink" class="item-title">{{item.title}}</h3>
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
    },
    activeList: {
      type: Array,
      required: false
    }
  },
  computed: {
    runs() {
      return this.$store.getters['runs/runs']
    },
    testcases() {
      return this.$store.getters['testcases/testcases']
    }
  }
}
</script>
