<template>
  <!-- 用於公告中心 -->
  <div class="bg-else-bg bg-contain bg-no-repeat pb-[21.667vw] text-[#666666] xl:bg-else-bg-pc xl:pt-[166px] min-h-full">
    <Header class="block xl:pb-0 pb-[12.667vw]" />
    <!-- <img src="images/logo.png" class="w-[36.204vw] m-auto xl:w-[260px]" alt="" @click="$router.push('/')" /> -->

    <section class="px-[4.63vw] mt-[8vw] pb-[15vw] xl:mx-auto xl:w-[800px] xl:px-[0px] xl:mt-[0px]">
      <Nuxt />
    </section>
    <client-only>
      <ScrollToTop />
    </client-only>
    <div class="h-[80px] xl:hidden"></div>
    <div class="fixed bottom-0 bg-blue w-full flex justify-center items-center h-[80px] xl:hidden">
      <DownloadButton class="h-[50px] xl:hidden" type="white" :download="false" />
    </div>
  </div>
</template>
