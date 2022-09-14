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
import json from 'static/config.json'
import { onMounted, ref } from 'vue'
defineProps(['type'])

const androidUrl = ref('')
const IOSURL = ref('')
onMounted(() => {
  androidUrl.value = json.androidURL
  IOSURL.value = json.IOSURL
})

const download = () => (location.href = /iPad|iPhone/i.test(navigator.userAgent) ? IOSURL.value : androidUrl.value)
</script>
