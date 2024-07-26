const state = {
  userInfo: {
    name: 'Kakashi',
    age: 22
  },
  score: 88
}
const mutations = {
  changeInfo (state, newInfo) {
    state.userInfo = newInfo
  }
}
const actions = {
  async asyncChangeInfo (context, newInfo) {
    setTimeout(() => {
      // context上下文，默认提交的就是自己模块的Mutations和Actions
      context.commit('changeInfo', newInfo)
    }, 1000)
  }
}
const getters = {
  upperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
