<template>
   <item :title="$route.params.tctitle" :item="item">

      <item-list slot="list-bottom"
                 class="step-list"
                 :title="'steps'"
                 :labels="['Name', 'Timestamp']">

          <li
            slot="no-items"
            class="no-items"
            v-if="steps.length === 0">This test case does not have any steps.</li>

          <list-item slot="list-item"
                    v-for="item in steps"
                    :key="item.title"
                    :item="item"
                    :type="'step'">

            <router-link
                      slot="routerlink"
                      class="item-title"
                      @click.native="fetchTcSteps(item.parentid)"
                      :to="{
                        name: 'step',
                        params: {
                          steptitle: item.title,
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
  name: 'Testcase',
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
      testcases: 'testcases/testcases',
      steps: 'steps/steps'
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
