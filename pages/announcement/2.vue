<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] bg-white xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px]">
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div class="text-[#666]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        近期有很多不法份子冒充GDPAY商务邀请进行开户，骗取首充奖励。未避免您的损失请各位合作伙伴在开户前，先核对真实身份<br />
        GDpay唯一官方网站：
        <a class="cursor-pointer text-blue" href="https://www.gdpay333.com/" target="_blank">https://www.gdpay333.com/</a> <br />
        GDPay唯一官方商务飞机：@GDPAY<br />
        <QrcodeImage src="images/anno2.png" />
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        另外 GDPay官方人员不会以任何形式向您发送转款链接<br />
        特此公告
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '防骗公告',
        date: '2023-02-15'
      }
    }
  }
}
</script>
