<template>
  <div class="pb-[25vw]">
    <Title title="在线服务" />
    <section class="mt-[6vw]">
      <CaedWithShadow v-for="(item, index) in list1" :data="item" :index="index" :key="item.title" />
    </section>
    <Title title="其他" class="mt-[8vw]" />
    <section class="mt-[6vw]">
      <CaedWithShadow v-for="(item, index) in list2" :data="item" :index="index" :key="item.title" />
    </section>
  </div>
</template>
<script>
import Title from '~/components/Title.vue'
export default {
  layout: 'withTabs',
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
