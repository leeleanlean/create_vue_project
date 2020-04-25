import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Lee from '@/pages/Lee'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/lee', name: 'Lee', component: Lee }
  ]
})
