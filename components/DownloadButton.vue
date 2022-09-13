<template>
  <button
    class="text-[4.444vw] gd-rounded h-[14.815vw] w-[90.741vw] m-auto flex-c-c xl:h-[80px] xl:w-[490px] xl:rounded-[13px] xl:text-[24px] xl:m-0"
    :class="type === 'blue' ? 'bg-blue text-white' : 'bg-white text-blue'"
    @click="download()"
  >
    <img v-if="type === 'blue'" src="images/logo-w.png" class="w-[7.593vw] mr-[2vw] xl:w-[40px] xl:mr-[11px]" alt="" />
    <img v-else src="images/logo-blue.png" class="w-[7.593vw] mr-[2vw]" alt="" />
    下载APP
  </button>
</template>
<script setup>
defineProps(['type'])

const androidUrl = 'https://zhqp-xjp.oss-ap-southeast-1.aliyuncs.com/gdpay/gdpay_v1.01.apk'
const download = () => {
  if (/iPad|iPhone/i.test(navigator.userAgent)) {
    // 当前设备是移动设备
  } else {
    location.href = androidUrl
  }
}
</script>
