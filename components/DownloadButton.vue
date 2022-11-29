<template>
  <button class="text-[4.444vw] gd-rounded h-[14.815vw] w-[90.741vw] m-auto flex-c-c xl:h-[80px] xl:w-[392px] xl:rounded-[13px] xl:text-[24px] xl:m-0" :class="type === 'blue' ? 'bg-blue text-white' : 'bg-white text-blue'" @click="download()">
    <img v-if="type === 'blue'" src="images/logo-w.png" class="w-[7.593vw] mr-[2vw] xl:w-[40px] xl:mr-[11px]" alt="" />
    <img v-else src="images/logo-blue.png" class="w-[7.593vw] mr-[2vw]" alt="" />
    {{ title || '下载APP' }}
  </button>
</template>
<script setup>
// import json from 'static/config.json'
const props = defineProps(['type', 'download', 'title'])

const download = () => {
  if (props.download) {
    if (/iPad|iPhone/i.test(navigator.userAgent)) {
      location.href = props.title === 'IOS下载 (荐)' ? window.config.IOSURL : window.config.IOSURL_BACKUP
    } else {
      location.href = window.config.androidURL
    }
  } else {
    $nuxt.$router.push('/download')
  }
}
</script>
