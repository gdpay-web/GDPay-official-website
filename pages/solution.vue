<template>
  <div class="pb-[25vw] xl:w-[1200px] xl:mx-auto xl:pb-[100px]">
    <Title title="收款流程" />
    <!-- <img src="images/process.png" class="mt-[5vw] xl:hidden" alt="" /> -->
    <div class="overflow-x-scroll mt-[5vw] block h-[65vw] w-auto xl:h-auto xl:overflow-hidden">
      <img src="images/process-pc.png" class="h-[100%] max-w-max" alt="" />
    </div>
    <div class="flex-c-c mt-[8vw] xl:hidden">
      <img src="images/arrow-left.png" class="w-[4.907vw]" alt="" />
      <p class="text-[#999999] text-[2.778vw] px-[1.4vw]">左右滑动图片查看全部</p>
      <img src="images/arrow-left.png" class="rotate-180 w-[4.907vw]" alt="" />
    </div>
    <Title title="快速集成" class="my-[8vw]" />
    <div class="xl:flex">
      <div class="w-[90.741vw] gd-rounded mx-auto gd-border tag before:content-['1.'] pb-[3.426vw] px-[3vw] pt-[8.5vw] xl:w-[390px] xl:mt-0 xl:p-0 xl:pb-[20px]">
        <div class="flex items-center justify-between xl:flex-col">
          <img src="images/layer-group-solid.png" class="w-[9.167vw] ml-[10vw] xl:w-[50px] xl:m-0 xl:my-[35px]" alt="" />
          <div class="w-[53vw] xl:w-full xl:px-[30px] xl:mb-[30px]">
            <p class="text-[5vw] text-blue xl:text-[24px] xl:text-center font-medium">全平台支持SDK</p>
            <p class="text-[3.333vw] text-[#666666] mt-[1.5vw] text-justify xl:text-[14px] xl:mt-[10px]">满足您全部的APP或者网站需求。通过SDK一键集成至您的软件，快速使您的产品拥有GD币收款能力</p>
          </div>
        </div>
        <div class="gd-rounded mx-auto flex items-center justify-center my-[7vw] xl:my-[20px]">
          <img src="images/android-brands.png" class="h-[9.352vw] xl:h-[40px]" alt="" />
          <img src="images/apple-brands.png" class="h-[9.352vw] xl:h-[40px] mx-[10vw] xl:mx-[20px]" alt="" />
          <img src="images/HTML5.png" class="h-[9.352vw] xl:h-[40px]" alt="" />
        </div>
        <button class="text-[3.333vw] gd-rounded h-[12.5vw] w-[83.333vw] flex-c-c bg-blue text-white mx-auto xl:w-[329px] xl:text-[18px] xl:h-[68px] cursor-pointer" @click="$router.push('/source-download')">
          <img src="images/download-solid-white.png" class="w-[4.815vw] mr-[2vw] xl:w-[26px] xl:mr-[10px]" alt="" />
          资源下载
        </button>
      </div>
      <div class="w-[90.741vw] gd-rounded mx-auto gd-border tag before:content-['2.'] pb-[3.426vw] px-[3vw] pt-[8.5vw] mt-[4.63vw] xl:w-[390px] xl:mt-0 xl:p-0 xl:pb-[20px]">
        <div class="flex items-center justify-between xl:flex-col">
          <img src="images/gears-solid.png" class="w-[11.667vw] ml-[8vw] xl:w-[63px] xl:m-0 xl:my-[35px]" alt="" />
          <div class="w-[53vw] xl:w-full xl:px-[30px] xl:mb-[30px]">
            <p class="text-[5vw] text-blue xl:text-[24px] xl:text-center font-medium">高度定制化API接口</p>
            <p class="text-[3.333vw] text-[#666666] mt-[1.5vw] text-justify xl:text-[14px] xl:mt-[10px]">
              我们提供非常丰富的API，以满足您各种定制化需求。您的技术人员可以通过阅读我们提供的在线技术文档，开发出专属您自己的业务方案。
            </p>
          </div>
        </div>
        <button class="text-[3.333vw] gd-rounded h-[12.5vw] w-[83.333vw] flex-c-c bg-blue text-white mx-auto mt-[4vw] xl:w-[329px] xl:text-[18px] xl:h-[68px] xl:mt-[50px] cursor-pointer" @click="$router.push('/document')">
          <img src="images/file-code-solid-white.png" class="w-[4.815vw] mr-[2vw] xl:w-[26px] xl:mr-[10px]" alt="" />
          开发文档
        </button>
      </div>
      <div class="w-[90.741vw] gd-rounded mx-auto gd-border tag before:content-['3.'] pb-[3.426vw] px-[3vw] pt-[8.5vw] mt-[4.63vw] xl:w-[390px] xl:mt-0 xl:p-0 xl:pb-[20px]">
        <div class="flex items-center justify-between xl:flex-col">
          <img src="images/person-dots-from-line-solid.png" class="w-[10.741vw] ml-[9vw] xl:w-[74px] xl:m-0 xl:my-[35px]" alt="" />
          <div class="w-[53vw] xl:w-full xl:px-[30px] xl:mb-[30px]">
            <p class="text-[5vw] text-blue xl:text-[24px] xl:text-center font-medium">商户管理平台</p>
            <p class="text-[3.333vw] text-[#666666] mt-[1.5vw] text-justify xl:text-[14px] xl:mt-[10px]">管理自己的GD币。您可在商户管理平台完成运营情况监控、财务对账、GD币充值、提现等操作。</p>
          </div>
        </div>
      </div>
    </div>
    <Title title="合作流程" class="my-[8vw]" />
    <div class="flex flex-wrap justify-start xl:justify-between items-center pl-[4.5vw]">
      <div class="w-[39.8vw] h-[auto] gd-rounded mx-0 flex items-center gd-border tag before:content-['1.'] flex-col-reverse xl:w-[150px] pb-[2.5vw] xl:pb-0 pt-[5vw] xl:pt-[60px] xl:p-0 xl:mx-0 justify-end xl:mb-0 mb-[9.8vw]">
        <p class="mt-[2.444vw] text-[3.33vw] text-[#333333] xl:text-[20px] xl:ml-0 xl:w-[100%] xl:pb-[20px] xl:mt-[15px] text-center">提交申请</p>
        <img src="images/paste-regular.png" class="h-[6.8vw] xl:h-[40px]" alt="" />
      </div>
      <Process />
      <div class="w-[39.8vw] h-[auto] gd-rounded mx-0 flex items-center gd-border tag before:content-['2.'] flex-col-reverse xl:w-[150px] pt-[5vw] pb-[2.5vw] xl:pb-0 xl:pt-[60px] xl:p-0 xl:mx-0 justify-end xl:mb-0 mb-[9.8vw]">
        <p class="mt-[2.444vw] text-[3.33vw] text-[#333333] xl:text-[20px] xl:ml-0 xl:w-[100%] xl:pb-[20px] xl:mt-[15px] text-center">等待商务关系</p>
        <img src="images/clock-regular.png" class="h-[6.8vw] xl:h-[40px]" alt="" />
      </div>
      <Process />
      <div class="w-[39.8vw] h-[auto] gd-rounded mx-0 flex items-center gd-border tag before:content-['3.'] flex-col-reverse xl:w-[150px] pb-[2.5vw] xl:pb-0 pt-[5vw] xl:pt-[60px] xl:p-0 xl:mx-0 justify-end xl:mb-0 mb-[9.8vw]">
        <p class="mt-[2.444vw] text-[3.33vw] text-[#333333] xl:text-[20px] xl:ml-0 xl:w-[100%] xl:pb-[20px] xl:mt-[15px] text-center">签约合同</p>
        <img src="images/file-signature-solid.png" class="h-[6.8vw] xl:h-[40px]" alt="" />
      </div>
      <Process />
      <div class="w-[39.8vw] h-[auto] gd-rounded mx-0 flex items-center gd-border tag before:content-['4.'] flex-col-reverse xl:w-[150px] pb-[2.5vw] xl:pb-0 pt-[5vw] xl:pt-[60px] xl:p-0 xl:mx-0 justify-end xl:mb-0 mb-[9.8vw]">
        <p class="mt-[2.444vw] text-[3.33vw] text-[#333333] xl:text-[20px] xl:ml-0 xl:w-[100%] xl:pb-[20px] xl:mt-[15px] text-center">交付物</p>
        <img src="images/box-archive-solid.png" class="h-[6.8vw] xl:h-[40px]" alt="" />
      </div>
      <Process />
      <div class="w-[39.8vw] h-[auto] gd-rounded mx-0 flex items-center gd-border tag before:content-['5.'] flex-col-reverse xl:w-[150px] pb-[2.5vw] xl:pb-0 pt-[5vw] xl:pt-[60px] xl:p-0 xl:mx-0 justify-end xl:mb-0 mb-[9.8vw]">
        <p class="mt-[2.444vw] text-[3.33vw] text-[#333333] xl:text-[20px] xl:ml-0 xl:w-[100%] xl:pb-[20px] xl:mt-[15px] text-center">技术支持</p>
        <img src="images/laptop-code-solid.png" class="h-[6.8vw] xl:h-[40px]" alt="" />
      </div>
      <Process />
      <div class="w-[39.8vw] h-[auto] gd-rounded mx-0 flex items-center gd-border tag before:content-['6.'] flex-col-reverse xl:w-[150px] pb-[2.5vw] xl:pb-0 pt-[5vw] xl:pt-[60px] xl:p-0 xl:mx-0 justify-end xl:mb-0 mb-[9.8vw]">
        <p class="mt-[2.444vw] text-[3.33vw] text-[#333333] xl:text-[20px] xl:ml-0 xl:w-[100%] xl:pb-[20px] xl:mt-[15px] text-center">完成上线</p>
        <img src="images/circle-check-regular.png" class="h-[6.8vw] xl:h-[40px]" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'layout-a'
}
</script>
