<template>
  <div class="to-pay">
    <x-header title="待付款"></x-header>
    <div class="to-pay-container">
      <no-data info="还没有待付款的凭证喔" iconName="icon-daifukuan"></no-data>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import NoData from '../../components/noData/NoData'
export default {
  components: {
    XHeader,
    NoData
  }
}
</script>
