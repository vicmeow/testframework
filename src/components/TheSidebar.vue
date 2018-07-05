<template>
  <aside class="sidebar">
    <form role="search">
      <searchbar :placeholder="placeholder" v-model="value"/>
    </form>
    <!-- BACK button -->
    <router-link v-if="$route.name !='project'" :to="backButton" tag="button" class="navigate-back">
      <font-awesome-icon
        :icon="['fas', 'arrow-left']"
        class="info-icon"
        role="img"
        aria-hidden="true"
      />
      Back to {{backButton.name + 's'}}</router-link>

    <!-- ITEMLIST -->
    <div v-if="items.length === 0" class="no-items label">Sidebar is currently unavailble.</div>

    <item-list v-if="items.length > 0" :labels="labels" class="sidebar-list">

      <!-- Loop to render LIST ITEMS -->
      <list-item v-for="item in filteredItems"
                 slot="list-item"
                 :key="item.title" :item="item"
                 :type="'sidebar'">
        <!-- ROUTER LINK for LIST ITEMS -->
        <h4 slot="routerlink"
            class="item-title"
            @click="setItem(item)">
          {{item.title}}
        </h4>
      </list-item>
    </item-list>
  </aside>
</template>

<script>
import Searchbar from '@/components/Searchbar'
import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'
import Labels from '@/components//Labels'
import {mapGetters} from 'vuex'

export default {
  name: 'Sidebar',
  components: {
    Searchbar,
    ItemList,
    Labels,
    ListItem
  },
  props: {
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
    value: '',
    activeItem: {}
  }),
  computed: {
    ...mapGetters({
      loading: 'loader/isLoading',
      items: 'sidebarItems'
    }),
    backButton () {
      switch (this.$route.name) {
        case 'project':
          return false
        case 'run':
          return {name: 'project'}
        case 'testcase':
          return {name: 'run'}
        case 'step':
          return {name: 'testcase'}
        default:
          return false
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
    setItem (item) {
      this.$store.commit('RECIEVE_ITEM', item)
      // Store current route name
      let route = this.$route.name
      // Create obj for router push
      let to = {
        name: route,
        params: {
          [route]: item.id
        }
      }
      // Navigate using to obj
      this.$router.push(to)
    }
  }
}
</script>

<style lang="sass">

  aside.sidebar
    position: relative
    flex: 1
    margin-right: 1rem
    max-height: 100vh

</style>

<style lang="sass" scoped>

  @import 'src/assets/styles/style-variables.sass'

  button.navigate-back
    text-align: left
    margin-bottom: .5rem
    cursor: pointer
    transition: transform .1s linear
    background: white
    padding: .2rem 1rem
    border-radius: 1rem
    color: $grey
    &:hover
      transform: scale(1.02)

  .no-items
    text-align: center

  .info-icon
    font-size: .6rem

</style>
