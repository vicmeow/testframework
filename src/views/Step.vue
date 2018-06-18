<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search steps...'"
                 :back="{name: 'testcase'}"
                 :items="steps"
                 :routename="'step'"
                 :labels="['step', '+']">
    </the-sidebar>

   <item :titleLabel="'Step'" :title="$route.params.steptitle" :log="item.log"></item>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import Item from '@/components/Item'

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
  }
}
</script>
