<template>
  <div class="flex-c-c flex-col my-[4vw] xl:flex-row mt-[-7vw] xl:mt-0">
    <h3 class="text-[4.444vw] text-blue font-bold xl:text-[24px]">
      {{ title }}
    </h3>
    <img src="images/A.png" class="mt-[4vw] xl:mt-[0px] w-[7.13vw] xl:w-[40px] -rotate-90" alt="" />
  </div>
</template>

<script setup>
defineProps(['title'])
</script>
