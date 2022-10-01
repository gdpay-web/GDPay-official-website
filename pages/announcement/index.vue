<template>
  <div class="xl:flex xl:flex-wrap xl:justify-center xl:w-[80%] xl:m-auto">
    <div class="text-[5vw] xl:text-[32px] my-[30px] text-center text-blue">
      最新公告
    </div>
    <ul>
      <li class="w-[90.741vw] gd-border-b pb-[4.3vw] mt-[1.852vw] xl:w-[100%] xl:pb-[35px] cursor-pointer" v-for="item in list" @click="$router.push(item.path)" :key="item.title">
        <p class="text-black text-[3.704vw] xl:text-[20px] xl:mt-[17px] xl:mb-[15px]">{{ item.title }}</p>
        <p class="text-[2.963vw] text-justify xl:text-[13px] text-[#999] " v-html="item.content"></p>
        <p class="text-[2.407vw] text-left text-[#999999] xl:text-[13px] mt-[25px]">{{ item.date }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: 'layout-f',
  data() {
    return {
      list: [
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
