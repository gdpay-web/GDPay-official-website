<template>
  <div class="pt-[20vw] xl:mt-0 xl:pt-[150px] xl:bg-nav-bg bg-no-repeat bg-contain bg-bottom xl:flex xl:w-[1200px] xl:m-auto xl:pb-[15px] xl:justify-between">
    <div class="flex items-center ml-[4.63vw] xl:w-[300px]">
      <div class="w-[17.593vw] h-[17.593vw] bg-white rounded-full shadow-gd mr-[3vw] gd-border flex-c-c xl:min-w-[96px] xl:w-[96px] xl:h-[96px] xl:mr-[16px]">
        <img :src="tabs.find((e) => e.route === $route.name).src" class="w-[6.667vw] xl:w-[40px]" alt="" />
      </div>
      <div>
        <p class="text-blue text-[5.556vw] xl:text-[30px]">
          {{ tabs.find((e) => e.route === $route.name).title }}
        </p>
        <p class="text-[3.333vw] text-[#333333] xl:text-[18px]">
          {{ tabs.find((e) => e.route === $route.name).content }}
        </p>
      </div>
    </div>
    <ul class="flex px-[3.981vw] justify-center mt-[5.278vw] xl:mt-[50px] xl:pl-0 xl:pr-[130px]">
      <li v-for="item in tabs" class="w-[20.833vw] leading-[8.426vw] text-[2.963vw] text-center gd-rounded mx-[1.3vw] xl:w-[113px] xl:leading-[45px] xl:text-[16px] cursor-pointer" :class="[item.route !== $route.name ? 'text-blue bg-white' : 'text-white bg-blue']" @click="$router.push({ name: item.route })">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(['tabs'])
</script>
