<template>
  <div class="bg-download-bg bg-contain bg-no-repeat xl:bg-none">
    <img src="images/download-pc-bg.png" class="hidden xl:block w-full" alt="" />
    <Header />
    <div class="xl:w-[1200px] xl:m-auto xl:absolute xl:top-[200px] xl:left-[50%] xl:translate-x-[-50%]">
      <p class="text-blue text-[8.333vw] text-center mt-[18vw] xl:mt-0 xl:text-[63px] xl:text-left">助您安全、自由支付</p>
      <p class="text-[3.333vw] text-[#666666] text-center xl:text-[25.2px] xl:text-left">GD币 - 世界通用数字资产，恒定人民币汇率</p>
      <p class="text-[3.333vw] text-[#666666] text-center xl:text-[25.2px] xl:text-left">100%互兑 无需远行即可畅玩全球</p>
      <div class="w-[555px] hidden xl:inline-block text-center">
        <canvas id="canvas" class="w-[150px] mt-[50px] inline-block"></canvas>
        <p class="text-[20px] text-blue mt-[20px]">100%互兑 无需远行即可畅玩全球</p>
      </div>
      <button class="text-white text-[4.444vw] bg-blue gd-rounded h-[14.815vw] w-[90.741vw] mx-[4.63vw] mt-[100vw] flex-c-c mb-[10vw] xl:hidden">
        <img src="images/logo-w.png" class="w-[7.593vw] mr-[2vw]" alt="" />
        下载APP
      </button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import qrcode from 'qrcode'
import { onMounted } from 'vue'

onMounted(() => {
  qrcode.toCanvas(document.getElementById('canvas'), 'https://www.gdpay8.com/download/redirect', { width: 150 }, function (error) {
    if (error) console.error(error)
    console.log('success!')
  })
})
</script>
