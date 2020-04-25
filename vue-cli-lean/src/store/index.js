import Vue from 'vue'
import vuex from 'vuex'

import example from './example.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    example: example
  }
})
