<template>
  <div class="xl:flex xl:flex-wrap xl:justify-between">
    <div class="w-[100%] text-[5vw] xl:text-[37px] my-[30px] text-center text-blue">帮助中心</div>
    <div class="mt-[10vw] xl:mt-[60px] xl:w-[48%]" v-for="item in $route.query.from ? list_h5 : list_pc" :key="item.title">
      <div class="flex justify-start items-baseline" :id="item.title">
        <span class="text-[#333333] text-[4.167vw] font-medium xl:text-[23px]">{{ item.title }}</span>
        <span class="text-[#999999] text-[3.333vw] font-medium ml-[2.685vw] xl:text-[18px] xl:ml-[15px]">{{ item.data.length }} 篇文章</span>
      </div>
      <hr class="border-t-[1px] border-[#ccc]" />
      <ul>
        <li
          v-for="item2 in item.data"
          class="text-[3.333vw] mt-[6vw] flex items-center leading-tight pl-[1.481vw] xl:pl-[10px] xl:text-[18px] xl:mt-[30px] cursor-pointer"
          @click="$router.push(item2.path)"
        >
          <img src="images/A-blue.png" class="w-[1.204vw] h-[2.13vw] mr-[1.759vw] xl:w-[6px] xl:h-[11px] xl:mr-[5px]" alt="" />
          {{ item2.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-f',
  data() {
    return {
      list_pc: [
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
        },
        {
          title: '搬砖教程',
          data: [{ title: '搬砖教程', path: '/assist/15' }]
        },
        {
          title: 'USDT相关',
          data: [
            { title: '充币多久到账', path: '/assist/16' },
            { title: '充币没有到账怎么处理', path: '/assist/17' },
            { title: '充币需要手续费吗', path: '/assist/18' },
            { title: '什么是公链协议?什么是TRC20?', path: '/assist/19' },
            { title: '如何购买USDT?', path: '/assist/20' },
            { title: '什么是USDT?', path: '/assist/21' }
          ]
        }
      ],
      list_h5: [
        {
          title: '产品简介',
          data: [
            { title: '什么是GDPay和GDB？', path: `/assist/1_h5` },
            { title: 'GDPay钱包有什么优势和特色？', path: `/assist/2_h5` }
          ]
        },
        {
          title: '准备工作',
          data: [
            { title: '实名认证', path: `/assist/3_h5` },
            { title: '绑定支付方式', path: `/assist/4_h5` }
          ]
        },
        {
          title: '购买与出售',
          data: [
            { title: '如何购买GDB？', path: `/assist/5_h5` },
            { title: '如何出售GDB？ 1. 挂单', path: `/assist/6_h5` },
            { title: '如何出售GDB？ 2. 交易', path: `/assist/7_h5` }
          ]
        },
        {
          title: '钱包的应用',
          data: [
            { title: '在游戏平台充值', path: `/assist/8_h5` },
            { title: '在游戏平台提现', path: `/assist/9_h5` }
          ]
        },
        {
          title: '积分系统',
          data: [
            { title: '什么是积分？', path: `/assist/10_h5` },
            { title: '如何获得积分？', path: `/assist/11_h5` }
          ]
        },
        {
          title: '常见问题',
          data: [
            // { title: '忘记密码怎么办？', path: `/assist/12` },
            { title: '忘记支付密码怎么办？', path: `/assist/22_h5` },
            { title: '交易收取费用吗？', path: `/assist/13_h5` },
            { title: '交易出现问题怎么办？', path: `/assist/14_h5` }
          ]
        },
        {
          title: '搬砖教程',
          data: [{ title: '搬砖教程', path: '/assist/15_h5' }]
        }
        // {
        //   title: 'USDT相关',
        //   data: [
        //     { title: '充币多久到账', path: '/assist/16' },
        //     { title: '充币没有到账怎么处理', path: '/assist/17' },
        //     { title: '充币需要手续费吗', path: '/assist/18' },
        //     { title: '什么是公链协议?什么是TRC20?', path: '/assist/19' },
        //     { title: '如何购买USDT?', path: '/assist/20' },
        //     { title: '什么是USDT?', path: '/assist/21' }
        //   ]
        // }
      ]
    }
  },
  mounted() {
    if ($nuxt.$route.query.from && window) {
      window.from = 'gdpay_h5'
      $nuxt.$route.query.from = 'gdpay_h5'
    }
  }
}
</script>
