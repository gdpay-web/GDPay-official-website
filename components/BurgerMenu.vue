<template>
  <div>
    <div :class="{ 'menu-opened': active }">
      <div class="fixed right-[2vw] top-[2vw] burger z-20" @click="toggle">
        <div class="burger-bar" :class="{ 'before:bg-white': active }"></div>
        <div class="burger-bar" :class="{ 'before:bg-white': active }"></div>
      </div>
    </div>
    <div class="bg-blue h-full top-0 fixed w-full z-10" :class="active ? 'flex-c-c' : 'hidden'">
      <ul class="text-white text-[5.093vw] text-center leading-[15vw]">
        <li v-for="item in list" :key="item.title" @click="link(`/assist#${item.title}`)">{{ item.title }}</li>
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

const list = [
  {
    title: '首页',
    data: [
      { title: '什么是GDPay和GDB？', path: '/' },
      { title: 'GDPay钱包有什么优势和特色？', path: '/assist/2' }
    ]
  },
  {
    title: '产品简介',
    data: [
      { title: '什么是GDPay和GDB？', path: '/assist/1' },
      { title: 'GDPay钱包有什么优势和特色？', path: '/assist/2' }
    ]
  },
  {
    title: '准备工作',
    data: [
      { title: '实名认证', path: '/assist/3' },
      { title: '绑定支付方式', path: '/assist/4' }
    ]
  },
  {
    title: '购买与出售',
    data: [
      { title: '如何购买GDB？', path: '/assist/5' },
      { title: '如何出售GDB？ 1. 挂单', path: '/assist/6' },
      { title: '如何出售GDB？ 2. 交易', path: '/assist/7' }
    ]
  },
  {
    title: '钱包的应用',
    data: [
      { title: '在游戏平台充值', path: '/assist/8' },
      { title: '在游戏平台提现', path: '/assist/9' }
    ]
  },
  {
    title: '积分系统',
    data: [
      { title: '什么是积分？', path: '/assist/10' },
      { title: '如何获得积分？', path: '/assist/11' }
    ]
  },
  {
    title: '常见问题',
    data: [
      { title: '忘记密码怎么办？', path: '/assist/12' },
      { title: '交易收取费用吗？', path: '/assist/13' },
      { title: '交易出现问题怎么办？', path: '/assist/14' }
    ]
  }
]
</script>
