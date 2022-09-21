<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] xl:w-[1200px] xl:m-auto xl:px-0">
    <p class="text-[3.704vw] mt-[4.815vw] font-bold xl:text-[22px]">{{ data.title }}</p>
    <p class="text-[2.407vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div>
      <p v-for="line in data.content" class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">{{ line }}</p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '如何获得积分？',
        content: [
          '以下途径可以获得积分：',
          '1. 每日签到可获得积分，连续多日签到将获得更多积分；',
          '2. 完成每日任务获得每日活跃度，活跃度足够时可领取积分；',
          '3. 完成累计任务，可直接获得积分；',
          '4. 在任意游戏平台使用GDPay上分/下分，将按金额比例获得积分。',
          '注意：积分将定期清零，请留意积分页面上方的“积分清零时间”。'
        ]
      }
    }
  }
}
</script>
