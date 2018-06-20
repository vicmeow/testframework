<template>
  <aside class="sidebar">
    <!-- BACK button -->
    <router-link v-if="$route.name != 'project'" :to="back" tag="button" class="label navigate-back">
      <font-awesome-icon
        :icon="['fas', 'arrow-left']"
        class="info-icon"
        role="img"
        aria-hidden="true"
      />
      Back to {{back.name + 's'}}</router-link>

    <searchbar :placeholder="placeholder" v-model="value"/>

    <!-- ITEMLIST in sidebar -->
    <item-list :labels="labels" class="sidebar">

      <!-- Loop to render LISTITEMS in sidebar -->
        <list-item slot="list-item"
                   v-for="item in filteredItems"
                   :key="item.title" :item="item"
                   :type="'sidebar'">

          <!-- ROUTERLINK if LISTITEM === PROJECT -->
          <router-link slot="routerlink"
                       v-if="routename === 'project'"
                       class="item-title"
                       :to="{name: routename, params: {projecttitle: item.title}}">
              {{item.title}}
            </router-link>

          <!-- ROUTERLINK if LISTITEM === RUN -->
          <router-link slot="routerlink"
                       v-if="routename === 'run'"
                       class="item-title"
                       @click.native="fetchRunTcs(item.parentid)"
                       :to="{name: routename, params: {runtitle: item.title}}">
              {{item.title}}
            </router-link>

          <!-- ROUTERLINK if LISTITEM === TESTCASE -->
          <router-link slot="routerlink"
                       v-if="routename === 'testcase'"
                       class="item-title"
                       @click.native="fetchTcSteps(item.parentid)"
                       :to="{name: routename, params: {tctitle: item.title}}">
              {{item.title}}
            </router-link>

          <!-- ROUTERLINK if LISTITEM === STEP -->
          <router-link slot="routerlink"
                       v-if="routename === 'step'"
                       class="item-title"
                       :to="{name: routename, params: {steptitle: item.title}}">
              {{item.title}}
            </router-link>

        </list-item>
      </item-list>
    </aside>
</template>

/**
 * TODO:
 * - Make selected item always appear on top of list
 */

<script>
import Searchbar from '@/components/Searchbar'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'
import Labels from '@/components//Labels'
import {mapActions} from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    Searchbar,
    ItemList,
    Labels,
    ListItem
  },
  data: () => ({
    value: ''
  }),
  props: {
    back: {
      type: Object,
      required: false
    },
    items: {
      type: Array,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    labels: {
      type: Array,
      required: false
    },
    routename: {
      type: String,
      required: false
    }
  },
  computed: {
    filteredItems () {
      // Filters item in sidebar according to searcbar input
      if (this.items) {
        return this.items.filter(item => {
          return item.title.toLowerCase().indexOf(this.value.toLowerCase()) >= 0
        })
      } else {
        return false
      }
    }
  },
  methods: {
    ...mapActions({
      fetchRunTcs: 'testcases/FETCH_RUN_TCS',
      fetchTcSteps: 'steps/FETCH_TC_STEPS'
    })
  }
}
</script>

<style lang="sass" scoped>

  button.navigate-back
    margin-bottom: .5rem
    cursor: pointer
    transition: transform .3s linear
    &:hover
      transform: scale(1.02)
</style>
