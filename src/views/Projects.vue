<template>
  <div class="wrapper">
      <transition name="page" mode="in-out">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

/**
 * TODO:
 * - Add route transitions
 */

<style lang="sass">

  .page-enter-active, .page-leave-active
    transition: all .3s

  .page-enter, .page-leave-to
    opacity: 0
    transform: translateY(1rem)

</style>
