<template>
  <div>
    <div class="flex-c-c">
      <img src="images/title-decoration.png" class="w-[22.13vw]" alt="" />
      <h3 class="text-[6.019vw] text-black font-bold text-center mx-[2.315vw]">
        {{ title }}
      </h3>
      <img
        src="images/title-decoration.png"
        class="rotate-180 w-[22.13vw]"
        alt=""
      />
    </div>
    <p
      class="text-[3.333vw] text-[#666666] text-center"
      :class="{ 'mt-[6.204vw]': !index }"
      v-for="(item, index) in subtitle"
    >
      {{ item }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'subtitle'])
</script>
