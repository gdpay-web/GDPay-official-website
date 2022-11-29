<template>
  <div>
    <div class="flex-c-c">
      <img src="images/title-decoration.png" class="w-[22.13vw] xl:w-[167px]" alt="" />
      <h3 class="text-[6.019vw] text-black font-bold text-center mx-[2.315vw] xl:text-[45.5px]">
        {{ title }}
      </h3>
      <img src="images/title-decoration.png" class="rotate-180 w-[22.13vw] xl:w-[167px]" alt="" />
    </div>
    <p class="text-[3.333vw] text-[#666666] text-center xl:text-[25.2px] font-medium" :class="{ 'mt-[6.204vw] xl:mt-[47px]': !index }" v-for="(item, index) in subtitle">
      {{ item }}
    </p>
  </div>
</template>

<script setup>
defineProps(['title', 'subtitle'])
</script>
