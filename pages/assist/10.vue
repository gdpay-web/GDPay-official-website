<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] xl:w-[1200px] xl:m-auto xl:px-0 xl:w-[950px] xl:min-h-[63vh]">
    <p class="text-[3.704vw] mt-[4.815vw] font-bold xl:text-[22px]">{{ data.title }}</p>
    <p class="text-[2.407vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">{{ data.date }}</p>
    <div>
      <p class="text-[2.963vw] mt-[2vw] text-justify xl:text-[18px]">积分系统是GDPay全新推出的特色系统，您可以使用积分进行幸运抽奖，并有机会获得超级大奖！请点击下方的“积分”进入积分页面详细查看哦！</p>
      <AssistImage src="images/a36.png" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d',
  data() {
    return {
      data: {
        title: '什么是积分？',
        date: '2022-09-06'
      }
    }
  }
}
</script>
