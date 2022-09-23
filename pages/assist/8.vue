<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] xl:w-[1200px] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p class="text-[3.704vw] mt-[4.815vw] font-bold xl:text-[22px]">{{ data.title }}</p>
    <p class="text-[2.407vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div>
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">
        您可以在任意支持GDPay的游戏平台进行充值。充值过程中，需要扫描平台方提供的二维码时，请打开GDPay钱包，并点击下方中间的按钮进行扫码：
      </p>
      <AssistImage src="images/a77.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '在游戏平台充值',
        date: '2022-09-06'
      }
    }
  }
}
</script>
