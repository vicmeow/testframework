<template>
  <main class="content">
      <div class="item">
        <h1>{{item.name}}</h1>
      </div>


      <item-list 
        v-if="tables"
        :class="{'table-list': tables}" 
        :title="'Tables'" 
        :labels="['Name', 'Test cases']"
        >
        <list-item
          :class="{
            active: $route.path === 'projects/' + item.name,
            success: item.status === 'success',
            error: item.status === 'error',
            table: tables
          }"
          slot="list-item"
          v-for="item in tables"
          :key="item.name"
          :item="item"
          :name="'table'"
          />
        </item-list>
        <item-list 
          v-if="runs"
          :class="{'run-list': runs}" 
          :title="'Latest runs'" 
          :labels="['Name', 'Test cases']"
          >
          <list-item
            :class="{
              active: $route.path === 'projects/' + item.name,
              success: item.status === 'success',
              error: item.status === 'error',
              current: item.status === 'current',
              run: runs
            }"
            slot="list-item"
            v-for="item in runs"
            :key="item.name"
            :item="item"
            :name="'run'"
            />
        </item-list>
    </main>
</template>

<script>

import ItemList from '@/components/list/ItemList'
import ListItem from '@/components/list/ListItem'

export default {
  name: 'Content',
  components: {
    ItemList,
    ListItem
  },
  props: {
    item: {
      type: Object,
      required: false
    },
    tables: {
      type: Array,
      required: false
    },
    runs: {
      type: Array,
      required: false
    }
  }
}

</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .content
    display: contents
  
  .item
    background: $white
    grid-row: 2
    grid-column-start: 4
    grid-column-end: 8
    z-index: 2
    padding: .5rem 1rem
    z-index: 1000

  .item-info
    display: flex
    flex-direction: row

  .info-container
    display: flex
    flex-direction: column
    margin-right: 1rem

  .table-list
    grid-row: 2
    grid-column-start: 8
    grid-column-end: 12
    z-index: 2
    margin: 1rem
  
  .run-list
    grid-row: 3
    grid-column-start: 4
    grid-column-end: 12
    z-index: 2
    margin: 1rem

</style>
