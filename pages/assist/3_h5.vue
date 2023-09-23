<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:m-auto xl:px-0 xl:w-[929px] xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">为了您的资金安全，在使用GDPay钱包时，首先需要进行实名认证。</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">1. 在首页右上方点击“请先实名”按钮；或在下方点击“我的”进入个人页面，再点击“实名认证”:</p>
      <div class="flex flex-row">
        <AssistImage src="images/a1.png" />
        <AssistImage src="images/a2.png" />
      </div>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">2. 填入姓名、身份证号码，并上传身份证的正反面照片，然后点击“下一步”：</p>
      <AssistImage src="images/a3.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: '实名认证',
        date: '2022-09-06'
      }
    }
  }
}
</script>
