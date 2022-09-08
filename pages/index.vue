<template>
  <div class="bg-home-bg bg-contain bg-no-repeat">
    <Header />
    <section class="mt-[49.63vw] text-[9.259vw] text-blue px-[4.63vw] leading-tight">
      <p>助您安全</p>
      <p>自由支付</p>
    </section>
    <section class="text-[3.333vw] text-[#333333] px-[4.63vw] mt-[1.5vw]">
      <p>GD币 - 世界通用数字资产恒定人民币</p>
      <p>汇率，100%互兑</p>
    </section>
    <p class="text-[5.556vw] text-blue mt-[13.148vw] px-[4.63vw]">无需远行即可畅玩全球</p>
    <DownloadButton class="mt-[35.963vw]" type="blue" />
    <section class="bg-[#efefef] mt-[11vw] py-[5.556vw]">
      <CaedWithShadow v-for="(item, index) in advantageList" :data="item" :index="index" :key="item.title" />
    </section>
    <Title title="关于GD币" :subtitle="['使用GDPAY管理、世界通用的、恒定人民币汇率数字资产']" class="mt-[10.648vw]" />
    <div
      v-for="(item, index) in aboutList"
      class="w-[90.741vw] rounded-[1.759vw] mx-auto flex items-center pt-[8.611vw] pb-[9.259vw] gd-border"
      :class="{ 'mt-[4.63vw]': index, 'mt-[7.315vw]': !index }"
    >
      <div class="w-[34.537vw]">
        <img :src="item.src" class="w-[14.907vw] m-auto" alt="" />
      </div>
      <div class="w-[53.148vw]">
        <h3 class="text-blue text-[5vw]">{{ item.title }}</h3>
        <p class="text-[#666666] text-[3.333vw] leading-tight text-justify">
          {{ item.content }}
        </p>
      </div>
    </div>
    <Title title="使用GDPAY" :subtitle="['自由兑换、自由支付EB币']" class="mt-[10.648vw]" />
    <div class="px-[4.63vw] mt-[7vw]">
      <h3 class="text-blue text-[5vw]">轻松支付</h3>
      <p class="text-[#666666] text-[3.333vw] leading-tight mt-[3vw]">使用GDPAY，您可以轻松购买GD币，并存入您的GDPAY账户。您可以随时使用GD币支付给受支持的商家。</p>
    </div>
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[7.5vw] gd-border mt-[7.315vw] tag before:content-['1.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">电子支付购买GD币</p>
      <img src="images/mobile-alt-solid.png" class="h-[14.259vw]" alt="" />
    </div>
    <Process title="购买" />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[6.111vw] gd-border tag before:content-['2.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">购买GD币存入GDPAY账户</p>
      <img src="images/deposit.png" class="h-[11.852vw]" alt="" />
    </div>
    <Process title="支付" />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.833vw] gd-border tag before:content-['3.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">随时使用GD币轻松支付给商家</p>
      <img src="images/cart-w-logo.png" class="h-[11.852vw]" alt="" />
    </div>
    <div class="px-[4.63vw] mt-[7vw]">
      <h3 class="text-blue text-[5vw]">随时兑现</h3>
      <p class="text-[#666666] text-[3.333vw] leading-tight mt-[3vw]">您从商家提取GD币至您的GDPAY账户后，无论何时，您都可以打开您的GDPAY，将GD币出售，并获得人民币。</p>
    </div>
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.648vw] gd-border mt-[7.315vw] tag before:content-['1.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">从商家提取GD币至GDPAY账户</p>
      <img src="images/house.png" class="h-[11.852vw]" alt="" />
    </div>
    <Process title="购买" />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[6.111vw] gd-border tag before:content-['2.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">从GDPAY账户卖出GD币</p>
      <img src="images/withdrawal.png" class="h-[11.852vw]" alt="" />
    </div>
    <Process title="支付" />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.278vw] gd-border tag before:content-['3.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">获得人民币</p>
      <img src="images/cash.png" class="h-[10.37vw]" alt="" />
    </div>
    <Title title="开放支付" :subtitle="['如果您是商家，欢迎您加入EB币生态', '简单几步立即拥有数十万EB币用户']" class="mt-[10.648vw]" />
    <div class="mt-[10.185vw] flex-c-c flex-wrap">
      <img src="images/solution.png" class="w-[34.722vw]" alt="" />
      <img src="images/situation.png" class="w-[34.722vw]" alt="" />
      <img src="images/document.png" class="w-[34.722vw]" alt="" />
      <img src="images/social.png" class="w-[34.722vw]" alt="" />
    </div>
    <p class="mt-[12vw] text-[4.444vw] text-[#666666] text-center">支持平台</p>
    <div class="w-[90.741vw] h-[21.296vw] rounded-[1.759vw] mx-auto flex items-center justify-around gd-border mt-[3.704vw] mb-[20.556vw]">
      <img src="images/android-brands.png" class="h-[11.852vw]" alt="" />
      <img src="images/apple-brands.png" class="h-[11.852vw]" alt="" />
      <img src="images/HTML5.png" class="h-[11.852vw]" alt="" />
      <img src="images/EDGE.png" class="h-[11.852vw]" alt="" />
    </div>
    <footer class="bg-blue pb-[9.722vw] px-[4.63vw] text-white">
      <section class="flex justify-start pt-[7.593vw] items-center">
        <img src="images/logo-w.png" class="w-[11.204vw] mr-[3.426vw]" alt="" />
        <p class="text-[5.556vw]">现在，请您下载吧</p>
      </section>
      <DownloadButton class="mt-[9.167vw]" type="white" />
      <img src="images/contact.png" class="w-[32.407vw] mx-auto mt-[7.315vw]" alt="" />
      <ul class="mt-[6.944vw]">
        <li v-for="item in footerlist" class="w-[83.333vw] text-center bg-[#005dd6] leading-[12.5vw] rounded-[1.759vw] mb-[3.148vw] mx-auto relative">
          {{ item }}
          <img src="images/arrow-down.png" class="absolute w-[3.333vw] right-[3.741vw] top-[5.741vw]" alt="" />
        </li>
      </ul>
      <ul class="flex px-[19.259vw] mt-[10.648vw] justify-between">
        <li v-for="item in socialMediaList">
          <img :src="item" class="w-[9.722vw]" alt="" />
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
const footerlist = ['GDPAY', '公司', '开放支付', '帮助中心']
const socialMediaList = ['images/FB.png', 'images/twitter.png', 'images/medium.png', 'images/reddit.png']
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
