<template>
  <div class="bg-else-bg bg-contain bg-no-repeat pt-[21.667vw] text-[#666666] xl:bg-else-bg-pc xl:pt-[200px]">
    <Header class="hidden xl:block" />
    <BurgerMenu class="xl:hidden" />
    <img src="images/logo.png" class="w-[36.204vw] m-auto xl:w-[260px]" alt="" />
    <section class="px-[4.63vw] mt-[15vw] pb-[15vw] xl:w-[1200px] xl:mx-auto xl:mt-[100px]">
      <p class="text-blue text-[4.167vw] font-medium xl:text-[23px]">Featured Articles</p>
      <hr />
      <p class="text-[3.333vw] mt-[3.5vw] xl:text-[18px] xl:mt-[20px]">警惕新型诈骗！！！</p>
      <button
        class="text-[2.963vw] text-blue w-[20.833vw] h-[6.418vw] border border-blue rounded-full mt-[3vw] xl:w-[113px] xl:h-[35px] xl:text-[16px] xl:mt-[20px]"
        @click="$router.push('/announcement')"
      >
        公告中心
      </button>
      <div class="xl:flex xl:flex-wrap xl:justify-between">
        <div class="mt-[10vw] xl:mt-[60px] xl:w-[48%]" v-for="item in list" :key="item.title">
          <div class="flex justify-start items-baseline">
            <span class="text-[#333333] text-[4.167vw] font-medium xl:text-[23px]">{{ item.title }}</span>
            <span class="text-[#999999] text-[3.333vw] font-medium ml-[2.685vw] xl:text-[18px] xl:ml-[15px]">{{ item.data.length }} 篇文章</span>
          </div>
          <hr />
          <ul>
            <li v-for="item2 in item.data" class="text-[3.333vw] mt-[6vw] flex items-center leading-tight pl-[1.481vw] xl:pl-[10px] xl:text-[18px] xl:mt-[30px]" @click="$router.push(item2.path)">
              <img src="images/A-blue.png" class="w-[1.204vw] h-[2.13vw] mr-[1.759vw] xl:w-[6px] xl:h-[11px] xl:mr-[5px]" alt="" />
              {{ item2.title }}
            </li>
          </ul>
          <button
            class="text-[2.963vw] text-white w-[20.833vw] h-[6.418vw] border border-blue bg-blue rounded-full mt-[10vw] flex-c-c xl:w-[113px] xl:h-[35px] xl:text-[16px] xl:mt-[20px]"
            @click="$router.push(item.path)"
          >
            查看所有
            <img src="images/arrow-down.png" class="h-[1.204vw] -rotate-90 ml-[1vw] mt-[0.2vw] xl:h-[6px] xl:w-[11px]" alt="" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const list = [
  {
    title: '交易常见问题',
    path: '/question',
    data: [{ title: '如何买入GB？' }, { title: '转账成功，但是订单超时被取消了怎么办？' }, { title: '申诉凭证示例' }, { title: 'GDPAY支持哪些付款方式' }, { title: '交易收取费用吗？' }]
  },
  { title: '新手指南', path: '/guide', data: [{ title: '如何买入GB？' }, { title: 'GDpay支持哪些交易方式' }, { title: '如何提币(转帐)?' }, { title: '如何卖出GB?' }, { title: '关于GDpay' }] },
  {
    title: '隐私条款',
    path: '/agreement',
    data: [
      { title: '隐私条款', path: '/agreement/privacy' },
      { title: '服务条款', path: '/agreement/service' }
    ]
  }
]
</script>
