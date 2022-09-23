<template>
  <div class="py-[3.796vw] bg-cover bg-no-repeat xl:bg-else-bg-pc xl:min-h-full">
    <Header class="hidden xl:block" />
    <BurgerMenu class="xl:hidden" />
    <div class="xl:hidden fixed h-[3.518vw] top-[4.866vw] left-[5.555vw] z-10">
      <img src="images/back.png" class="h-[100%] w-auto" alt="" @click="$router.go(-1)" />
    </div>
    <Nuxt />
    <div class="pt-[4vw] pb-[2vw] flex-c-c">
      <button class="border-blue border rounded-full text-[#999999] text-[2.778vw] flex-c-c w-[23.148vw] h-[7.87vw] xl:w-[125px] xl:h-[40px] xl:text-[15px]" @click="$router.go(-1)">
        <img src="images/reply-solid.png" class="w-[3.889vw] mr-[1.481vw] xl:w-[21px] xl:mr-[5px]" alt="" />
        回上页
      </button>
    </div>
    <client-only>
      <ScrollToTop />
    </client-only>

  </div>
</template>
