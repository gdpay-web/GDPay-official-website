<template>
  <div class="w-[90.741vw] rounded-[1.759vw] bg-white mx-auto flex items-center pt-[5vw] pb-[8.426vw] shadow-gd" :class="{ 'mt-[4.63vw]': index }">
    <div class="w-[34.537vw]">
      <img :src="data.src" class="w-[11.852vw] m-auto" alt="" />
    </div>
    <div class="w-[53.148vw]">
      <h3 class="text-blue text-[5.556vw]">{{ data.title }}</h3>
      <p class="text-[#666666] text-[3.333vw] leading-tight text-justify">
        {{ data.content }}
      </p>
    </div>
  </div>
</template>
<script setup>
defineProps(['data', 'index'])
</script>
