<template>
  <div class="flex-c-c flex-col text-[3.333vw] text-[#666666] xl:pt-[200px]">
    <p class="text-[4.63vw] mt-[4.815vw] text-blue xl:text-[36px]">协议条款</p>
    <ul class="xl:flex xl:flex-wrap xl:w-[1200px] xl:mx-auto xl:justify-between">
      <li
        class="w-[90.741vw] gd-border gd-rounded next-tag pl-[3.5vw] pr-[5vw] pb-[4.3vw] mt-[1.852vw] first:mt-[3.148vw] xl:w-[49%] xl:first:mt-[1.852vw] xl:pb-[20px] cursor-pointer"
        v-for="item in list"
      >
        <p class="text-[3.704vw] mt-[2.143vw] xl:text-[20px] xl:mt-[17px]">{{ item.title }}</p>
        <p class="text-[2.407vw] text-right my-[2.314vw] text-[#999999] xl:text-[13px] xl:my-[10px]">{{ item.date }}</p>
        <p class="text-[2.963vw] text-justify xl:text-[16px]">{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: 'layout-b',
  data() {
    return {
      list: [{ title: '警惕新型诈骗！！！', date: '2022-09-01', content: 'GD是一种拥有稳定价值的加密货币，GD锚定RMB价值，兑换比例为1:1，即1GDB=1RMB，您可以随时在本平台进行...' }]
    }
  }
}
</script>
