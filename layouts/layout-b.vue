<template>
  <div class="bg-cover bg-no-repeat xl:bg-else-bg-pc">
    <Header class="hidden xl:block" />
    <BurgerMenu class="xl:hidden" />
    <img src="images/logo.png" class="w-[25.926vw] mt-[3.796vw] ml-[2.778vw] xl:hidden" alt="" @click="$router.push('/')" />
    <Nuxt class="xl:pb-[100px]" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  var url = window.location.href
  if (url.indexOf('https') < 0) {
    url = url.replace('http:', 'https:')
    window.location.replace(url)
  }
})
</script>
