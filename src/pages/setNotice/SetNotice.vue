<template>
  <div class="set-notice">
    <x-header title="消息通知设置"></x-header>
    <div class="set-notice-container">
      <group>
        <x-switch title="接收消息通知" v-model="receiveNotice"></x-switch>
      </group>
      <group>
        <x-switch title="声音" v-model="voice"></x-switch>
        <x-switch title="震动" v-model="shake"></x-switch>
      </group>
      <group>
        <x-switch title="免打扰" v-model="disturbing"></x-switch>
      </group>
    </div>
  </div>
</template>
<script>
import { XHeader, XSwitch, Group } from 'vux'
export default {
  components: {
    XHeader,
    XSwitch,
    Group
  },
  data () {
    return {
      receiveNotice: true,
      voice: true,
      shake: false,
      disturbing: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .set-notice{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .set-notice-container{
      overflow: auto;
      flex: 1;
      height: 100%;
    }
  }
</style>

