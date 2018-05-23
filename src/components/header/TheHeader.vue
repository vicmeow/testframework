<template>
  <header class="header">
    <div class="logo">xhub</div>
    <the-nav/>
  </header>
</template>

<script>
import TheNav from '@/components/header/TheNav'
export default {
  name: 'TheHeader',
  components: {
    TheNav
  }
}
</script>
