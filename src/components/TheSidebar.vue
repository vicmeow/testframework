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
    <div v-if="items.length === 0" class="no-items label">Sidebar is currently unavailble.</div>
    <item-list v-if="items.length > 1" :labels="labels" class="sidebar">

      <!-- Loop to render LISTITEMS in sidebar -->
      <list-item v-for="item in filteredItems"
                 slot="list-item"
                 :key="item.title" :item="item"
                 :type="'sidebar'">

        <!-- ROUTERLINK if LISTITEM === PROJECT -->
        <router-link v-if="route.name === 'project'"
                     slot="routerlink"
                     :to="{name: route.name, params: {project: item.title}}"
                     class="item-title">
          {{item.title}}
        </router-link>

        <!-- ROUTERLINK if LISTITEM === RUN -->
        <router-link v-if="route.name === 'run'"
                     slot="routerlink"
                     :to="{name: route.name, params: {run: item.title}}"
                     class="item-title"
                     @click.native="fetchRunTcs(item.parentid)">
          {{item.title}}
        </router-link>

        <!-- ROUTERLINK if LISTITEM === TESTCASE -->
        <router-link v-if="route.name === 'testcase'"
                     slot="routerlink"
                     :to="{name: route.name, params: {tc: item.title}}"
                     class="item-title"
                     @click.native="fetchTcSteps(item.parentid)">
          {{item.title}}
        </router-link>

        <!-- ROUTERLINK if LISTITEM === STEP -->
        <router-link v-if="route.name === 'step'"
                     slot="routerlink"
                     :to="{name: route.name, params: {step: item.title}}"
                     class="item-title">
          {{item.title}}
        </router-link>

      </list-item>
    </item-list>
  </aside>
</template>

<script>
import Searchbar from '@/components/Searchbar'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'
import Labels from '@/components//Labels'
import {mapState, mapActions} from 'vuex'

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
    placeholder: {
      type: String,
      required: false,
      default: 'Search projects...'
    },
    labels: {
      type: Array,
      required: false,
      default: function () {
        return ['Projects', '+']
      }
    }
  },
  data: () => ({
    value: ''
  }),
  computed: {
    ...mapState({
      route: 'RouteModule'
    }),
    items () {
      switch (this.route.name) {
        case 'project':
          return this.$store.getters['projects/projects']
          break
        case 'run':
          return this.$store.getters['runs/runs']
          break
        case 'testcase':
          return this.$store.getters['testcases/testcases']
          break
        case 'step':
          return this.$store.getters['steps/steps']
          break
        default:
          return this.$store.getters['projects/projects']
      }
    },
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
    position: relative
    flex: 1
    margin-right: 1rem
    max-height: 100vh
    overflow: scroll

</style>

<style lang="sass" scoped>

  button.navigate-back
    margin-bottom: .5rem
    cursor: pointer
    transition: transform .3s linear
    position: sticky
    top: .5rem
    &:hover
      transform: scale(1.02)

  .no-items
    text-align: center
</style>
