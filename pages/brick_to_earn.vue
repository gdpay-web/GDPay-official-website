<template>
  <div class="xl:pt-[79px]">
    <div class="absolute xl:fixed w-[100vw]">
      <Header type="dark" />
    </div>
    <img src="/images/bg-brick-pc.png" alt="" class="w-[100vw] hidden xl:block">
    <img src="/images/bg-brick.png" alt="" class="w-[100vw] block xl:hidden">
    <!-- v-touch:swipe="swipeHandler" -->
    <div class="xl:w-[1200px] xl:m-auto">
      <button class="text-[4.444vw] gd-rounded h-[14.815vw] w-[90.741vw] m-auto flex-c-c xl:h-[80px] xl:w-[490px] xl:rounded-[13px] xl:text-[24px] bg-blue text-white mb-[108px]" @click="$nuxt.$router.push('/assist/15')">
        <img src="images/book-solid.png" class="w-[7.593vw] mr-[2vw] xl:w-[40px] xl:mr-[11px] object-cover" alt="" />
        {{ '搬砖教程' }}
      </button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {})

onBeforeUnmount(() => {})
</script>
