<template>
  <div>
    <div class="container">Home</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as api from '../data/api/api'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  mounted () {
    console.log('home')
    this.init()

    this.model()
  },
  methods: {
    // 初始化
    init () {
      console.log('默认vuex:', this.userInfo)
      const params = {
        username: 'lean',
        age: 18,
        token: '12348978972348231893'
      }
      this.$store.dispatch('setUserInfo', params)
      console.log('修改vuex:', this.userInfo)
      this.$store.dispatch('setUserInfo', {clear: true})
      console.log('清空vuex:', this.userInfo)
    },

    // model
    model () {
      const params = {
        name: 'lee',
        age: 18
      }
      api.Ids(params).then(res => {
        console.log(res)
      }).catch(res => {})
    }
  }
}
</script>

<style scoped>

</style>
