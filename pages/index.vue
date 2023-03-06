<template>
  <div class="bg xl:pt-[79px] bg-[#fff] overflow-x-hidden">
    <Header />
    <Transition>
      <div v-if="isShowDialog" class="full-img fixed bg-black w-[100vw] h-[100vh] z-10 top-0 left-0 flex items-center content-center" @click="handleDialog">
        <video autoplay class="mx-auto xl:w-[80vw] w-[90vw] shadow-lg mt-[20px] xl:mt-[40px]" controls>
          <source src="videos/assist_21.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </Transition>
    <Transition>
      <div v-if="isShowDialogPromote" class="full-img fixed bg-black w-[100vw] h-[100vh] z-10 top-0 left-0 flex items-center content-center" @click="handleDialogPromote">
        <video autoplay class="mx-auto xl:w-[80vw] w-[90vw] shadow-lg mt-[20px] xl:mt-[40px]" controls>
          <source src="videos/GD Pay_x264.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </Transition>

    <div class="slide xl:h-[41vw] h-[170vw]">
      <TransitionGroup>
        <div v-if="slide_index === 0" class="slide-item absolute" @click="$router.push('/announcement/2')" key="home-slide-6">
          <img src="/images/slide_6.png" alt="" class="w-[100vw] hidden xl:block">
          <img src="/images/slide_6_m.png" alt="" class="w-[100vw] block xl:hidden">
        </div>
        <div v-if="slide_index === 1" class="slide-item absolute" @click="handleDialogPromote" key="home-slide-1">
          <img src="/images/slide_1.png" alt="" class="w-[100vw] hidden xl:block">
          <img src="/images/slide_1_m.png" alt="" class="w-[100vw] block xl:hidden">
        </div>
        <div v-if="slide_index === 2" class="slide-item absolute" @click="$router.push('/assist/5')" key="home-slide-2">
          <img src="/images/slide_2.png" alt="" class="w-[100vw] hidden xl:block">
          <img src="/images/slide_2_m.png" alt="" class="w-[100vw] block xl:hidden">
        </div>
        <div v-if="slide_index === 3" class="slide-item absolute" @click="$router.push('/assist/6')" key="home-slide-3">
          <img src="/images/slide_3.png" alt="" class="w-[100vw] hidden xl:block">
          <img src="/images/slide_3_m.png" alt="" class="w-[100vw] block xl:hidden">
        </div>
        <div v-if="slide_index === 4" class="slide-item absolute" @click="$router.push('/assist/15')" key="home-slide-4">
          <img src="/images/slide_4.png" alt="" class="w-[100vw] hidden xl:block">
          <img src="/images/slide_4_m.png" alt="" class="w-[100vw] block xl:hidden">
        </div>
        <div v-if="slide_index === 5" class="slide-item absolute" @click="$router.push('/assist/21')" key="home-slide-5">
          <img src="/images/slide_5.png" alt="" class="w-[100vw] hidden xl:block">
          <img src="/images/slide_5_m.png" alt="" class="w-[100vw] block xl:hidden">
        </div>
      </TransitionGroup>
    </div>
    <div class="xl:w-[1200px] xl:m-auto">
      <!-- <div class="flex mt-[19.63vw] xl:mt-[142px]">
        <div class="xl:w-[226px] xl:h-[250px] bg-white shadow-2xl rounded-[15px] xl:mr-[25px] xl:flex justify-center flex-wrap hidden">
          <canvas id="canvas" class="w-[200px] inline-block rounded-[15px]"></canvas>
          <div class="text-[18px] font-medium text-[#999] mt-[-30px]">
            扫描即可下载GDPAY
          </div>
        </div>
        <div>
          <section class="text-[9.259vw] text-blue px-[4.63vw] leading-tight xl:flex xl:text-[70px] xl:px-0 font-medium">
            <p ref="target">助您安全</p>
            <p class="xl:ml-[30px]">自由支付</p>
          </section>
          <section class="text-[3.333vw] text-[#333333] px-[4.63vw] mt-[1.5vw] xl:text-[23px] xl:flex xl:mt-[5px] xl:px-0">
            <p>GD币 - 世界通用数字资产恒定人民币</p>
            <p>汇率，100%互兑</p>
          </section>
          <p class="text-[5.556vw] text-blue mt-[10.148vw] px-[4.63vw] xl:text-[40px] xl:mt-[25px] xl:px-0 font-medium">无需远行即可畅玩全球</p>
        </div>
      </div> -->
      <!-- <div class="w-[41.666vw] h-[46.2vw] bg-white shadow-xl rounded-[10px] xl:mr-[25px] flex justify-center flex-wrap mx-auto mt-[14.8vw] xl:mt-0 border-[1px] border-[#ccc] xl:hidden">
        <canvas id="canvas-m" class="w-[200px] inline-block rounded-[15px]"></canvas>
        <div class="text-[3.33vw] xl:text-[18px] font-normal xl:font-medium text-[#999] mt-[-10px]">
          扫描即可下载GDPAY
        </div>
      </div> -->
      <!-- <DownloadButton class="mt-[5.963vw] xl:mt-[70px] cursor-pointer" type="blue" :download="false" /> -->
      <ul class="bg-[#efefef] mx-[1.85vw] xl:mx-0 mt-[11vw] py-[5.556vw] xl:mt-[65px] xl:bg-transparent items-start xl:py-0 flex xl:items-center flex-wrap">
        <CaedWithShadow v-for="(item, index) in advantageList" :data="item" :index="index" :key="item.title" />
      </ul>
      <Title title="关于GD币" :subtitle="['使用GDPAY管理、世界通用的、恒定人民币汇率数字资产']" class="mt-[10.648vw] xl:mt-[130px]" />
      <ul class="xl:flex xl:justify-between xl:mt-[105px] xl:z-1 relative">
        <li v-for="(item, index) in aboutList" class="w-[90.741vw] gd-rounded mx-auto flex items-center py-[3.7vw] gd-border mt-[4.63vw] first:mt-[7.315vw] xl:inline-block xl:text-center xl:w-[390px] xl:mt-0 xl:first:mt-0 xl:pt-[33px] xl:pb-0">
          <div class="w-[26vw] xl:w-full">
            <img :src="item.src" class="w-[14.907vw] m-auto xl:w-[80px]" alt="" />
          </div>
          <div class="w-[64.7vw] xl:w-full pr-[5.5vw] xl:p-[30px] xl:text-left">
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
        <p class="text-[#666666] text-[3.333vw] leading-tight mt-[3vw] xl:text-[21px] xl:mt-[10px]">使用GDPAY，您可以轻松购买GD币，并存入您的GDPAY账户。您可以随时使用GD币支付给受支持的商家。<br />我们在全世界已有1000+合作商家，现在就使用GDPAY畅享缤纷服务吧</p>
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
        <p class="text-[#666666] text-[3.333vw] leading-tight mt-[3vw] xl:text-[21px] xl:mt-[10px]">您从商家提取GD币至您的GDPAY账户后,无论何时，您都可以打开您的GDPAY，将GD币出售，并获得人民币。<br />我们提供极速、安全的交易渠道。不仅保障您能快速获取人民币，且非常重视您的银行账户安全，严控每一~笔资金来源</p>
      </div>
      <div class="xl:flex xl:justify-between xl:mt-[60px]">
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[5.648vw] gd-border mt-[7.315vw] tag before:content-['1.'] xl:w-[300px] xl:flex-col xl:text-center xl:mt-0 xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/house.png" class="h-[11.852vw] xl:h-[64px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">从商家提取GD币至GDPAY账户</p>
        </div>
        <Process title="提取" />
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[6.111vw] gd-border tag before:content-['2.'] xl:w-[300px] xl:flex-col xl:text-center xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/withdrawal.png" class="h-[11.852vw] xl:h-[70px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">从GDPAY账户卖出GD币</p>
        </div>
        <Process title="销售" />
        <div class="w-[90.741vw] h-[25.37vw] gd-rounded mx-auto flex flex-row-reverse items-center justify-between pr-[5.278vw] gd-border tag before:content-['3.'] xl:w-[300px] xl:flex-col xl:text-center xl:pr-0 xl:pt-[35px] xl:justify-start xl:h-[210px] xl:mx-0">
          <img src="images/cash.png" class="h-[10.37vw] xl:h-[56px]" alt="" />
          <p class="ml-[9.444vw] text-[4.444vw] text-[#333333] xl:text-[24px] xl:ml-0 xl:mt-[30px]">获得人民币</p>
        </div>
      </div>
      <Title title="开放支付" :subtitle="['如果您是商家，欢迎您加入GDB币生态', '简单几步立即拥有数十万GDB币用户']" class="mt-[10.648vw] xl:mt-[130px]" />
      <div class="mt-[5.185vw] w-[95vw] mx-auto xl:w-[100%] flex-c-c flex-wrap xl:mt-[40px]">
        <img src="images/solution.png" class="w-[25%] xl:w-[225px] xl:mx-[20px] " alt="" />
        <img src="images/situation.png" class="w-[25%] xl:w-[225px] xl:mx-[20px] " alt="" />
        <img src="images/document.png" class="w-[25%] xl:w-[225px] xl:mx-[20px] " alt="" />
        <img src="images/social.png" class="w-[25%] xl:w-[225px] xl:mx-[20px] " alt="" />
      </div>
      <p class="mt-[12vw] text-[4.444vw] text-[#666666] text-center xl:text-[24px] xl:mt-[50px]">支持平台</p>
      <div class="w-[65.741vw] h-[15.296vw] xl:gd-rounded mx-auto flex items-center justify-around mt-[0] mb-[10.556vw] xl:border-none xl:justify-center xl:mt-[30px] xl:h-auto xl:w-auto xl:mb-[80px]">
        <img src="images/android-brands.png" class="h-[7.4vw] xl:h-[56px] xl:mx-[50px]" alt="" />
        <img src="images/apple-brands.png" class="h-[7.4vw] xl:h-[56px] xl:mx-[50px]" alt="" />
        <img src="images/HTML5.png" class="h-[7.4vw] xl:h-[56px] xl:mx-[50px]" alt="" />
        <img src="images/EDGE.png" class="h-[7.4vw] xl:h-[56px] xl:mx-[50px]" alt="" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import qrcode from 'qrcode'
import { ref, onMounted, onBeforeUnmount } from 'vue'
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

const isShowDialog = ref(false)
const handleDialog = () => {
  isShowDialog.value = !isShowDialog.value
}

const isShowDialogPromote = ref(false)
const handleDialogPromote = () => {
  isShowDialogPromote.value = !isShowDialogPromote.value
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

const isIOS = ref(false)

const slide_index = ref(0)

onMounted(() => {
  qrcode.toCanvas(document.getElementById('canvas'), 'https://www.gdpay3.com/download', { width: 226 }, function (error) {
    if (error) console.error(error)
    console.log('success!')
  })

  qrcode.toCanvas(document.getElementById('canvas-m'), 'https://www.gdpay3.com/download', { width: '100%' }, function (error) {
    if (error) console.error(error)
    console.log('success!')
  })

  isIOS.value = /iPad|iPhone/i.test(navigator.userAgent)
})

onBeforeUnmount(() => {})

setInterval(() => {
  slide_index.value = slide_index.value === 5 ? (slide_index.value = 0) : slide_index.value + 1
}, 5000)

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
