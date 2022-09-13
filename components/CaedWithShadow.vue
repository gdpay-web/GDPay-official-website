<template>
  <li
    class="w-[90.741vw] gd-rounded bg-white mx-auto flex items-center pt-[5vw] pb-[8.426vw] shadow-gd mt-[4.63vw] first:mt-0 xl:w-[490px] xl:h-[135px] xl:inline-flex xl:mt-[20px] xl:first:mt-[20px] xl:odd:ml-[100px] xl:even:mr-[100px] xl:py-0"
  >
    <div class="w-[34.537vw] xl:w-[186px]">
      <img :src="data.src" class="w-[11.852vw] m-auto xl:w-[64px]" alt="" />
    </div>
    <div class="w-[53.148vw] xl:w-[275px]">
      <h3 class="text-blue text-[5.556vw] xl:text-[30px]">{{ data.title }}</h3>
      <p class="text-[#666666] text-[3.333vw] leading-tight text-justify xl:text-[18px]">
        {{ data.content }}
      </p>
    </div>
  </li>
</template>
<script setup>
defineProps(['data', 'index'])
</script>
