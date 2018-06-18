<template>
  <div class="wrapper">
      <transition name="fade" mode="out-in">
      <router-view :key="$route.title"></router-view>
    </transition>
  </div>
</template>

<style lang="sass">
  .item
    grid-column: 4 / 12
    background: white
    border-radius: .2rem
    padding: .5rem 1rem

  .fade-enter-active, .fade-leave-active
    transition: all .3s

  .fade-enter, .fade-leave-to
    opacity: 0
    transform: translateY(1rem)

</style>
