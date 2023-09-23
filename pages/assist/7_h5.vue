<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">当您在市场中挂出了卖单之后，如果有其他用户选择购买您的GDB，那么就进入下面的交易流程。</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">1. 若有其他用户选择购买您的GDB，那么您会在首页中看到您的卖单状态变为“确认交易中”。此时，点击该卖单进行查看：</p>
      <AssistImage src="images/a28-1.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">2. 也可以在“订单”页面中看到您所挂出的卖单状态变化，并点击“订单详情”查看您的卖单：</p>
      <AssistImage src="images/a28-2.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">3. 看到有一个用户想要购买您的GDB。如果您确定要和这个买家进行交易，就点击“确认交易”：</p>
      <AssistImage src="images/a30.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">4. 接下来，就请耐心等待买家向您付款吧。在等待过程中，您也可以点击“联系买家”，向买家发消息：</p>
      <AssistImage src="images/a31.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        5. 买家付款了，您会看到买家的付款信息。请及时查看您的收款账户，确认收到款项，并核对汇款方是否与买家付款信息一致。在确认无误之后，点击“放行”：
      </p>
      <AssistImage src="images/a32.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">6. 然后输入支付密码（注意，是支付密码，不是登录密码），然后点击“提交”：</p>
      <AssistImage src="images/a33.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">7. 交易成功！别忘了给满意的买家5星好评哦！</p>
      <AssistImage src="images/a34.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: '如何出售GDB？ 2. 交易',
        date: '2022-09-06'
      }
    }
  }
}
</script>
