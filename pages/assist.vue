<template>
  <div class="bg-else-bg bg-contain bg-no-repeat pt-[21.667vw] text-[#666666]">
    <BurgerMenu />
    <img src="images/logo.png" class="w-[36.204vw] m-auto" alt="" />
    <div class="flex-c-c mt-[8.148vw]">
      <input
        type="text"
        placeholder="请输入搜索内容..."
        class="w-[74.074vw] h-[11.111vw] bg-input-bg bg-contain bg-no-repeat text-[#999999] text-[3.333vw] pl-[3.056vw] inline-block rounded-[1.759vw]"
      />
      <img src="images/search-btn.png" class="h-[11.111vw] ml-[-11.111vw]" alt="" />
    </div>
    <section class="px-[4.63vw] mt-[15vw] pb-[15vw]">
      <p class="text-blue text-[4.167vw] font-medium">Featured Articles</p>
      <hr />
      <p class="text-[3.333vw] mt-[3.5vw]">警惕新型诈骗！！！</p>
      <button class="text-[2.963vw] text-blue w-[20.833vw] h-[6.418vw] border border-blue rounded-full mt-[3vw]" @click="$router.push('/announcement')">公告中心</button>
      <div class="mt-[10vw]" v-for="item in list" :key="item.title">
        <div class="flex justify-start items-baseline">
          <span class="text-[#333333] text-[4.167vw] font-medium">{{ item.title }}</span>
          <span class="text-[#999999] text-[3.333vw] font-medium ml-[2.685vw]">{{ item.data.length }} 篇文章</span>
        </div>
        <hr />
        <ul>
          <li v-for="item2 in item.data" class="text-[3.333vw] mt-[6vw] flex items-center leading-tight pl-[1.481vw]">
            <img src="images/A-blue.png" class="w-[1.204vw] h-[2.13vw] mr-[1.759vw]" alt="" />
            {{ item2.title }}
          </li>
        </ul>
        <button class="text-[2.963vw] text-white w-[20.833vw] h-[6.418vw] border border-blue bg-blue rounded-full mt-[10vw] flex-c-c" @click="$router.push(item.link)">
          查看所有
          <img src="images/arrow-down.png" class="h-[1.204vw] -rotate-90 ml-[1vw] mt-[0.2vw]" alt="" />
        </button>
      </div>
    </section>
  </div>
</template>
<script setup>
const list = [
  {
    title: '交易常见问题',
    link: '/question',
    data: [{ title: '如何买入GB？' }, { title: '转账成功，但是订单超时被取消了怎么办？' }, { title: '申诉凭证示例' }, { title: 'GDPAY支持哪些付款方式' }, { title: '交易收取费用吗？' }]
  },
  { title: '新手指南', data: [{ title: '如何买入GB？' }, { title: 'GDpay支持哪些交易方式' }, { title: '如何提币(转帐)?' }, { title: '如何卖出GB?' }, { title: '关于GDpay' }] },
  { title: '隐私条款', data: [{ title: '隐私条款' }, { title: '服务条款' }] }
]
</script>
