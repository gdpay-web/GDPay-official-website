<template>
  <li class="w-[43.51vw] gd-rounded bg-white mx-[1.85vw] xl:mx-auto py-[3.7vw] px-[0.5vw] items-center shadow-gd mb-[4.63vw] first:mt-0 xl:w-[490px] xl:h-[135px] xl:inline-flex xl:mt-[20px] xl:first:mt-[20px] xl:odd:ml-[100px] xl:even:mr-[100px] xl:py-0 xl:mb-0">
    <div class="w-[100%] xl:w-[186px]">
      <img :src="data.src" class="w-auto h-[7.2vw] xl:h-auto m-auto xl:w-[64px]" alt="" />
    </div>
    <div class="w-[100%] xl:w-[275px]">
      <h3 class="text-blue font-medium my-[5px] text-center xl:text-left text-[4.2vw] xl:text-[30px] xl:my-[0px]">{{ data.title }}</h3>
      <p class="text-[#666666] text-center text-[12px] leading-tight xl:text-justify xl:text-[18px]">
        {{ data.content }}
      </p>
    </div>
  </li>
</template>
<script setup>
defineProps(['data', 'index'])
</script>
