<template>
  <footer class="bg-blue pb-[9.722vw] px-[4.63vw] text-white">
    <section class="flex justify-start pt-[7.593vw] items-center">
      <img src="images/logo-w.png" class="w-[11.204vw] mr-[3.426vw]" alt="" />
      <p class="text-[5.556vw]">现在，请您下载吧</p>
    </section>
    <DownloadButton class="mt-[9.167vw]" type="white" />
    <img src="images/contact.png" class="w-[32.407vw] mx-auto mt-[7.315vw]" alt="" />
    <ul class="mt-[6.944vw]">
      <li v-for="(item, index) in footerlist.data" class="w-[83.333vw] text-center bg-[#005dd6] leading-[12.5vw] rounded-[1.759vw] mb-[3.148vw] mx-auto relative" @click="test(index)">
        {{ item.title }}
        <img src="images/arrow-down.png" class="absolute w-[3.333vw] right-[3.741vw] top-[5.741vw]" alt="" />
        <div v-show="item.active">
          <p class="text-[#82abff] leading-loose" v-for="l in item.list" @click="link(l.path)">{{ l.label }}</p>
        </div>
      </li>
    </ul>
    <ul class="flex px-[19.259vw] mt-[10.648vw] justify-between">
      <li v-for="item in socialMediaList">
        <img :src="item" class="w-[9.722vw]" alt="" />
      </li>
    </ul>
  </footer>
</template>
<script setup>
import { reactive } from 'vue'

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
        { label: '新手指南', path: '/guide' },
        { label: '常见交易问题', path: '/question' }
      ]
    }
  ]
})

const socialMediaList = ['images/FB.png', 'images/twitter.png', 'images/medium.png', 'images/reddit.png']

const test = (index) => {
  footerlist.data.forEach((e, i) => {
    e.active = index === i ? true : false
  })
}

const link = (path) => {
  footerlist.data.forEach((e, i) => {
    e.active = false
  })
  $nuxt.$router.push(path)
}
</script>
