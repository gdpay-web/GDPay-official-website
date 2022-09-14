<template>
  <div>
    <header class="pt-[3.246vw] px-[4.63vw] flex justify-between items-center xl:h-[79px] xl:pt-0 xl:px-[30px] xl:bg-white xl:shadow-gd-pc xl:fixed xl:w-full xl:z-10 xl:top-0">
      <img src="images/logo.png" class="w-[24.074vw] xl:w-[173px] cursor-pointer" alt="" @click="$router.push('/')" />
      <img src="images/menu.png" class="w-[6.944vw] xl:hidden" alt="" @click="visiable = !visiable" />
      <ul class="text-[#666666] text-[21px] hidden xl:flex">
        <li class="cursor-pointer" :class="{ 'text-blue': $route.path === '/' }" @click="goto('/')">GDPAY</li>
        <li
          class="ml-[44px] cursor-pointer"
          :class="{ 'text-blue': $route.path === '/solution' || $route.path === '/situation' || $route.path === '/document' || $route.path === '/source-download' }"
          @click="goto('/solution')"
        >
          开放支付
        </li>
        <li class="ml-[44px] cursor-pointer" :class="{ 'text-blue': $route.path === '/download' }" @click="goto('/download')">下载APP</li>
        <li class="ml-[44px] cursor-pointer" :class="{ 'text-blue': $route.path === '/announcement' }" @click="goto('/announcement')">最新公告</li>
        <li class="ml-[44px] cursor-pointer" :class="{ 'text-blue': $route.path === '/assist' }" @click="goto('/assist')">帮助中心</li>
      </ul>
    </header>
    <div class="relative" v-show="visiable">
      <ul class="absolute right-[4.63vw] w-[31.204vw] h-[50.463vw] bg-white/50 text-center rounded-[0.648vw] text-[2.963vw] text-[#333333] flex flex-col justify-between">
        <li class="leading-[10vw] under-line" @click="goto('/')">GDPAY</li>
        <li class="leading-[10vw] under-line" @click="goto('/solution')">开放支付</li>
        <li class="leading-[10vw] under-line" @click="goto('/download')">下载APP</li>
        <li class="leading-[10vw] under-line" @click="goto('/announcement')">最新公告</li>
        <li class="leading-[10vw]" @click="goto('/assist')">帮助中心</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const visiable = ref(false)
const goto = (path) => {
  $nuxt.$router.push(path)
  visiable.value = false
}
</script>
