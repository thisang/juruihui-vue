<template>
  <header class="header">
    <slot class="left" name="head-left"></slot>
    <slot class="right" name="head-right"></slot>
    <img class="logo" src="./images/logo-font-fff.png">
  </header>
</template>
<script>
export default {
  name: 'TopHead'

}
</script>

<style lang="scss" scoped>
  .header{
    background-color: #eb8256;
    position: fixed;
    width: 100%;
    height: 40px;
    padding: 3px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    .logo{
      width: 80px;
    }
    .left{
      font-size: 12px;
      position: absolute;
      left: 10px;
    }
    .right{
      font-size: 12px;
      position: absolute;
      right: 10px;
    }
  }
</style>
