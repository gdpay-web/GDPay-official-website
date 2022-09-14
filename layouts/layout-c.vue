<template>
  <div class="bg-else-bg bg-cover bg-no-repeat xl:bg-else-bg-pc">
    <Header />
    <Tabs :tabs="tabs" />
    <Nuxt class="mt-[8vw]" />
    <Footer />
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
