<template>
  <div class="flex-c-c flex-col text-[3.333vw] text-[#666666]">
    <p class="text-[4.63vw] mt-[4.815vw] text-blue">运营活动</p>
    <ul>
      <li class="w-[90.741vw] gd-border rounded-[1.759vw] next-tag pl-[3.5vw] pr-[5vw] pb-[4.3vw] mt-[1.852vw] first:mt-[3.148vw]" v-for="item in list">
        <p class="text-[3.704vw] mt-[2.143vw]">{{ item.title }}</p>
        <p class="text-[2.407vw] text-right my-[2.314vw] text-[#999999]">{{ item.date }}</p>
        <p class="text-[2.963vw] text-justify">{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: 'layout-b',
  data() {
    return {
      list: [{ title: '警惕新型诈骗！！！', date: '2022-09-01', content: 'GD是一种拥有稳定价值的加密货币，GD锚定RMB价值，兑换比例为1:1，即1EB=1RMB，您可以随时在本平台进行...' }]
    }
  }
}
</script>
