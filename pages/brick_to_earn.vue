<template>
  <div class="xl:pt-[79px]">
    <div class="fixed w-[100vw]">
      <Header type="dark" />
    </div>
    <img src="/images/bg-pc-brick.jpeg" alt="" class="w-[100vw] hidden xl:block">
    <img src="/images/bg-brick.jpeg" alt="" class="w-[100vw] block xl:hidden">
    <div class="xl:w-[1200px] xl:m-auto">
      <button class="text-[4.444vw] gd-rounded h-[14.815vw] w-[90.741vw] m-auto flex-c-c xl:h-[80px] xl:w-[490px] xl:rounded-[13px] xl:text-[24px] bg-blue text-white mt-[64px] mb-[108px]" @click="$nuxt.$router.push('/assist/15')">
        <img src="images/book-solid.png" class="w-[7.593vw] mr-[2vw] xl:w-[40px] xl:mr-[11px] object-cover" alt="" />
        {{ '搬砖教程' }}
      </button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const advantageList = [
  {
    src: 'images/face-smile-regular.png',
    title: '简单',
    content: '遵从“极致简单”的产品设计理念小白用户也能快速入手'
  },
  {
    src: 'images/shield-halved-solid.png',
    title: '安全',
    content: '多重保护技术保障您的数字资产安全放心管理您的钱包'
  },
  {
    src: 'images/user-astronaut-solid.png',
    title: '省心',
    content: '严格的风控和24小时人工服务为您打造无忧OTC交易环境'
  },
  {
    src: 'images/jet-fighter-up-solid.png',
    title: '极速',
    content: '全新模式与强大生态伙伴为您带来未曾有过的交易速度'
  }
]

const aboutList = [
  {
    src: 'images/scale-balanced-solid.png',
    title: '恒定1:1人民币汇率',
    content: '与其他数字货币不同，GD币承诺永久无涨跌、也不加入任何第三方交易所。无论何时，都可以1:1在人民币和GD币之间自由兑换'
  },
  {
    src: 'images/globe-solid.png',
    title: '稳定、安全、100%兑换',
    content: '全球数十万人使用，秒级交易匹配。GDPAY官方联合全球多个跨国集团共同保底，无需担心持有的GD币无法兑换'
  },
  {
    src: 'images/earth-asia-solid.png',
    title: '全球通用、自由度',
    content: 'GD币使用区块链技术具有高度匿名的特性，交易无迹可寻。世界范围内已有上千家大型商户支持GD币，全球支付无障碍'
  }
]
</script>
