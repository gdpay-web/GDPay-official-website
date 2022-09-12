<template>
  <div class="flex-c-c flex-col mt-[10vw] text-[3.333vw] text-[#666666]">
    <Title title="团队文化" />
    <img class="mt-[10vw]" src="images/handshake-g4722dadc1_1920.png" alt="" />
    <img src="images/design-g6c97bed24_1920.png" alt="" />
    <img src="images/buildings-gbfb236bae_1920.png" alt="" />
    <div class="w-[90.741vw] gd-border rounded-[1.759vw] next-tag py-[7vw] my-[5vw] flex-c-c">
      <img src="images/envelope-regular.png" class="w-[11.852vw] mr-[3.7vw]" alt="" />
      <div class="text-[#333333] font-bold">
        <p>contact@gdpay.vip</p>
        <p>投递您的简历</p>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '~/components/Title.vue'
export default {
  layout: 'layout-c',
  components: { Title }
}
</script>
