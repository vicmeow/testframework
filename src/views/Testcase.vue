<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search testcases...'"
                 :items="testcases"
                 :routename="'testcase'"
                 :labels="['testcase', '+']">

        <router-link slot="back" to="/projects" tag="span" exact class="label">Go back</router-link>

      </the-sidebar>

   <item :titleLabel="'Steps'" :title="$route.params.tctitle">

      <item-list slot="list-bottom"
                 class="run-list"
                 :title="'Test cases'"
                 :labels="['Name', 'Timestamp']">

          <list-item slot="list-item"
                    v-for="item in steps"
                    :key="item.title"
                    :item="item"
                    :type="'step'">

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
