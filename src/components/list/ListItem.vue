<template>
  <li class="list-item">
    <!-- Item title -->
    <h2 class="item-title">{{title}}</h2>
    <!-- First data set -->
    <div class="dataset" v-if="tc">
      <span>Test cases</span>
      <span>{{tc}}</span>
    </div>
    <!-- Second data set 
    <div class="dataset">
      <span>Tables</span>
      <span>{{item.tables}}</span>
    </div>-->
    <!-- Third data set 
    <div class="dataset">
      <span>Runs</span>
      <span>{{item.runs}}</span>
    </div>-->
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    tc: {
      type: Number,
      required: false
    },
    tables: {
      type: Number,
      required: false
    },
    runs: {
      type: Number,
      required: false
    },
    steps: {
      type: String,
      required: false
    }
  }
}
</script>


<style lang="sass" scoped>

  @import 'src/assets/styles/style-variables.sass'

  .success
    border-left: .4rem solid $green

  .error
    border-left: .4rem solid $red

  .current
    border-left: .4rem solid $blue


</style>
