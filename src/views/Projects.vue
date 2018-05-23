<template>
  <div class="projects">
    <TheSidebar :placeholder="'Search projects...'"/>
    <MainContent/>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import MainContent from '@/components/MainContent'

export default {
  name: 'Projects',
  components: {
    TheSidebar,
    MainContent
  }
}
</script>

<style lang="sass">

  .projects
    display: contents

</style>
