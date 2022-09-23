<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p class="text-[3.704vw] mt-[4.815vw] font-bold xl:text-[22px]">{{ data.title }}</p>
    <p class="text-[2.407vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div class="text-[#666]">
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">GDB 是一种拥有稳定价值的加密货币。GDB锚定RMB价值，兑换比例为1:1，即1GDB=1RMB；</p>
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">GDPay是专用于GDB的钱包，集存储、转账、交易功能为一体。</p>
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">您可以使用GDPay钱包APP，随时方便地进行资产储备与兑换，自由转账、买入、卖出GDB代币；也可以使用GDPay在游戏平台充值或者提现。</p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '什么是GDPay和GDB？',
        date: '2022-09-06'
      }
    }
  }
}
</script>
