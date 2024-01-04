<template>
  <!-- 用於內文 1 -->
  <div class="py-[3.796vw] bg-cover bg-no-repeat xl:bg-else-bg-pc xl:min-h-full">
    <Header class="hidden xl:block" />
    <!-- <BurgerMenu class="xl:hidden" /> -->
    <!-- <Back /> -->
    <Nuxt />
    <BottomBack />
    <client-only>
      <ScrollToTop />
    </client-only>
    <div class="h-[80px] xl:hidden"></div>
    <div class="fixed bottom-0 bg-blue w-full flex justify-center items-center h-[80px] xl:hidden">
      <DownloadButton class="h-[50px] xl:hidden" type="white" :download="false" />
    </div>
  </div>
</template>
<script>