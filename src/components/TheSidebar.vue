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

    <!-- ITEMLIST -->
    <div v-if="items.length === 0" class="no-items label">Sidebar is currently unavailble.</div>
    <item-list v-if="items.length > 0" :labels="labels" class="sidebar">

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
    ...mapGetters({
      loading: 'loader/isLoading',
      items: 'sidebarItems'
    }),
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
      console.log(item.id)
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
