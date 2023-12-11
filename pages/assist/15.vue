<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <!-- <video width="320" height="240" autoplay class="mx-auto xl:w-[390px] w-[42vw] shadow-lg mt-[20px] xl:mt-[40px]" controls>
        <source src="videos/assist_15.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">1. 首先在首页点击<b>“搬砖赚钱”</b></p>
      <AssistImage src="images/ofpay/a34.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">2. 搬砖需要使用<b>矿工币</b>，如果没有矿工币的话，我们可以先充值<b>USDT</b></p>
      <AssistImage src="images/ofpay/a35.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">3. USDT点击<b>充币</b></p>
      <AssistImage src="images/ofpay/a36.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">4. 扫码充值</p>
      <AssistImage src="images/ofpay/a37.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">5. <b>将USDT划转成矿工币</b></p>
      <div class="flex flex-row">
        <AssistImage src="images/ofpay/a38.png" :is_two="true" />
      </div>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">6. 当我们有矿工币的时候就可以点击<b>开始搬砖</b></p>
      <AssistImage src="images/ofpay/a39.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">7. 输入搬砖金额</p>
      <AssistImage src="images/ofpay/a40.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">8. 生成搬砖订单如下</p>
      <AssistImage src="images/ofpay/a41.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">9. 当有用户购买交易时，需要我们进行<b>订单确认</b></p>
      <div class="flex flex-row">
        <AssistImage src="images/ofpay/a42.png" :is_two="true" />
      </div>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">10. <b>等待买家付款</b></p>
      <AssistImage src="images/ofpay/a43.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">11. 买家付款完成后需要我们<b>确认到账</b>，然后<b>放行</b></p>
      <AssistImage src="images/ofpay/a44.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">12. 完成交易后就可以获得对应的奖励</p>
      <AssistImage src="images/ofpay/a45.png" />
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">13. 可以查看矿工币明细来查看对应的奖励记录：</p>
      <AssistImage src="images/ofpay/a46.png" :is_two="true" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '搬砖教程',
        date: '2022-11-04'
      }
    }
  }
}
</script>
