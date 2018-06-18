<template>
  <div class="item">
    <span class="label">Title</span>
    <h1 class="item-title">{{title}}</h1>

    <ul class="labels">
      <li class="label-item">
        <span class="label label-type">Created</span>
        <span class="label-info">18.06.2018</span>
        </li>
      <li class="label-item">
        <span class="label label-type">Updated</span>
        <span class="label-info">18.06.2018</span>
      </li>
      <li class="label-item">
        <span class="label label-type">Author</span>
        <span class="label-info">Ola Nordmann</span>
      </li>
    </ul>

    <div class="item-description">
      <span class="label">Description</span>
      <div class="description">
        Duis vitae feugiat massa, ut posuere est. Etiam facilisis bibendum mi in aliquet. Vivamus lobortis orci quis lectus mattis elementum. Quisque molestie finibus leo, et lacinia ipsum convallis nec.
      </div>
    </div>

    <slot name="list-right"></slot>
    <slot name="list-bottom"></slot>
    <div class="log" v-if="log">
      <pre><code>{{log}}</code></pre>
    </div>
  </div>
</template>

/**
 * TODO:
 * - Get item info from the store (created, updated, author, description)
 * - Add export, import edit buttons
 */

<script>
export default {
  name: 'Item',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
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
    margin-right: 2rem

  .label-item span
    display: block

  .item-description
    margin: .5rem 0

  .description
    max-width: 700px

</style>

<style lang="sass">
  @import 'src/assets/styles/style-variables.sass'

  .item
    grid-column: 4 / 12
    background: white
    border-radius: .2rem
    padding: .5rem 1rem 2rem

  .item-title
    margin-bottom: .5rem

  .log
    margin: 1rem 0
    white-space: pre
    background: $black
    color: white
    padding: 1rem
    border-radius: .2rem
    line-height: 1.5
</style>
