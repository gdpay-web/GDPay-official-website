<template>
  <div class="xl:flex xl:flex-wrap xl:justify-center xl:w-[100%] xl:m-auto">
    <div class="text-[5vw] my-[30px] text-center text-blue xl:text-[36px] font-medium xl:mt-[0px]">
      最新公告
    </div>
    <ul>
      <li class="w-[90.741vw] h-[15.1vw] xl:h-auto gd-border-b xl:w-[100%] pb-0 cursor-pointer flex border-[1px] border-[#e1e1e1] bg-white rounded-lg mb-[10px] overflow-hidden" v-for="item in list" @click="$router.push(item.path)" :key="item.title">
        <div class="w-[20.8vw]  h-[15.1vw] xl:h-auto xl:w-[110px] flex items-center justify-center bg-[#f5f5f5] text-[#666] text-[3.7vw] xl:text-[20px]">公告</div>
        <div class="xl:py-[18px] xl:w-[690px] xl:px-[20px] flex items-center content-center flex-wrap xl:block pl-[2vw]">
          <p class="w-[100%] xl:w-auto text-black text-[3.704vw] xl:text-[20px] xl:mb-[5px]">{{ item.title }}</p>
          <p class="w-[100%] xl:w-auto text-[2.407vw] text-left text-[#999999] xl:text-[13px]">发布日期 {{ item.date }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: 'layout-g',
  data() {
    return {
      list: [
        { title: '防骗公告', date: '2023-02-15', content: '近期有很多不法份子冒充GDPAY商务邀请进行开户，骗取首充奖励。未避免您的损失请各位合作伙伴在开户前，先核对真实身份', path: '/announcement/2' },
        {
          title: 'GD使用说明',
          date: '2022-09-07',
          content:
            'GD是一种拥有稳定价值的加密货币，GD币锚定RMB价值，即1GD=1RMB；<br />买卖币请通过在我司APP市场订单正常转币交易。卖币时一定要以收款账户有收到钱，才能转币。（私下联系以任何风控理由要求进行私下交易的都是骗子，请勿相信）',
          path: '/announcement/1'
        }
        // { title: '警惕新型诈骗！！！', date: '2022-09-01', content: 'GD是一种拥有稳定价值的加密货币，GD锚定RMB价值，兑换比例为1:1，即1GDB=1RMB，您可以随时在本平台进行...' },
        // { title: '警惕新型诈骗！！！', date: '2022-09-01', content: 'GD是一种拥有稳定价值的加密货币，GD锚定RMB价值，兑换比例为1:1，即1GDB=1RMB，您可以随时在本平台进行...' },
        // { title: '警惕新型诈骗！！！', date: '2022-09-01', content: 'GD是一种拥有稳定价值的加密货币，GD锚定RMB价值，兑换比例为1:1，即1GDB=1RMB，您可以随时在本平台进行...' }
      ]
    }
  }
}
</script>
