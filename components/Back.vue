<template>
  <div class="xl:hidden fixed h-[3.518vw] top-[4.866vw] left-[5.555vw] z-10">
    <img v-if="config.isShow" src="images/back.png" class="h-[100%] w-auto" alt="" @click="$router.go(-1)" />
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
