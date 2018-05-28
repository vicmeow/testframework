<template>
  <aside class="sidebar">
    <searchbar :placeholder="placeholder" v-model="value"/>
    <slot name="back"></slot>
    <item-list :items="items" :labels="labels">
        <!-- Loop to render list-items -->
        <list-item
          slot="list-item"
          v-for="item in filteredItems"
          :key="item.title"
          :item="item"
          :type="'sidebar'">
          
          <router-link
            v-if="routename === 'run'"
            slot="routerlink"
            class="item-title"
            :to="{name: routename, params: {runtitle: item.title}}"
            >{{item.title}}
            </router-link>
          <router-link
            v-if="routename === 'project'"
            slot="routerlink"
            class="item-title"
            :to="{name: routename, params: {projecttitle: item.title}}"
            >{{item.title}}
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
  props: {
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
  data: () => ({
    value: ''
  }),
  computed: {

    filteredItems () {
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
