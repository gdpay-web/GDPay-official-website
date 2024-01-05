<template>
  <div class="bg-download-bg bg-contain bg-no-repeat xl:bg-none">
    <img src="images/download-pc-bg.png" class="hidden xl:block w-full" alt="" />
    <Header />
    <div class="xl:w-[1200px] xl:m-auto xl:absolute xl:top-[200px] xl:left-[50%] xl:translate-x-[-50%]">
      <p class="text-blue text-[8.333vw] text-center pt-[18vw] xl:mt-0 xl:text-[63px] xl:text-left font-medium xl:pt-[0px]">助您安全、自由支付</p>
      <p class="text-[3.333vw] text-[#666666] text-center xl:text-[25px] xl:text-left">GD币 - 世界通用数字资产，恒定人民币汇率</p>
      <p class="text-[3.333vw] text-[#666666] text-center xl:text-[25px] xl:text-left">100%互兑 无需远行即可畅玩全球</p>
      <div class="w-[555px] hidden xl:inline-block text-center">
        <canvas id="canvas" class="w-[150px] mt-[50px] inline-block rounded-lg border-[1px] border-black/10"></canvas>
        <p class="text-[20px] text-blue mt-[20px]">请使用手机扫码下方二维码开始下载APP</p>
      </div>
      <DownloadButton class="mt-[100vw] mb-[10vw] cursor-pointer xl:hidden" type="blue" :download="true" v-if="!isIOS" />
      <DownloadButton class="mt-[100vw] cursor-pointer xl:hidden" type="blue" :download="true" title="IOS下载 (荐)" v-if="isIOS" />
      <DownloadButton class="mt-[2vw] mb-[10vw] cursor-pointer xl:hidden" type="blue" :download="true" title="IOS备用下载" v-if="isIOS" />
    </div>
    <Footer class="hidden xl:block" />
  </div>
</template>

<script>
import qrcode from 'qrcode'
export default {
  layout: 'download',
  data() {
    return {
      isIOS: false
    }
  },
  mounted: function () {
    qrcode.toCanvas(document.getElementById('canvas'), window.config.qrcode_url || 'https://www.gdpay8.com/download', { width: 180 }, function (error) {
      if (error) console.error(error)
      console.log('success!')
    })
    this.isIOS = /iPad|iPhone/i.test(navigator.userAgent)
  }
}
</script>
