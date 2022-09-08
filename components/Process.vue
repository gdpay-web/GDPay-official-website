<template>
  <div class="flex-c-c flex-col my-[4vw]">
    <h3 class="text-[4.444vw] text-blue font-bold">
      {{ title }}
    </h3>
    <img src="images/A.png" class="w-[7.13vw]" alt="" />
  </div>
</template>

<script setup>
const props = defineProps(['title'])
</script>
