<template>
  <li 
    class="list-item"> 
    <!-- Data sets -->
      <router-link
        class="item-title"
        :to="{ name: name, params: {item: item, labels: [name + 's', '+']} }"
        >
          {{item.name}}
        </router-link>
    <div class="dataset" v-for="(value, key) in item.data" :key="key">
      <span class="data-title" v-if="sidebar">{{key}}</span>
      <span>{{value}}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    sidebar: {
      type: Boolean,
      required: false
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="sass" scoped>

  =border($width, $color)
    border-left: $width solid $color

  @import 'src/assets/styles/style-variables.sass'

  .list-item
    background: $white
    border-radius: 3px
    margin-bottom: .5rem
    box-sizing: border-box
    transition: transform .3s ease-in-out
    box-shadow: 0 .1rem .4rem $bg-darker
    *
      margin: .1rem 0
    &:hover
      transform: translateX(-.5rem)

  .item-title
    font-size: 1rem
    font-weight: normal
    cursor: pointer

  .dataset
    display: flex
    justify-content: space-between
  
  .data-title::first-letter
    text-transform: capitalize

  .project
    padding: .5rem 1rem
    &.success
      +border(.4rem, $green)
    &.error
      +border(.4rem, $red)

    .item-title
      font-weight: bold

  .table, .run
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: baseline
    min-height: 35px
    padding: .2rem 1rem
    &.success
      +border(.25rem, $green)
    &.error
      +border(.25rem, $red)
    &.current
      +border(.25rem, $blue)

  h3
    font-weight: normal
    font-size: 1rem
  
  .router-link-exact-active
    color: $blue
  
  .active
    transform: translateX(-.5rem)
    box-shadow: 0 .5rem 1rem $bg-darker


</style>
