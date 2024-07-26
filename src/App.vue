<template>
  <div id="app">
    <h1>根组件-{{ count }}-{{ title }}</h1>
    <input :value="count" @keyup.enter="changeNum" type="text">
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>

<script>
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'
import { mapMutations, mapState } from 'vuex'
console.log(mapState(['title', 'count']))

export default {
  name: 'app',
  created () {
    console.log(this.$store.state.count)
  },
  data: function () {
    return {

    }
  },
  methods: {
    changeNum (e) {
      this.changeCount(e.target.value)
    },
    ...mapMutations(['operateCount', 'changeCount'])
  },
  computed: {
    ...mapState(['count', 'title'])
  },
  components: {
    Son1,
    Son2
  }
}
</script>

<style lang="css" scoped>
  #app{
    width: 600px;
    margin: 20px auto;
    border:3px solid #ccc;
    border-radius: 3px;
    padding: 10px;
  }
</style>
