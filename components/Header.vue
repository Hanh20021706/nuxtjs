<template>
  <div class="container grid grid-cols-12 gap-2 py-[32px]">
    <div class="col-span-4 flex inline-block">
      <div class="bg-blueLight flex items-center gap-1 px-[12px] rounded-full">
        <img src="./../assets/./icons/image 31.svg" alt="" />
        <span class="text-white"> Phiên bản thử nghiệm</span>
      </div>
    </div>
    <div class="col-span-4 flex justify-center">
      <img src="./../assets/image/logo.png" alt="" class="max-w-[255px]" />
    </div>
    <div class="col-span-4 flex justify-end">
      <ul class="flex gap-3 items-center">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>
  </div>
  <ul class="flex gap-3 items-center">
    <li><NuxtLink to="/">Home</NuxtLink></li>
    <li><NuxtLink to="/products">Products</NuxtLink></li>
    <li><NuxtLink to="/about">About</NuxtLink></li>
  </ul>
</template>

<script setup></script>

<style lang="scss" scoped></style>
