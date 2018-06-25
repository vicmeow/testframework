<template>
  <aside class="sidebar">
    <!-- BACK button -->
    <router-link v-if="$route.name !='project'" :to="back" tag="button" class="label navigate-back">
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
      <list-item v-for="item in filteredItems"
                 slot="list-item"
                 :key="item.title" :item="item"
                 :type="'sidebar'">

        <!-- ROUTERLINK if LISTITEM === PROJECT -->
        <router-link v-if="routename === 'project'"
                     slot="routerlink"
                     :to="{name: routename, params: {projecttitle: item.title}}"
                     class="item-title">
          {{item.title}}
        </router-link>

        <!-- ROUTERLINK if LISTITEM === RUN -->
        <router-link v-if="routename === 'run'"
                     slot="routerlink"
                     :to="{name: routename, params: {runtitle: item.title}}"
                     class="item-title"
                     @click.native="fetchRunTcs(item.parentid)">
          {{item.title}}
        </router-link>

        <!-- ROUTERLINK if LISTITEM === TESTCASE -->
        <router-link v-if="routename === 'testcase'"
                     slot="routerlink"
                     :to="{name: routename, params: {tctitle: item.title}}"
                     class="item-title"
                     @click.native="fetchTcSteps(item.parentid)">
          {{item.title}}
        </router-link>

        <!-- ROUTERLINK if LISTITEM === STEP -->
        <router-link v-if="routename === 'step'"
                     slot="routerlink"
                     :to="{name: routename, params: {steptitle: item.title}}"
                     class="item-title">
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
  props: {
    back: {
      type: Object,
      required: false,
      default: function (value) {
        return {name: 'project'}
      }
    },
    items: {
      type: Array,
      required: false,
      default: function () {
        return [{error: 'Items unavailble'}]
      }
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Search...'
    },
    labels: {
      type: Array,
      required: false,
      default: function () {
        return ['Projects', '+']
      }
    },
    routename: {
      type: String,
      default: 'project',
      validator: function (value) {
        // Value must match one of these strings
        return ['project', 'run', 'testcase', 'step'].indexOf(value) !== -1
      }
    }
  },
  data: () => ({
    value: ''
  }),
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

<style lang="sass">

  aside.sidebar
    flex: 1
    margin-right: 1rem
    position: sticky
    top: calc(55px + 1rem)
    height: 100vh
</style>

<style lang="sass" scoped>

  button.navigate-back
    margin-bottom: .5rem
    cursor: pointer
    transition: transform .3s linear
    &:hover
      transform: scale(1.02)
</style>
