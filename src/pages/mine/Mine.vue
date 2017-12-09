<template>
  <div class="mine">
    <div class="mine-head">
      <div class="switch-user-type">
        <span class="current-type left-type">参与者</span><span class="right-type">主办方</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .mine{
    .mine-head{
      height: 150px;
      background-color: #eb8256;
      .switch-user-type{
        text-align: center;
        padding-top: 10px;
        .left-type{
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .right-type{
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        .current-type{
          background-color: #fff;
          color: #eb8256;
        }
        span{
          color: #eb8256;
          padding: 2px 5px;
          font-size: 12px;
          background-color: #ffbca0;
        }
      }
    }
  }
</style>
