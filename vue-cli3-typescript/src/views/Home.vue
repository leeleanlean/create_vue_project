<template>
  <div>Home</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
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
</style>
