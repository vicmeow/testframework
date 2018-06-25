<template>
  <item :title="$route.params.steptitle" :log="item.log" :item="item"/>
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
      required: true,
      default: 'Item title'
    },
    item: {
      type: Object,
      required: true,
      default: function () {
        return {
          name: 'Unavailable'
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      steps: 'steps/steps'
    })
  }
}
</script>
