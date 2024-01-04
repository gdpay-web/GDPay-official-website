<template>
  <div class="bg-cover bg-no-repeat xl:bg-else-bg-pc">
    <Header class="block" />
    <!-- <BurgerMenu class="xl:hidden" /> -->
    <!-- <img src="images/logo.png" class="w-[25.926vw] mt-[3.796vw] ml-[2.778vw] xl:hidden" alt="" @click="$router.push('/')" /> -->
    <Nuxt class="xl:pb-[100px]" />
    <div class="h-[80px] xl:hidden"></div>
    <div class="fixed bottom-0 bg-blue w-full flex justify-center items-center h-[80px] xl:hidden">
      <DownloadButton class="h-[50px] xl:hidden" type="white" :download="false" />
    </div>
  </div>
</template>
