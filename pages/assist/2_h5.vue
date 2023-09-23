<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p
      class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]"
    >
      {{ data.title }}
    </p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p v-for="line in data.content" class="text-[2.963vw] mt-[6vw] xl:mt-[2vw] text-justify xl:text-[18px]" :key="line">
        {{ line[0] }}<br />
        {{ line[1] }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-d-h5',
  data() {
    return {
      data: {
        title: 'GDPay有什么优势和特色？',
        date: '2022-09-06',
        content: [
          ['1. 稳定代币', 'GDB锚定RMB，1:1兑换，帮助用户实现RMB与数字货币的双向兑换，自由参与数字资产交易与投资。'],
          ['2. 资金安全', 'GDPay钱包采用金融级别运维风控系统，多维防护，确保资产安全。'],
          ['3. 去中心化，不受银行风控影响', 'RMB与GDB兑换，将GDB充值至合作平台交易、从平台提至GDPay钱包，有效保护银行卡流水，确保资金链不受银行风控，保护个人银行卡及资产安全。'],
          ['4. 全新积分系统', 'GDPay钱包新推出积分系统，使用积分可参与幸运抽奖，有机会赢取各种大奖！']
        ]
      }
    }
  }
}
</script>
