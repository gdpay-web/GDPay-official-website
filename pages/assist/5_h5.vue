<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:m-auto xl:px-0 xl:w-[955px] xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">您可以使用GDPay钱包APP，进入GDB交易市场方便地购买GDB。</p>
      <video width="320" height="240" autoplay class="mx-auto xl:w-[390px] w-[42vw] shadow-lg mt-[20px] xl:mt-[40px]" controls>
        <source src="videos/assist_5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">1. 在首页点击“买币”按钮：</p>
      <AssistImage src="images/a7.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        2. 在“快捷买币”页面，填入要购买的GDB金额，并选择一种支付方式（只能选择双方都支持的方式）。这里我们购买100GDB，并选择银行卡支付：
      </p>
      <AssistImage src="images/a15.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        3. 或是点击“自选买币”进入卖单市场页面，并在列表中选择一个卖单点击“购买”，然后输入金额和支付方式。这里我们购买100GDB，并选择银行卡支付：
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[14px] text-blue bg-[#eee] xl:p-[15px] rounded-[7px]">
        注意：卖单有“可拆分”和“不可拆分”两种。若选择“可拆分”类型的卖单，您可以购买任意小于该单的金额；而若选择“不可拆分”类型的卖单，那么您只能购买该单的完整金额。
      </p>
      <div class="flex flex-row">
        <AssistImage src="images/a16.png" />
        <AssistImage src="images/a17.png" />
      </div>

      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">4. 接下来，请耐心等待卖家确认交易。在等待过程中，您也可以点击“联系卖家”，向卖家发消息：</p>
      <AssistImage src="images/a18.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">5. 在卖家确认交易后，您会看到卖家的收款信息。按收款信息进行付款，然后点击“我已付款，通知卖家”：</p>
      <AssistImage src="images/a19.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">6. 接下来，请耐心等待卖家确认收款并放行：</p>
      <AssistImage src="images/a20.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">7. 卖家放行了，交易成功！别忘了给满意的卖家5星好评哦！</p>
      <AssistImage src="images/a21.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: '如何购买GDB？',
        date: '2022-09-06'
      }
    }
  }
}
</script>
