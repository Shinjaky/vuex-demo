// 这里面存放vuex核心代码

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

// 插件安装
Vue.use(Vuex)

// 创建仓库(空)
const store = new Vuex.Store({
  state: {
    title: 'Kakashi',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  mutations: {
    // 所有mutation函数，第一个参数，都是state
    operateCount (state, num) {
      state.count += num
    },
    changeCount (state, num) {
      state.count = +num
    },
    changeTitle (state, str) {
      state.title = str
    }
  },
  actions: {
    // context 上下文(此处未分模块，可以当成store仓库)
    // context.commit('mutation名字',额外参数)
    setAsyncCount (context, num) {
      // 此处用setTimeout模拟异步，
      // 之后大部分场景是发送请求获得数据
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  getters: {
    filterNum (state) {
      return state.list.filter(item => item > 5)
    }
  },
  modules: {
    user,
    setting
  }
})

console.log(store.state.title)

export default store
