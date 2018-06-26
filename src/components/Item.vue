<template>
  <main class="content">
    <span class="label">Title</span>
    <h1 class="item-title">{{item.title}}</h1>

    <ul class="labels">
      <li class="label-item">
        <span class="label label-type">Created</span>
        <span class="label-info">{{item.date}}</span>
      </li>
      <li v-if="item.updated" class="label-item">
        <span class="label label-type">Updated</span>
        <span class="label-info">18.06.2018</span>
      </li>
      <li v-if="item.author" class="label-item">
        <span class="label label-type">Author</span>
        <span class="label-info">Ola Nordmann</span>
      </li>
    </ul>

    <div class="item-description">
      <span class="label">Description</span>
      <div v-if="item.description" class="description">
        {{item.description}}
      </div>
    </div>

    <slot name="list-right"/>
    <slot name="list-bottom"/>
    <span v-if="item.log" class="label">Log</span>
    <div v-if="item.log" class="log">
      <pre><code>{{item.log}}</code></pre>
    </div>
  </main>
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
    item: {
      type: Object,
      required: true,
      default: function () {
        return {
          name: 'Unavailable'
        }
      }
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

  main.content
    grid-area: mn
    flex: 3
    background: $white
    border-radius: .2rem
    padding: 1rem

  .item-title
    margin-bottom: .5rem

  .log
    margin: .5rem 0
    white-space: pre
    background: $black
    color: $white
    padding: 1rem
    border-radius: .2rem
    line-height: 1.5
</style>
