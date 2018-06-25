<template>
  <div class="wrapper">
    <div class="route-home">
      <h1>landing page</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style lang="sass">

  @import 'src/assets/styles/style-variables.sass'

  .route-home
    grid-column: 2/12
    border: 5px solid blue

  .wrapper
    display: contents

  .content-bg
    background: $white
    grid-area: mn
    z-index: 0

</style>
