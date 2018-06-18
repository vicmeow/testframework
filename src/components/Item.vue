<template>
  <div class="item">
    <span class="label">{{titleLabel}} title</span>
    <h1 class="item-title">{{title}}</h1>

    <ul class="labels">
      <li class="label-item">
        <span class="label label-type">Label</span>
        <span class="label-info">DD.MM.YYYY</span>
        </li>
      <li class="label-item">
        <span class="label label-type">Label</span>
        <span class="label-info">DD.MM.YYYY</span>
      </li>
    </ul>

    <slot name="list-right"></slot>
    <slot name="list-bottom"></slot>
    <div class="log" v-if="log">
      <pre><code>{{log}}</code></pre>
    </div>
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
    },
    log: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>

  .labels
    display: contents

    .label-item
      display: inline-block
      margin-right: 1rem

    .label-item span
      display: block

</style>

<style lang="sass">
  @import 'src/assets/styles/style-variables.sass'

  .item
    grid-area: mn
    background: white
    border-radius: .2rem
    padding: .5rem 1rem

  .item-title
    margin-bottom: .5rem

  .log
    grid-column: 4/8
    margin: 1rem 0
    white-space: pre
    background: $black
    color: white
    padding: 1rem
    border-radius: .2rem
    line-height: 1.5
</style>
