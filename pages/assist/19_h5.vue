<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">公链协议是什么意思?</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        公链协议(Public Blockchain)，也称"公有链”、“网络 协议"、”公链协议"，指的是全世界任何人都有权限 读取、发送且获得有效确认的共识，去中心化程度很高。
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">什么是TRC20?</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        TRC20其实就是一种基于波场TRON的网络协议，通 过TRC20发送USDT具有速度快、费用低的优点。目前GDPay钱包的USDT已支持TRC20网络协议
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: '什么是公链协议?什么是TRC20?',
        date: '2022-11-30'
      }
    }
  }
}
</script>
