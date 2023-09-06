<template>
  <div>
    <header
      class="pt-[3.246vw] px-[3.63vw] flex justify-between items-center xl:h-[79px] xl:pt-0 xl:px-[30px] xl:bg-white xl:shadow-gd-pc xl:fixed xl:w-full xl:z-10 xl:top-0 xl:bg-gradient-to-b xl:from-[#fff] xl:via-[#f5f4f4] xl:to-[#ecebeb] w-[100vw] z-10">
      <img src="images/logo-w-text.png" class="w-[24.074vw] xl:w-[173px] cursor-pointer xl:hidden" alt=""
        @click="$router.push('/')" v-if="type === 'dark'" />
      <img src="images/logo.png" class="w-[24.074vw] xl:w-[173px] cursor-pointer hidden xl:block" alt=""
        @click="$router.push('/')" v-if="type === 'dark'" />

      <img src="images/logo.png" class="w-[24.074vw] xl:w-[173px] cursor-pointer" alt="" @click="$router.push('/')"
        v-if="type !== 'dark'" />
      <img src="images/menu.png" class="w-[6.944vw] xl:hidden" alt="" @click="visiable = !visiable" />
      <ul class="text-[#666666] text-[21px] hidden xl:flex">
        <li class="cursor-pointer font-medium" :class="{ 'text-blue': $route.path === '/' }" @click="goto('/')">GDPAY</li>
        <li class="ml-[44px] cursor-pointer font-medium" :class="{ 'text-blue': $route.path === '/brick_to_earn' }"
          @click="goto('/brick_to_earn')">搬砖赚钱</li>
        <li class="ml-[44px] cursor-pointer font-medium"
          :class="{ 'text-blue': $route.path === '/solution' || $route.path === '/situation' || $route.path === '/document' || $route.path === '/source-download' }"
          @click="goto('/solution')">
          开放支付
        </li>
        <li class="ml-[44px] cursor-pointer font-medium" :class="{ 'text-blue': $route.path === '/download' }"
          @click="goto('/download')">下载APP</li>
        <li class="ml-[44px] cursor-pointer font-medium" :class="{ 'text-blue': $route.path === '/announcement' }"
          @click="goto('/announcement')">最新公告</li>
        <li class="ml-[44px] cursor-pointer font-medium" :class="{ 'text-blue': $route.path === '/assist' }"
          @click="goto('/assist')">帮助中心</li>
      </ul>
    </header>
    <div class="relative" v-show="visiable">
      <ul
        class="absolute z-10 right-[4.63vw] w-[32.204vw] m-h-[50.463vw] text-center rounded-[0.648vw] text-[3.263vw] text-[#333333] flex flex-col justify-between bg-white font-medium border-[1px] border-black/10 top-[30px]">
        <template v-if="$route.query.from">
          <li class="leading-[11vw] under-line" :class="{ 'text-blue': $route.path === '/announcement' }"
            @click="goto('/announcement?from=gdpay_h5')">最新公告</li>
          <li class="leading-[11vw]" :class="{ 'text-blue': $route.path === '/assist' }"
            @click="goto('/assist?from=gdpay_h5')">帮助中心</li>
        </template>
        <template v-else>
          <li class="leading-[11vw] under-line" :class="{ 'text-blue': $route.path === '/' }" @click="goto('/')">GDPAY
          </li>
          <li class="leading-[11vw] under-line" :class="{ 'text-blue': $route.path === '/brick_to_earn' }"
            @click="goto('/brick_to_earn')">搬砖赚钱</li>
          <li class="leading-[11vw] under-line" :class="{ 'text-blue': $route.path === '/solution' }"
            @click="goto('/solution')">开放支付</li>
          <li class="leading-[11vw] under-line" :class="{ 'text-blue': $route.path === '/download' }"
            @click="goto('/download')">下载APP</li>
          <li class="leading-[11vw] under-line" :class="{ 'text-blue': $route.path === '/announcement' }"
            @click="goto('/announcement')">最新公告</li>
          <li class="leading-[11vw]" :class="{ 'text-blue': $route.path === '/assist' }" @click="goto('/assist')">帮助中心
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

defineProps(['type'])

const visiable = ref(false)
const goto = (path) => {
  $nuxt.$router.push(path)
  visiable.value = false
}

onMounted(() => {
  if ($nuxt.$route.query.from && window) {
    window.from = 'gdpay_h5'
  }
})
</script>
