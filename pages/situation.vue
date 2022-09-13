<template>
  <div class="pb-[25vw] xl:w-[1200px] xl:mx-auto xl:pb-[100px]">
    <Title title="在线服务" />
    <ul class="mt-[11vw] py-[5.556vw] xl:mt-[65px] xl:bg-transparent xl:py-0 xl:flex xl:items-center xl:flex-wrap">
      <li
        v-for="(item, index) in list1"
        class="w-[90.741vw] gd-rounded mx-auto flex items-center pt-[8.611vw] pb-[9.259vw] gd-border mt-[4.63vw] first:mt-[7.315vw] xl:inline-block xl:text-center xl:w-[390px] xl:mt-0 xl:first:mt-0 xl:pt-[33px] xl:pb-0 xl:h-[280px]"
      >
        <div class="w-[34.537vw] xl:w-full">
          <img :src="item.src" class="h-[14.907vw] m-auto xl:h-[80px]" alt="" />
        </div>
        <div class="w-[53.148vw] xl:w-full xl:p-[30px] xl:text-left">
          <h3 class="text-blue text-[5vw] xl:text-[27px]">{{ item.title }}</h3>
          <p class="text-[#666666] text-[3.333vw] leading-tight text-justify xl:text-[18px] xl:mt-[15px]">
            {{ item.content }}
          </p>
        </div>
      </li>
    </ul>
    <Title title="其他" class="mt-[8vw]" />
    <ul class="mt-[11vw] py-[5.556vw] xl:mt-[65px] xl:bg-transparent xl:py-0 xl:flex xl:items-center xl:flex-wrap">
      <li
        v-for="(item, index) in list2"
        class="w-[90.741vw] gd-rounded mx-auto flex items-center pt-[8.611vw] pb-[9.259vw] gd-border mt-[4.63vw] first:mt-[7.315vw] xl:inline-block xl:text-center xl:w-[288px] xl:mt-0 xl:first:mt-0 xl:pt-[33px] xl:pb-0 xl:h-[280px]"
      >
        <div class="w-[34.537vw] xl:w-full">
          <img :src="item.src" class="h-[14.907vw] m-auto xl:h-[80px]" alt="" />
        </div>
        <div class="w-[53.148vw] xl:w-full xl:p-[30px] xl:text-left">
          <h3 class="text-blue text-[5vw] xl:text-[27px]">{{ item.title }}</h3>
          <p class="text-[#666666] text-[3.333vw] leading-tight text-justify xl:text-[18px] xl:mt-[15px]">
            {{ item.content }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Title from '~/components/Title.vue'
export default {
  layout: 'layout-a',
  components: { Title },
  data() {
    return {
      list1: [
        {
          src: 'images/cart.png',
          title: '购物',
          content: '线上商城、O2O服务、电影演出票务…'
        },
        {
          src: 'images/cash.png',
          title: '缴费',
          content: '在线充值、缴纳费用、支付款项…'
        },
        {
          src: 'images/coins-solid.png',
          title: '金融',
          content: '线上理财、抵押数字货币借款、兑币服务…'
        }
      ],
      list2: [
        {
          src: 'images/window-restore-solid.png',
          title: 'LoT',
          content: '物联设备间自动支付、结算…'
        },
        {
          src: 'images/barcode-solid.png',
          title: '实体商业',
          content: '商店二维码收款、营业网点缴费收款…'
        },
        {
          src: 'images/user-check-solid.png',
          title: '个人',
          content: '朋友间转账、发红包…'
        },
        {
          src: 'images/handshake-simple-solid.png',
          title: '更多应用方式',
          content: '等待您与我们共同开发'
        }
      ]
    }
  }
}
</script>
