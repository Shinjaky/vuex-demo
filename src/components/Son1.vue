<!-- 在Son1.vue中通过原生的方式实现需求 -->
<template>
    <div class="box">
        <h2>Son1子组件</h2>
        从vuex中获取的值:<label >{{this.$store.state.count}}</label>
        <br>
        <button @click="handleAdd(1)">值+1</button>
        <button @click="handleAdd(5)">值+5</button>
        <button @click="handleAdd(10)">值+10</button>
        <button @click="changeTitle()">更改标题</button>
        <button @click="handleAction(200)" >1秒后设置值为200</button>

        <hr>

        <div>{{ $store.state.list }}</div>
        <div>{{ $store.getters.filterNum }}</div>

        <hr>
        <div>Name:{{ $store.state.user.userInfo.name }}</div>
        <button @click="mod_changeInfo({name:'KisameLee',age:30})">Change Info</button>
        <button @click="mod_asyncChangeInfo({name:'Stan',age:24})">Change Info after 1s</button>
        <div>Theme:{{ $store.state.setting.theme }}</div>
        <button @click="mod_changeTheme('Dark')">Change Theme</button>
        <button @click="mod_asyncChangeTheme('RedWine')">Change Theme after 1s</button>
        <hr>
        <div>Name_Upper:{{ $store.getters['user/upperCaseName'] }}</div>

    </div>
</template>

<script>
// import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'Son1Page',
  /* computed: {
    ...mapState(['count'])
  }, */
  methods: {
    handleAdd (num) {
      this.$store.commit('operateCount', num)
    },
    handleAction (num) {
      this.$store.dispatch('setAsyncCount', num)
    },
    changeTitle () {
      this.$store.commit('changeTitle', 'Naruto')
    },
    mod_changeInfo (info) {
      this.$store.commit('user/changeInfo', info)
    },
    mod_changeTheme (str) {
      this.$store.commit('setting/changeTheme', str)
    },
    mod_asyncChangeInfo (info) {
      this.$store.dispatch('user/asyncChangeInfo', info)
    },
    mod_asyncChangeTheme (theme) {
      this.$store.dispatch('setting/asyncTheme', theme)
    }

    // ...mapMutations(['operateCount', 'changeCount']),
    /* trigg (num) {
      this.$store.dispatch('setAsyncCount', num)
    }, */

    // ...mapActions(['setAsyncCount'])
  }
}

</script>

<style lang="css" scoped>
    .box{
        border: 3px solid #ccc;
        width: 400px;
        padding: 10px;
        margin: 20px;
    }
    h2{
        margin-top: 10px;
    }
</style>
