<template>
  <div class="tables">
    <TheSidebar :placeholder="'Search tables...'" :items="tables"/>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'

export default {
  name: 'Projects',
  components: {
    TheSidebar
  },
  data: () => ({
    tables: [
      {
        name: 'Table 1',
        type: 'table',
        status: 'error',
        data: {
          'test cases': 123
        }
      },
      {
        name: 'Table 2',
        type: 'table',
        status: 'success',
        data: {
          'test cases': 123
        }
      },
      {
        name: 'Table 3',
        type: 'table',
        status: 'success',
        data: {
          'test cases': 123
        }
      },
      {
        name: 'Table 4',
        type: 'table',
        status: 'success',
        data: {
          'test cases': 123
        }
      },
      {
        name: 'Table 5',
        type: 'table',
        status: 'error',
        data: {
          'test cases': 123
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
