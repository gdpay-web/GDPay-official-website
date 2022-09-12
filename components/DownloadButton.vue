<template>
  <button class="text-[4.444vw] rounded-[1.759vw] h-[14.815vw] w-[90.741vw] m-auto flex-c-c" :class="type === 'blue' ? 'bg-blue text-white' : 'bg-white text-blue'">
    <img v-if="type === 'blue'" src="images/logo-w.png" class="w-[7.593vw] mr-[2vw]" alt="" />
    <img v-else src="images/logo-blue.png" class="w-[7.593vw] mr-[2vw]" alt="" />
    下载APP
  </button>
</template>
<script setup>
defineProps(['type'])
</script>
