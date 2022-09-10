<template>
  <div class="pb-[25vw]">
    <Title title="收款流程" />
    <img src="images/process.png" class="mt-[5vw]" alt="" />
    <div class="flex-c-c mt-[8vw]">
      <img src="images/arrow-left.png" class="w-[4.907vw]" alt="" />
      <p class="text-[#999999] text-[2.778vw] px-[1.4vw]">左右滑动图片查看全部</p>
      <img src="images/arrow-left.png" class="rotate-180 w-[4.907vw]" alt="" />
    </div>
    <Title title="快速集成" class="my-[8vw]" />
    <div class="w-[90.741vw] rounded-[1.759vw] mx-auto gd-border tag before:content-['1.'] pb-[3.426vw] px-[3vw] pt-[8.5vw]">
      <div class="flex items-center justify-between">
        <img src="images/layer-group-solid.png" class="w-[9.167vw] ml-[10vw]" alt="" />
        <div class="w-[53vw]">
          <p class="text-[5vw] text-blue">全平台支持SDK</p>
          <p class="text-[3.333vw] text-[#666666] mt-[1.5vw] text-justify">满足您全部的APP或者网站需求。通过SDK一键集成至您的软件，快速使您的产品拥有GD币收款能力</p>
        </div>
      </div>
      <div class="rounded-[1.759vw] mx-auto flex items-center justify-center my-[7vw]">
        <img src="images/android-brands.png" class="h-[9.352vw]" alt="" />
        <img src="images/apple-brands.png" class="h-[9.352vw] mx-[10vw]" alt="" />
        <img src="images/HTML5.png" class="h-[9.352vw]" alt="" />
      </div>
      <button class="text-[3.333vw] rounded-[1.759vw] h-[12.5vw] w-[83.333vw] flex-c-c bg-blue text-white mx-auto" @click="$router.push('/source-download')">
        <img src="images/download-solid-white.png" class="w-[4.815vw] mr-[2vw]" alt="" />
        资源下载
      </button>
    </div>
    <div class="w-[90.741vw] rounded-[1.759vw] mx-auto gd-border tag before:content-['2.'] pb-[3.426vw] px-[3vw] pt-[8.5vw] mt-[4.63vw]">
      <div class="flex items-center justify-between">
        <img src="images/gears-solid.png" class="w-[11.667vw] ml-[8vw]" alt="" />
        <div class="w-[53vw]">
          <p class="text-[5vw] text-blue">高度定制化API接口</p>
          <p class="text-[3.333vw] text-[#666666] mt-[1.5vw] text-justify">
            我们提供非常丰富的API，以满足您各种定制化需求。您的技术人员可以通过阅读我们提供的在线技术文档，开发出专属您自己的业务方案。
          </p>
        </div>
      </div>
      <button class="text-[3.333vw] rounded-[1.759vw] h-[12.5vw] w-[83.333vw] flex-c-c bg-blue text-white mx-auto mt-[4vw]" @click="$router.push('/document')">
        <img src="images/file-code-solid-white.png" class="w-[4.815vw] mr-[2vw]" alt="" />
        开发文档
      </button>
    </div>
    <div class="w-[90.741vw] rounded-[1.759vw] mx-auto gd-border tag before:content-['3.'] pb-[3.426vw] px-[3vw] pt-[8.5vw] mt-[4.63vw]">
      <div class="flex items-center justify-between">
        <img src="images/person-dots-from-line-solid.png" class="w-[10.741vw] ml-[9vw]" alt="" />
        <div class="w-[53vw]">
          <p class="text-[5vw] text-blue">商户管理平台</p>
          <p class="text-[3.333vw] text-[#666666] mt-[1.5vw] text-justify">管理自己的GD币。您可在商户管理平台完成运营情况监控、财务对账、GD币充值、提现等操作。</p>
        </div>
      </div>
    </div>
    <Title title="合作流程" class="my-[8vw]" />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.278vw] gd-border tag before:content-['1.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">提交申请</p>
      <img src="images/paste-regular.png" class="h-[10.37vw]" alt="" />
    </div>
    <Process />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.278vw] gd-border tag before:content-['2.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">等待商务关系</p>
      <img src="images/clock-regular.png" class="h-[10.37vw]" alt="" />
    </div>
    <Process />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.278vw] gd-border tag before:content-['3.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">签约合同</p>
      <img src="images/file-signature-solid.png" class="h-[10.37vw]" alt="" />
    </div>
    <Process />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.278vw] gd-border tag before:content-['4.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">交付物</p>
      <img src="images/box-archive-solid.png" class="h-[10.37vw]" alt="" />
    </div>
    <Process />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.278vw] gd-border tag before:content-['5.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">技术支持</p>
      <img src="images/laptop-code-solid.png" class="h-[10.37vw]" alt="" />
    </div>
    <Process />
    <div class="w-[90.741vw] h-[25.37vw] rounded-[1.759vw] mx-auto flex items-center justify-between pr-[5.278vw] gd-border tag before:content-['6.']">
      <p class="ml-[9.444vw] text-[4.444vw] text-[#333333]">完成上线</p>
      <img src="images/circle-check-regular.png" class="h-[10.37vw]" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-a'
}
</script>
