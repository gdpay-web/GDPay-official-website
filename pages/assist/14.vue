<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] xl:w-[1200px] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]">{{ data.title }}</p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        若您是买家，在交易过程中遇到卖家收到款不放行等问题，请耐心等待。倒计时结束后页面上将出现“交易申诉”按钮，您可以点击该按钮进行申诉；
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        若您是卖家，在交易过程中一直未收到汇款，或是遇到汇款方与买家付款信息不一致等问题，请不要点击“放行”按钮，并耐心等待。倒计时结束后页面上将出现“交易申诉”按钮，您可以点击该按钮进行申诉。
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">1. 在交易页面下方点击“交易申诉”（此处以卖家为例，买家也可进行同样操作）：</p>
      <AssistImage src="images/a38.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        2. 填入您的问题描述，并上传相关证据图片（如和买家的聊天记录截图、收款账户流水明细截图等），然后点击“提交”（若有多张图，可分多次提交）：
      </p>
      <AssistImage src="images/a39.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">3. 在页面下方可以看到您提交的申诉内容；客服介入后，其回复内容也将在下方展示：</p>
      <AssistImage src="images/a40.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '交易出现问题怎么办？',
        date: '2022-09-06'
      }
    }
  }
}
</script>
