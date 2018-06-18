<template>
  <aside class="sidebar">
    <!-- BACK button -->
    <router-link v-if="$route.name != 'project'" :to="back" tag="button" exact class="label navigate-back">Back</router-link>
    <searchbar :placeholder="placeholder" v-model="value"/>
    <!-- ITEMLIST in sidebar -->
    <item-list :labels="labels" class="sidebar">
      <!-- Loop to render LISTITEMS in sidebar -->
        <list-item slot="list-item"
                   v-for="item in filteredItems"
                   :key="item.title" :item="item"
                   :type="'sidebar'">
          <!-- ROUTERLINK if LISTITEM === RUN -->
          <router-link slot="routerlink"
                       v-if="routename === 'run'"
                       class="item-title"
                       :to="{name: routename, params: {runtitle: item.title}}">
              {{item.title}}
            </router-link>
          <!-- ROUTERLINK if LISTITEM === PROJECT -->
          <router-link slot="routerlink"
                       v-if="routename === 'project'"
                       class="item-title"
                       :to="{name: routename, params: {projecttitle: item.title}}">
              {{item.title}}
            </router-link>
          <!-- ROUTERLINK if LISTITEM === TESTCASE -->
          <router-link slot="routerlink"
                       v-if="routename === 'testcase'"
                       class="item-title"
                       :to="{name: routename, params: {tctitle: item.title}}">
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
    type: {
      type: String,
      required: false
    },
    labels: {
      type: Array,
      required: false
    },
    routename: {
      type: String,
      required: true
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
  }
}
</script>

<style lang="sass" scoped>

  button.navigate-back
    color: black
    margin-bottom: .5rem
    cursor: pointer
    background: white
    padding: .2rem 1rem
    border-radius: 1rem
</style>
