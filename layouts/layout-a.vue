<template>
  <div class="bg-else-bg bg-contain bg-no-repeat xl:bg-else-bg-pc">
    <Header />
    <Tabs :tabs="tabs" />
    <Nuxt class="mt-[8vw]" />
    <Footer />
    <div class="h-[80px] xl:hidden"></div>
    <div class="fixed bottom-0 bg-blue w-full flex justify-center items-center h-[80px] xl:hidden">
      <DownloadButton class="h-[50px] xl:hidden" type="white" :download="false" />
    </div>
  </div>
</template>

<script setup>
const tabs = [
  {
    src: 'images/link-solid.png',
    route: 'solution',
    name: '解决方案',
    title: '一键接入',
    content: '立即开始收款数字货币'
  },
  {
    src: 'images/dice-d20-solid.png',
    route: 'situation',
    name: '应用场景',
    title: '全场景覆盖',
    content: '助力您的商业新思路'
  },
  {
    src: 'images/file-code-solid.png',
    route: 'document',
    name: '开发文档',
    title: '开发文档',
    content: ''
  },
  {
    src: 'images/download-solid.png',
    route: 'source-download',
    name: '资源下载',
    title: '资源下载',
    content: ''
  }
]
</script>
