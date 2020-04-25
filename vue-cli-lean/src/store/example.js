export default {
  state: {
    userInfo: {
      username: 'lee',
      token: 'dhjwkehfsgasadsdasasd',
      age: 20
    }
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    }
  },
  mutations: {
    // 调用方法 $store.commit('', data)
    SER_USER_INFO (state, data) {
      data.clear
        ? state.userInfo = {}
        : state.userInfo = Object.assign({}, state.userInfo, data)
    },

    // 清空用户信息
    CLEAR_USER_INFO (state) {
      state.userInfo = ''
    }
  },
  actions: {
    // 调用方法 $store.dispatch('', data)
    setUserInfo ({commit, state}, data) {
      commit('SER_USER_INFO', data)
    },

    // 清空用户信息
    clearUserInfo ({commit, state}, data) {
      commit('CLEAR_USER_INFO')
    }
  }
}
