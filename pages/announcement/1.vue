<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] bg-white xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px]">{{ data.title }}</p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div class="text-[#666]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">'GD是一种拥有稳定价值的加密货币，GD币锚定RMB价值，即1GD=1RMB；</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">买卖币请通过在我司APP市场订单正常转币交易。卖币时一定要以收款账户有收到钱，才能转币。（私下联系以任何风控理由要求进行私下交易的都是骗子，请勿相信）',</p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: 'GD使用说明',
        date: '2022-09-07'
      }
    }
  }
}
</script>
