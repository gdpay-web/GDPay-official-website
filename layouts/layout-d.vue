<template>
  <div class="h-full py-[3.796vw]">
    <BurgerMenu />
    <img src="images/logo.png" class="w-[25.926vw] ml-[2.778vw]" alt="" />
    <Nuxt />
    <div class="py-[5vw] flex-c-c">
      <button class="border-blue border rounded-full text-[#999999] text-[2.778vw] flex-c-c w-[23.148vw] h-[7.87vw]" @click="$router.go(-1)">
        <img src="images/reply-solid.png" class="w-[3.889vw] mr-[1.481vw]" alt="" />
        回上页
      </button>
    </div>
  </div>
</template>
