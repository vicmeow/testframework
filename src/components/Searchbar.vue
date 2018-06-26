<template>
  <input :placeholder="placeholder" v-bind:value="value" type="search" class="searchbar" v-on:input="updateValue($event.target.value)">
</template>

/*
* TODO:
* - Add search icon
* - Add ARIA labels
*/

<script>
export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Search...'
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="sass" scoped>

  @import 'src/assets/styles/style-variables.sass'

  .searchbar
    -webkit-appearance: none
    min-height: 35px
    width: 100%
    margin-bottom: .5rem
    padding: 0 1rem
    box-shadow: 0 .1rem .4rem $bg-darker
    &::placeholder
      color: $grey
      opacity: 1
    &:focus
      transform: scale(1.05)

</style>
