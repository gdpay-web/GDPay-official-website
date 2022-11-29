<template>
  <div class="flex-c-c flex-col mt-[10vw] text-[3.333vw] text-[#666666]">
    <Title title="团队文化" />
    <img class="mt-[10vw] xl:hidden" src="images/handshake.png" alt="" />
    <img src="images/design.png" class="xl:hidden" alt="" />
    <img src="images/buildings.png" class="xl:hidden" alt="" />
    <!-- pc端 -->
    <img class="hidden xl:block mt-[100px]" src="images/handshake-pc.png" alt="" />
    <img class="hidden xl:block" src="images/design-pc.png" alt="" />
    <img class="hidden xl:block" src="images/buildings-pc.png" alt="" />
    <div class="w-[90.741vw] gd-border gd-rounded next-tag py-[7vw] my-[5vw] flex-c-c xl:w-[450px] xl:text-[18px] xl:h-[113px] xl:py-0">
      <img src="images/envelope-regular.png" class="w-[11.852vw] mr-[3.7vw] xl:w-[64px] xl:mr-[10px]" alt="" />
      <div class="text-[#333333] font-bold">
        <p>{{config.email}}</p>
        <p>投递您的简历</p>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '~/components/Title.vue'
// import json from 'static/config.json'
export default {
  layout: 'layout-c',
  components: { Title },
  data() {
    return {
      // json,
      config: {}
    }
  },
  mounted() {
    console.log(window)
    this.config = window.config
  }
}
</script>
