<template>
  <aside class="sidebar">
    <searchbar :placeholder="placeholder" v-model="value"/>
    <item-list :items="items" :labels="labels">
        <!-- Loop to render list-items -->
        <list-item
          slot="list-item"
          v-for="item in filteredItems"
          :key="item.name"
          :item="item"
          :sidebar="true"
          :class="{
            success: item.status === 'success',
            error: item.status === 'error',
            current: item.status === 'current',
            project: item.type === 'project',
            table: item.type === 'table',
            run: item.type === 'run'
          }"/>
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
      required: false,
    },
    placeholder: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    value: ''
  }),
  computed: {
    filteredItems () {
      if(this.items){
        return this.items.filter(item => {
        return item.name.toLowerCase().indexOf(this.value.toLowerCase()) >= 0
      })
      } else {
        return false
      }
    }
  }
}
</script>
