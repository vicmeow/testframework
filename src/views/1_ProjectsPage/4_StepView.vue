<template>
  <item :item="item"/>
</template>

<script>
import Item from '@/components/Item'
import {mapGetters} from 'vuex'

export default {
  name: 'Step',
  components: {
    Item
  },
  computed: {
    ...mapGetters({
      steps: 'steps/steps',
      item: 'item'
    })
  }
}
</script>
