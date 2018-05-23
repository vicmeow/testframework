<template>
  <div class="projects">
    <TheSidebar :placeholder="'Search projects...'" :items="projects"/>
    <MainContent :title="title"/>
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
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'Name'
    }
  },
  data: () => ({
    projects: [
      {
        name: 'Abc',
        type: 'project',
        status: 'error',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'Abcd',
        type: 'project',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'B',
        type: 'project',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'A',
        type: 'project',
        status: 'success',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      },
      {
        name: 'C',
        type: 'project',
        status: 'error',
        data: {
          'test cases': 123,
          tables: 3,
          runs: 34
        }
      }
    ]
  })
}
</script>

<style lang="sass">

  .projects
    display: contents

</style>
