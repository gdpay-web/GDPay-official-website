<template>
  <div class="relative">
    <img src="./../static/images/bg.png" class="absolute z-[-1]" alt="" />
    <Header />
    <section
      class="mt-[49.63vw] text-[9.259vw] text-blue px-[4.63vw] leading-tight"
    >
      <p>助您安全</p>
      <p>自由支付</p>
    </section>
    <section class="text-[3.333vw] text-[#333333] px-[4.63vw] mt-[1.5vw]">
      <p>GD币 - 世界通用数字资产恒定人民币</p>
      <p>汇率，100%互兑</p>
    </section>
    <p class="text-[5.556vw] text-blue mt-[13.148vw] px-[4.63vw]">
      无需远行即可畅玩全球
    </p>
    <button
      class="text-white text-[4.444vw] bg-blue rounded-[1.759vw] h-[14.815vw] w-[90.741vw] mx-[4.63vw] mt-[35.963vw] flex-c-c"
    >
      <img
        src="./../static/images/logo-w.png"
        class="w-[7.593vw] mr-[2vw]"
        alt=""
      />
      下载APP
    </button>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  name: 'IndexPage',
  components: { Header },
}
</script>
