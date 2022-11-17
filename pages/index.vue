<template>
  <div class="bg-home-bg bg-contain bg-no-repeat xl:bg-pc-home-bg xl:pt-[79px]">
    <Header />
    <div class="xl:w-[1200px] xl:m-auto">
      <section class="mt-[49.63vw] text-[9.259vw] text-blue px-[4.63vw] leading-tight xl:mt-[142px] xl:flex xl:text-[70px] xl:px-0">
        <p ref="target">助您安全</p>
        <p class="xl:ml-[30px]">自由支付</p>
      </section>
      <section class="text-[3.333vw] text-[#333333] px-[4.63vw] mt-[1.5vw] xl:text-[23px] xl:flex xl:mt-[5px] xl:px-0">
        <p>GD币 - 世界通用数字资产恒定人民币</p>
        <p>汇率，100%互兑</p>
      </section>
      <p class="text-[5.556vw] text-blue mt-[13.148vw] px-[4.63vw] xl:text-[40px] xl:mt-[54px] xl:px-0">无需远行即可畅玩全球</p>
      <DownloadButton class="mt-[35.963vw] xl:mt-[64px] cursor-pointer" type="blue" :download="false" />
      <ul class="bg-[#efefef] mt-[11vw] py-[5.556vw] xl:mt-[65px] xl:bg-transparent xl:py-0 xl:flex xl:items-center xl:flex-wrap">
        <CaedWithShadow v-for="(item, index) in advantageList" :data="item" :index="index" :key="item.title" />
      </ul>
      <Title title="关于GD币" :subtitle="['使用GDPAY管理、世界通用的、恒定人民币汇率数字资产']" class="mt-[10.648vw] xl:mt-[130px]" />
      <ul class="xl:flex xl:justify-between xl:mt-[55px]">
        <li v-for="(item, index) in aboutList" class="w-[90.741vw] gd-rounded mx-auto flex items-center pt-[8.611vw] pb-[9.259vw] gd-border mt-[4.63vw] first:mt-[7.315vw] xl:inline-block xl:text-center xl:w-[390px] xl:mt-0 xl:first:mt-0 xl:pt-[33px] xl:pb-0">
          <div class="w-[34.537vw] xl:w-full">
            <img :src="item.src" class="w-[14.907vw] m-auto xl:w-[80px]" alt="" />
          </div>
          <div class="w-[53.148vw] xl:w-full xl:p-[30px] xl:text-left">
            <h3 class="text-blue text-[5vw] xl:text-[27px]">{{ item.title }}</h3>
            <p class="text-[#666666] text-[3.333vw] leading-tight text-justify xl:text-[18px] xl:mt-[15px]">
              {{ item.content }}
            </p>
          </div>
        </li>
      </ul>
      <Title title="使用GDPAY" :subtitle="['自由兑换、自由支付GDB币']" class="mt-[10.648vw] xl:mt-[130px]" />
      <div class="px-[4.63vw] mt-[7vw] xl:mt-[60px] xl:px-0">
        <h3 class="text-blue text-[5vw] xl:text-[37px]">轻松支付</h3>
        <p class="text-[#666666] text-[3.333vw] leading-tight mt-[3vw] xl:text-[21px] xl:mt-[10px]">使用GDPAY，您可以轻松购买GD币，并存入您的GDPAY账户。您可以随时使用GD币支付给受支持的商家。</p>
      </div>
      <div class="xl:flex xl:justify-between xl:mt-[60px]">
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[7.5vw] gd-border mt-[7.315vw] tag before:content-['1.'] xl:w-[300px] xl:flex-col xl:text-center xl:mt-0 xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/mobile-alt-solid.png" class="h-[14.259vw] xl:h-[77px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">电子支付购买GD币</p>
        </div>
        <Process title="购买" />
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[6.111vw] gd-border tag before:content-['2.'] xl:w-[300px] xl:flex-col xl:text-center xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/deposit.png" class="h-[11.852vw] xl:h-[70px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">购买GD币存入GDPAY账户</p>
        </div>
        <Process title="支付" />
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[5.833vw] gd-border tag before:content-['3.'] xl:w-[300px] xl:flex-col xl:text-center xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/cart-w-logo.png" class="h-[11.852vw] xl:h-[72px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">随时使用GD币轻松支付给商家</p>
        </div>
      </div>
      <div class="px-[4.63vw] mt-[7vw] xl:mt-[60px] xl:px-0">
        <h3 class="text-blue text-[5vw] xl:text-[37px]">随时兑现</h3>
        <p class="text-[#666666] text-[3.333vw] leading-tight mt-[3vw] xl:text-[21px] xl:mt-[10px]">您从商家提取GD币至您的GDPAY账户后，无论何时，您都可以打开您的GDPAY，将GD币出售，并获得人民币。</p>
      </div>
      <div class="xl:flex xl:justify-between xl:mt-[60px]">
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[5.648vw] gd-border mt-[7.315vw] tag before:content-['1.'] xl:w-[300px] xl:flex-col xl:text-center xl:mt-0 xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/house.png" class="h-[11.852vw] xl:h-[64px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">从商家提取GD币至GDPAY账户</p>
        </div>
        <Process title="购买" />
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[6.111vw] gd-border tag before:content-['2.'] xl:w-[300px] xl:flex-col xl:text-center xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/withdrawal.png" class="h-[11.852vw] xl:h-[70px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">从GDPAY账户卖出GD币</p>
        </div>
        <Process title="支付" />
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[5.278vw] gd-border tag before:content-['3.'] xl:w-[300px] xl:flex-col xl:text-center xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/cash.png" class="h-[10.37vw] xl:h-[56px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">获得人民币</p>
        </div>
      </div>
      <Title title="开放支付" :subtitle="['如果您是商家，欢迎您加入GDB币生态', '简单几步立即拥有数十万GDB币用户']" class="mt-[10.648vw] xl:mt-[130px]" />
      <div class="mt-[10.185vw] flex-c-c flex-wrap xl:mt-[40px]">
        <img src="images/solution.png" class="w-[34.722vw] xl:w-[225px]" alt="" />
        <img src="images/situation.png" class="w-[34.722vw] xl:w-[225px]" alt="" />
        <img src="images/document.png" class="w-[34.722vw] xl:w-[225px]" alt="" />
        <img src="images/social.png" class="w-[34.722vw] xl:w-[225px]" alt="" />
      </div>
      <p class="mt-[12vw] text-[4.444vw] text-[#666666] text-center xl:text-[24px] xl:mt-[50px]">支持平台</p>
      <div class="w-[90.741vw] h-[21.296vw] gd-rounded mx-auto flex items-center justify-around gd-border mt-[3.704vw] mb-[20.556vw] xl:border-none xl:justify-center xl:mt-[30px] xl:h-auto xl:w-auto xl:mb-[80px]">
        <img src="images/android-brands.png" class="h-[11.852vw] xl:h-[56px] xl:mx-[50px]" alt="" />
        <img src="images/apple-brands.png" class="h-[11.852vw] xl:h-[56px] xl:mx-[50px]" alt="" />
        <img src="images/HTML5.png" class="h-[11.852vw] xl:h-[56px] xl:mx-[50px]" alt="" />
        <img src="images/EDGE.png" class="h-[11.852vw] xl:h-[56px] xl:mx-[50px]" alt="" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const transition = {
  mode: 'in-out',
  css: false,
  enter(el, done) {
    console.log('enter')
    done()
  },
  leave(el, done) {
    console.log('leave')
    done()
  }
}

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

onBeforeUnmount(() => {})
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
