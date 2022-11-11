<template>
  <!-- 用於內文 1 -->
  <div class="py-[3.796vw] bg-cover bg-no-repeat xl:bg-else-bg-pc xl:min-h-full">
    <Header class="hidden xl:block" />
    <!-- <BurgerMenu class="xl:hidden" /> -->
    <Back />
    <Nuxt />
    <BottomBack />
    <client-only>
      <ScrollToTop />
    </client-only>

  </div>
</template>
