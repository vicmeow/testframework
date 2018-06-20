<template>
  <item :title="$route.params.steptitle" :log="item.log" :item="item"></item>
</template>

/** TODO:
* - 
*
 */

<script>
import Item from '@/components/Item'
import {mapGetters} from 'vuex'

export default {
  name: 'Step',
  components: {
    Item
  },
  props: {
    title: {
      type: String,
      required: false
    },
    item: {
      type: Object,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      steps: 'steps/steps'
    })
  }
}
</script>
