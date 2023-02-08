<template>
  <div class="text-[3.333vw] text-[#666666] px-[4.9vw] min-h-[75vh] xl:w-[1200px] xl:m-auto xl:px-0 xl:min-h-[63vh]">
    <p class="fixed top-0 left-0 w-[100vw] text-center text-[4.6vw] py-[3.333vw] xl:relative xl:w-auto xl:py-0 xl:mt-[90px] xl:text-left xl:bg-transparent font-bold xl:text-[22px] text-blue xl:text-[#666] bg-[#f3f3f3]">{{ data.title }}</p>
    <p class="text-[2.407vw] mt-[17vw] my-[6.5vw] text-[#999999] xl:text-[14px] xl:my-[30px]">发布日期 {{ data.date }}</p>
    <div class="text-[#666] bg-white rounded-xl xl:border-[1px] xl:border-[#eee] xl:p-[30px] xl:min-h-[500px]">
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px] font-bold text-black">什么是USDT?</p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        USDT又称为泰达币(USDT)，是由美国Tether公
        司，为了与美元等值发行的一种代币，即1USDT=1
        美元，用户可以随时使用USDT与USD进行1:1兑换。
        为了严格遵守其公司所承诺的1比1保证金，其每增
        加1枚新的USDT，都会在其银行账户里增加1美元的
        账户资金，从而保证投资者随用随取的安全性。同时
        用户可以在Tether官网平台进行资金查询，以随时
        监督其资金安全性以保障透明度。

      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        USDT可以被传输、存储、使用，就像BTC、ETH
        或任何其他加密货币一样，用户可以通过主流交易所
        或GDPay钱包来进行交易和存储。
      </p>
      <p class="text-[2.963vw] mt-[4vw] xl:mt-[2vw] text-justify xl:text-[18px]">
        USDT用起来很简单。在全球各大主流交易平台;
        OKEX、币安等，可以通过场外交易购买USDT,在币
        币交易区它可以被用于购买比特币和其它加密货币。
        USDT也可以非常容易的从交易所移转到任何支持的
        钱包中。
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
        title: '什么是USDT?',
        date: '2022-11-30'
      }
    }
  }
}
</script>
