<template>
  <footer class="bg-blue pb-[9.722vw] px-[4.63vw] text-white xl:px-0 xl:pb-[60px] overflow-x-hidden">
    <div class="xl:w-[1200px] xl:m-auto xl:flex xl:justify-between">
      <div class="xl:flex-grow">
        <section class="flex justify-start pt-[7.593vw] items-center xl:pt-[60px]">
          <img src="images/logo-w.png" class="w-[11.204vw] mr-[3.426vw] xl:w-[67px] xl:mr-[15px]" alt="" />
          <p class="text-[5.556vw] xl:text-[30px]">现在，请您下载吧</p>
        </section>
        <div class="bg-[#85baff] w-[100%] h-[1px] hidden xl:block absolute left-0 xl:mt-[30px]"></div>
        <DownloadButton class="mt-[9.167vw] xl:hidden" type="white" :download="false" />
        <a :href="setting.config.serviceURL" target="_blank"><img src="images/contact.png" class="w-[32.407vw] mx-auto mt-[7.315vw] xl:hidden" alt="" /></a>
        <ul class="mt-[6.944vw] xl:flex xl:justify-between xl:mt-[100px]">
          <!-- mobile -->
          <li v-for="(item, index) in footerlist.data" class="w-[83.333vw] text-center bg-[#005dd6] leading-[12.5vw] gd-rounded mb-[3.148vw] mx-auto relative xl:hidden" @click="toggle(item.active, index)">
            {{ item.title }}
            <img src="images/arrow-down.png" class="absolute w-[3.333vw] right-[3.741vw] top-[5.741vw]" alt="" />
            <div v-show="item.active">
              <p class="text-[#82abff] leading-loose" v-for="l in item.list" @click="link(l.path)">{{ l.label }}</p>
            </div>
          </li>
          <!-- pc -->
          <li v-for="(item, index) in footerlist.data" class="hidden text-center gd-rounded mb-[3.148vw] relative xl:block xl:text-left xl:text-[24px] cursor-pointer">
            <p class="font-medium">{{ item.title }}</p>
            <div class="mt-[30px]">
              <p class="text-[#82abff] leading-loose xl:text-[#ffffff] xl:text-[18px]" v-for="l in item.list" @click="link(l.path)">{{ l.label }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="px-[19.259vw] xl:w-[250px] xl:pt-[35px] xl:px-0 xl:flex xl:flex-col xl:items-end xl:ml-[340px] relative z-[2]">
        <canvas id="canvas2" class="hidden w-[150px] xl:block rounded-lg"></canvas>
        <a :href="setting.config.serviceURL" target="_blank"><img src="images/contact-pc.png" class="hidden w-[250px] mt-[33px] xl:block cursor-pointer" alt="" /></a>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { reactive, ref } from 'vue'
import qrcode from 'qrcode'
import { onMounted } from 'vue'
// import json from 'static/config.json'

const setting = reactive({
  config: {}
})

onMounted(() => {
  qrcode.toCanvas(document.getElementById('canvas2'), 'https://www.gdpay3.com/download', { width: 150 }, function (error) {
    if (error) console.error(error)
    console.log('success!')
  })

  setting.config = window.config
})

const footerlist = reactive({
  data: [
    {
      title: 'GDPAY',
      active: false,
      list: [
        { label: '服务条款', path: '/agreement/service' },
        { label: '隐私条款', path: '/agreement/privacy' }
      ]
    },
    {
      title: '公司',
      active: false,
      list: [
        { label: '关于我们', path: '/about' },
        { label: '加入我们', path: '/join' },
        { label: '最新公告', path: '/announcement' }
      ]
    },
    {
      title: '开放支付',
      active: false,
      list: [
        { label: '解决方案', path: '/solution' },
        { label: '应用场景', path: '/situation' },
        { label: '开发文档', path: '/document' },
        { label: '资源下载', path: '/source-download' }
      ]
    },
    {
      title: '帮助中心',
      active: false,
      list: [
        { label: '新手指南', path: '/assist/1' },
        { label: '常见交易问题', path: '/assist' }
      ]
    }
  ]
})

const toggle = (active, index) => {
  if (active) {
    footerlist.data[index].active = false
  } else {
    footerlist.data.forEach((e, i) => {
      e.active = index === i ? true : false
    })
  }
}

const link = (path) => {
  footerlist.data.forEach((e, i) => {
    e.active = false
  })
  $nuxt.$router.push(path)
}
</script>
