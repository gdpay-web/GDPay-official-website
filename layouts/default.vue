<template>
  <div>
    <Nuxt />
    <div class="h-[80px] xl:hidden"></div>
    <div class="fixed bottom-0 bg-blue w-full flex justify-center items-center h-[80px] xl:hidden">
      <DownloadButton class="h-[50px] xl:hidden" type="white" :download="false" />
    </div>
  </div>
</template>
