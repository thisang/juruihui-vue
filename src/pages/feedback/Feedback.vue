<template>
  <div class="feedback">
    <x-header title="意见反馈">
      <span slot="right">提交</span>
    </x-header>
    <div class="feedback-container">
      <group title="问题和意见">
        <x-textarea v-model="opinion" placeholder="请详细描述你的问题和意见"></x-textarea>
      </group>
      <group>
        <x-input title="联系方式" v-model="contact" placeholder="(选填,方便我们联系您)"></x-input>
      </group>
    </div>
  </div>
</template>
<script>
import { XHeader, XTextarea, Group, XInput } from 'vux'
export default {
  components: {
    XHeader,
    XTextarea,
    Group,
    XInput
  },
  data () {
    return {
      opinion: '',
      contact: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .feedback{
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    .feedback-container{
      flex: 1;
      height: 100%;
      overflow: auto;
    }
  }
</style>

