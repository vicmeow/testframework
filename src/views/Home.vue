<template>
  <div class="wrapper">

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
    labels: {
      type: Array,
      required: false
    }
  }
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .wrapper
    display: contents

  .content-bg
    background: $white
    grid-area: mn
    z-index: 0

</style>
