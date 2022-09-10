<template>
  <div>
    <div :class="{ 'menu-opened': active }">
      <div class="absolute right-[2vw] top-[2vw] burger z-20" @click="toggle">
        <div class="burger-bar" :class="{ 'before:bg-white': active }"></div>
        <div class="burger-bar" :class="{ 'before:bg-white': active }"></div>
      </div>
    </div>
    <div class="bg-blue h-full top-0 fixed w-full z-10" :class="active ? 'flex-c-c' : 'hidden'">
      <ul class="text-white text-[5.093vw] text-center leading-[15vw]">
        <li @click="link('/assist')">首页</li>
        <li @click="link('/announcement')">公告中心</li>
        <li @click="link('/question')">交易常见问题</li>
        <li @click="link('/guide')">新手指南</li>
        <li @click="link('/agreement')">协议条款</li>
        <li @click="link('/operation')">运营活动</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const active = ref(false)
const toggle = () => (active.value = !active.value)

const link = (path) => {
  $nuxt.$router.push(path)
  toggle()
}
</script>
