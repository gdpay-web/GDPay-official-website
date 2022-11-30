<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]">{{ data.title }}</p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">如何购买USDT?</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">一、通过各大交易所购买USDT</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        地址如下:<br />
        币安交易所:
        <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://www.binance.com" target="_blank">https://www.binance.com</a><br />
        欧易交易所: <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://www.okex.com" target="_blank">https://www.okex.com</a><br />
        中币交易所: <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://www.zb.com" target="_blank">https://www.zb.com</a><br />
        gate交易所: <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://www.gate.io" target="_blank">https://www.gate.io</a>
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">二、中国大陆翻墙vpn:</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        Opera浏览器: <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://www.opera.com/zh-cn" target="_blank">https://www.opera.com/zh-cn</a><br />
        PandaFan: <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://pandafan.website/pricing" target="_blank">https://pandafan.website/pricing</a><br />
        NordVPN: <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://nordvpn.com/zh/" target="_blank">https://nordvpn.com/zh/</a>
      </p>

    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '如何购买USDT',
        date: '2022-11-30'
      }
    }
  }
}
</script>
