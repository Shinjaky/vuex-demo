const state = {
  theme: 'light',
  desc: '描述文本'
}
const mutations = {
  changeTheme (state, str) {
    state.theme = str
  }
}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
