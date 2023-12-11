<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:m-auto xl:px-0 xl:w-[929px] xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">要使用OFPay钱包的各种功能，您需要绑定至少一种支付方式（用于收款/付款）。</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">1. 在下方点击“我的”进入个人页面，点击收付款方式，进到下一级页面，点击添“添加收付款方式 ”。先绑定一张银行卡吧；</p>
      <div class="flex flex-row">
        <AssistImage src="images/ofpay/a3.png" />
        <AssistImage src="images/ofpay/a4.png" />
      </div>

      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">2. 选择银行，填入银行卡号（必须使用和实名信息一致的本人银行卡），然后点击“确认”：</p>
      <AssistImage src="images/ofpay/a5.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">3. 然后输入支付密码（注意，是支付密码，不是登录密码），然后点击“提交”：</p>
      <AssistImage src="images/ofpay/a6.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">4. 这样，银行卡就绑定好了。再来绑定一个微信支付账号吧：</p>
      <div class="flex flex-row">
        <AssistImage src="images/ofpay/a7.png" />
      </div>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">5. 填入微信账号（同样必须使用和实名信息一致的本人微信号），上传微信收款二维码，然后点击“确认”：</p>
      <AssistImage src="images/ofpay/a8.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">6. 然后输入支付密码（注意，是支付密码，不是登录密码），然后点击“提交”：</p>
      <AssistImage src="images/ofpay/a9.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: '绑定支付方式',
        date: '2022-09-06'
      }
    }
  }
}
</script>
