<template>
  <div class="flex-c-c flex-col my-[4vw] xl:flex-row">
    <h3 class="text-[4.444vw] text-blue font-bold xl:text-[24px]">
      {{ title }}
    </h3>
    <img src="images/A.png" class="w-[7.13vw] xl:w-[40px] xl:-rotate-90" alt="" />
  </div>
</template>

<script setup>
defineProps(['title'])
</script>
