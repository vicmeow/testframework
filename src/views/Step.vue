<template>
  <div class="wrapper">
    <the-sidebar :placeholder="'Search steps...'"
                 :items="steps"
                 :routename="'step'"
                 :labels="['step', '+']">

        <router-link slot="back" to="/projects" tag="span" exact class="label">Go back</router-link>

      </the-sidebar>

   <item :titleLabel="'Step'" :title="$route.params.steptitle" :log="item"></item>
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
