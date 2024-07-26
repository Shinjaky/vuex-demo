const state = {
  theme: 'light',
  desc: '描述文本'
}
const mutations = {
  changeTheme (state, str) {
    state.theme = str
  }
}
const actions = {
  async asyncTheme (context, theme) {
    setTimeout(() => {
      context.commit('changeTheme', theme)
    }, 1000)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
