<template>
  <div class="pt-[4vw] pb-[2vw] flex-c-c">
    <button v-if="config.isShow" class="border-blue border rounded-full text-[#999999] text-[2.778vw] flex-c-c w-[23.148vw] h-[7.87vw] xl:w-[125px] xl:h-[40px] xl:text-[15px]" @click="$router.go(-1)">
      <img src="images/reply-solid.png" class="w-[3.889vw] mr-[1.481vw] xl:w-[21px] xl:mr-[5px]" alt="" />
      回上页
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { onMounted } from 'vue'

const config = reactive({
  isShow: {}
})

onMounted(() => {
  config.isShow = $nuxt.$route?.query?.f !== 'app'
})
</script>
