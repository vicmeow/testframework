<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search test cases...'"
                 :back="{name: 'run'}"
                 :items="testcases"
                 :routename="'testcase'"
                 :labels="['test case', '+']">
    </the-sidebar>

   <item :title="$route.params.tctitle">

      <item-list slot="list-bottom"
                 class="step-list"
                 :title="'steps'"
                 :labels="['Name', 'Timestamp']">

          <list-item slot="list-item"
                    v-for="item in steps"
                    :key="item.title"
                    :item="item"
                    :type="'step'">

            <router-link
                      slot="routerlink"
                      class="item-title"
                      @click.native="fetchSteps"
                      :to="{
                        name: 'step',
                        params: {
                          steps: steps,
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
import {mapActions, mapGetters} from 'vuex'

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
      fetchSteps: 'steps/FETCH_STEPS'
    })
  }
}
</script>
