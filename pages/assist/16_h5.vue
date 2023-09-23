<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">充币多久到账?</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        充值经过一定数量的网络确认就可以到账。网络 确认是由区块上的网络矿工进行自动确认的，平台是 无法干预区块确认的，所以相应的确认时间是不固定 的，每个币种所需的确认数不-样，需要以区块的确 认为准。
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">GDPay钱包的USDT充币支持TRC20网络，一般10秒 左右即可到账</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">如何查询充币是否到账?</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">如果您充值的是TRC20网络的USDT，可以直接通 过tron的区块浏览器查询，经过1个区块确认即代表 已经到账</p>
      <a class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] text-blue" href="https://tronscan.org/#l?" target="_blank">https://tronscan.org/#l?</a>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: '充币多久到账',
        date: '2022-11-30'
      }
    }
  }
}
</script>
