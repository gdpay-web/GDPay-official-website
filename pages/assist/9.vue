<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] xl:w-[1200px] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p class="text-[3.704vw] mt-[4.815vw] font-bold xl:text-[22px]">{{ data.title }}</p>
    <p class="text-[2.407vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div>
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">
        您可以在任意支持GDPay的游戏平台进行提现。提现时需填写或提前绑定GDPay钱包地址，您可以在GDPay钱包首页上方找到钱包地址，并点击右侧按钮复制地址：
      </p>
      <AssistImage src="images/a78.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '在游戏平台提现',
        date: '2022-09-06'
      }
    }
  }
}
</script>
