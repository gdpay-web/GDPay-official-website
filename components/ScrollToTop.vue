<template>
  <Transition>
    <div v-if="isShow" @click="scrollToTop" class="fixed xl:right-[10px] xl:bottom-[95px] right-[5px] bottom-[100px]">
      <img src="images/TOP.png" class="xl:w-[65px] xl:h-[65px] w-[12vw] h-[12vw]" alt="" />
    </div>
  </Transition>
</template>
<script setup>
import { ref, computed } from 'vue'

const windowOffsetTop = ref(0)
const startOffsetTop = ref(100)

const isShow = computed(() => windowOffsetTop.value >= startOffsetTop.value)

windowOffsetTop.value = window.pageYOffset || document.documentElement.scrollTop
window.addEventListener('scroll', () => {
  windowOffsetTop.value = window.pageYOffset || document.documentElement.scrollTop
})
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 10)
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
