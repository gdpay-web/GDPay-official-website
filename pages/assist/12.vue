<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] xl:w-[1200px] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p class="text-[3.704vw] mt-[4.815vw] font-bold xl:text-[22px]">{{ data.title }}</p>
    <p class="text-[2.407vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div>
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">若忘记登录密码，您可以通过您的手机号找回密码；</p>
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">
        若忘记支付密码，请联系客服重置密码。在首页点击左上角的客服图标；或在下方点击“我的”进入个人页面，然后点击左上角的客服图标，打开在线客服链接：
      </p>
      <div class="flex flex-col xl:flex-row">
        <AssistImage src="images/a14.png" />
        <AssistImage src="images/a79.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '忘记密码怎么办？',
        date: '2022-09-06'
      }
    }
  }
}
</script>
