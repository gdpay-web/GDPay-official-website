<template>
  <div class="bg-else-bg bg-cover bg-no-repeat xl:bg-else-bg-pc">
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
    src: 'images/users-line-solid.png',
    route: 'about',
    name: '关于我们',
    title: '关于我们',
    content: ''
  },
  {
    src: 'images/user-plus-solid.png',
    route: 'join',
    name: '加入我们',
    title: '挑战自我',
    content: '与我们一起在全新的区块链世界开创新天地'
  }
]
</script>
