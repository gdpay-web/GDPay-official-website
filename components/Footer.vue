<template>
  <footer class="bg-blue pb-[9.722vw] px-[4.63vw] text-white">
    <section class="flex justify-start pt-[7.593vw] items-center">
      <img src="images/logo-w.png" class="w-[11.204vw] mr-[3.426vw]" alt="" />
      <p class="text-[5.556vw]">现在，请您下载吧</p>
    </section>
    <DownloadButton class="mt-[9.167vw]" type="white" />
    <img src="images/contact.png" class="w-[32.407vw] mx-auto mt-[7.315vw]" alt="" />
    <ul class="mt-[6.944vw]">
      <li v-for="item in footerlist" class="w-[83.333vw] text-center bg-[#005dd6] leading-[12.5vw] rounded-[1.759vw] mb-[3.148vw] mx-auto relative" @click="$router.push(item.path)">
        {{ item.title }}
        <img src="images/arrow-down.png" class="absolute w-[3.333vw] right-[3.741vw] top-[5.741vw]" alt="" />
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
const footerlist = [
  { title: 'GDPAY', path: '/' },
  { title: '公司', path: '' },
  { title: '开放支付', path: '/solution' },
  { title: '帮助中心', path: '' }
]
const socialMediaList = ['images/FB.png', 'images/twitter.png', 'images/medium.png', 'images/reddit.png']
</script>
