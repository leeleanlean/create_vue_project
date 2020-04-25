<template>
  <div class="login">
    <!-- background -->
    <div class="background"></div>
    <!-- form -->
    <div class="flex">
      <div class="logo">logo</div>
      <div class="form">
        <input type="text" placeholder="1">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component({})
export default class Login extends Vue {
  // mounted
  private mounted() {
    this.init()
  }
  // methods
  private init(): void {
    console.log('init')
  }
}
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('~@/assets/images/Login/bg.jpeg') center no-repeat;
  background-size: cover;
}
.flex {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 330px;
  margin: -165px 0 0 -300px;
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.2);
  div {
    height: 100%;
    &.logo {
      width: 345px;
      background: linear-gradient(90deg, #02b3f7 0, #1279ef 100%);
    }
    &.form {
      flex: 1
    }
  }
}
</style>
