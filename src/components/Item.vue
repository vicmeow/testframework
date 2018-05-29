<template>
  <div class="item">
    <span class="label">{{titleLabel}} title</span>
    <h1 class="item-title">{{title}}</h1>
    <slot name="list-right"></slot>
    <slot name="list-bottom"></slot>
  </div>
</template>

<script>

export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      required: true
    },
    titleLabel: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
  .item
    grid-column: 4 / 12
    background: white
    border-radius: .2rem
    padding: .5rem 1rem
</style>
