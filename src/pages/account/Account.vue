<template>
  <div class="account">
    <x-header title="账户资料"></x-header>
    <div class="account-container">
      <group>
        <cell title="手机号" value="15272807523" is-link @click.native="operateType('phone')"></cell>
        <cell title="邮箱" value="未绑定邮箱" is-link @click.native="operateType('mail')"></cell>
      </group>
      <group>
        <cell title="修改密码" is-link @click.native="operateType('password')"></cell>
      </group>
      <popup v-model="showPopup" position="right" width="100%">
        <x-header :title="type === 'phone' ? '验证手机号' : (type === 'mail' ? '邮箱' : '设置登陆密码')" :leftOptions="leftOption" @on-click-back="showPopup = false">
          <span slot="right" @click="showPopup = false">提交</span>
        </x-header>
        <div class="account-inner-page">
          <div v-if="type === 'password'">
            <group>
              <x-input title="输入密码" v-model="oldPass" placeholder="请输入密码"></x-input>
              <x-input title="确认密码" v-model="newPass" placeholder="请再次输入密码"></x-input>
            </group>
          </div>
          <div v-else-if="type === 'mail'">
            <group>
              <x-input title="邮箱" v-model="newMail" placeholder="请输入邮箱"></x-input>
            </group>
          </div>
          <div v-else>
            <group>
              <x-input title="手机号" v-model="newPhone" placeholder="请输入手机号">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
              </x-input>
              <x-input title="验证码" v-model="newMail" placeholder="请输入短信中的验证码"></x-input>
            </group>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { XHeader, Group, Cell, Popup, XInput, XButton } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    Cell,
    Popup,
    XInput,
    XButton
  },
  data () {
    return {
      leftOption: {
        showBack: true,
        backText: '返回',
        preventGoBack: true
      },
      type: null, // 操作类型
      showPopup: false,
      oldPass: null,
      newPass: null,
      newMail: null,
      newPhone: null
    }
  },
  methods: {
    operateType (type) {
      this.type = type
      this.showPopup = true
    }
  }
}
</script>
<style lang="scss" scoped>
  .account{
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    .account-container{
      flex: 1;
      height: 100%;
      overflow: auto;
    }
  }
</style>
