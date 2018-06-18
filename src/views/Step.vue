<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search steps...'"
                 :back="{name: 'testcase'}"
                 :routename="'step'"
                 :items="steps"
                 :labels="['step', '+']">
    </the-sidebar>

   <item :title="$route.params.steptitle" :log="item.log"></item>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import Item from '@/components/Item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Step',
  components: {
    TheSidebar,
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
