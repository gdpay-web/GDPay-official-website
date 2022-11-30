<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]">{{ data.title }}</p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">您可以使用GDPay钱包APP，进入GDB交易市场方便地挂单出售GDB。</p>
      <video width="320" height="240" autoplay class="mx-auto xl:w-[390px] w-[42vw] shadow-lg mt-[20px] xl:mt-[40px]" controls>
        <source src="videos/assist_6.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">1. 在首页点击“卖币”按钮：</p>
      <AssistImage src="images/a22.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        2. 填入卖币金额，选择拆分方式及收款方式（可多选），然后点击“确认出售”。这里我们出售100GDB，选择“可拆分”，并同时选择银行卡和微信支付两种收款方式：
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[14px] text-blue bg-[#eee] xl:p-[15px] rounded-[7px]">
        注意：若选择“可拆分”，那么当买家在购买您的GDB时，可以只购买部分金额；而若选择“不可拆分”，那么当买家在购买您的GDB时，必须完整购买您出售的全部金额。
      </p>
      <AssistImage src="images/a23.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">3. 然后输入支付密码（注意，是支付密码，不是登录密码），然后点击“提交”：</p>
      <AssistImage src="images/a24.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">4. 这样，您就成功地在市场中挂出了卖单。接下来，就请耐心等待其他买家进行购买吧：</p>
      <AssistImage src="images/a25.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">5. 在等待的过程中，您随时可以在首页或是“订单”页面中查看您的卖单状态：</p>
      <div class="flex flex-row">
        <AssistImage src="images/a26.png" />
        <AssistImage src="images/a27.png" />
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
        title: '如何出售GDB？ 1. 挂单',
        date: '2022-09-06'
      }
    }
  }
}
</script>
