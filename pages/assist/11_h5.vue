<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">以下途径可以获得积分：</p>
      <p class="text-[2.963vw] mt-[3vw] text-justify xl:text-[18px]">1. 每日签到可获得积分，连续多日签到将获得更多积分；</p>
      <p class="text-[2.963vw] mt-[1.6vw] text-justify xl:text-[18px]">2. 完成每日任务获得每日活跃度，活跃度足够时可领取积分；</p>
      <p class="text-[2.963vw] mt-[1.6vw] text-justify xl:text-[18px]">3. 完成累计任务，可直接获得积分；</p>
      <p class="text-[2.963vw] mt-[1.6vw] text-justify xl:text-[18px]">4. 在任意游戏平台使用GDPay上分/下分，将按金额比例获得积分。</p>
      <p class="text-[2.963vw] mt-[3vw] text-justify xl:text-[18px]">注意：积分将定期清零，请留意积分页面上方的“积分清零时间”。</p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: '如何获得积分？',
        date: '2022-09-06'
      }
    }
  }
}
</script>
