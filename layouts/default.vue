// tạo 1 file default layout nó sẽ hiển thị ở tất cả các page
<template>
  <div>
    <!-- header -->
    <Header />
    <!-- giống như hiển thị các nội dung ở các trang   -->
    <div class="container">
      <slot />
    </div>
    <div class="container">
      <h2>this is footer</h2>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
