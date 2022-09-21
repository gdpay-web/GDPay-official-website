<template>
  <div class="py-[3.796vw] bg-cover bg-no-repeat xl:bg-else-bg-pc xl:min-h-full">
    <Header class="hidden xl:block" />
    <BurgerMenu class="xl:hidden" />
    <img src="images/logo.png" class="w-[25.926vw] ml-[2.778vw] xl:hidden" alt="" @click="$router.push('/')" />
    <Nuxt />
    <div class="py-[5vw] flex-c-c">
      <button class="border-blue border rounded-full text-[#999999] text-[2.778vw] flex-c-c w-[23.148vw] h-[7.87vw] xl:w-[125px] xl:h-[40px] xl:text-[15px]" @click="$router.go(-1)">
        <img src="images/reply-solid.png" class="w-[3.889vw] mr-[1.481vw] xl:w-[21px] xl:mr-[5px]" alt="" />
        回上页
      </button>
    </div>
  </div>
</template>
