<!-- 在Son2.vue中通过辅助函数的方式实现需求 -->
<template>
    <div class="box">
        <h2>Son2子组件</h2>
        从vuex中获取的值:{{ count }}<label ></label>
        <br>
        <button @click="operateCount(-1)">值-1</button>
        <button @click="operateCount(-5)">值-5</button>
        <button @click="operateCount(-10)">值-10</button>
        <button @click="changeTitle('Sasuke')">更改标题</button>
        <button @click="setAsyncCount(777)">1秒后设置值为777</button>
        <hr>
        <div>{{ list }}</div>
        <div>{{ filterNum }}</div>

        <hr>
        <div>Name:{{ userInfo.name }}</div>
        <button @click="changeInfo({name:'Boluo',age:23})">Change Info</button>
        <button @click="asyncChangeInfo({name:'Stan',age:24})">Change Info after is</button>
        <div>Theme:{{ setting.theme }}</div>
        <button @click="changeTheme('Sakura')">Change Theme</button>

        <hr>
        <div>Name_Upper:{{ upperCaseName }}</div>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name: 'Son2Page',
  computed: {
    // mapGetters 和 mapState都是映射属性，需添加到computed对象中
    ...mapState(['count', 'title', 'list', 'setting']),
    ...mapState('user', ['userInfo']),
    ...mapGetters(['filterNum']),
    ...mapGetters('user', ['upperCaseName'])

  },
  methods: {
    // mapMutations 和 mapGetters 都是映射方法，需添加到methods对象中
    ...mapMutations(['changeCount', 'operateCount', 'changeTitle']),
    ...mapMutations('user', ['changeInfo']),
    ...mapMutations('setting', ['changeTheme']),
    ...mapActions(['setAsyncCount']),
    ...mapActions('user', ['asyncChangeInfo'])
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
