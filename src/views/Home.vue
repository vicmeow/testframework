<template>
  <div class="wrapper">
    <div class="content-bg"></div>
    <TheSidebar :placeholder="'Search projects...'" :labels="labels" :items="items" :name="'sidebar'"/>
    <main-content :title="item.name" :tables="item.tables" :runs="item.runs">
    </main-content>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import MainContent from '@/components/MainContent'

export default {
  name: 'Home',
  components: {
    TheSidebar,
    MainContent
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: false
    }
  },
  mounted(){
    //this.$router.replace({name: 'project', item: this.item})
  }
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .projects
    display: contents
  
  .content-bg
    background: $white
    grid-area: mn
    z-index: 0

</style>
