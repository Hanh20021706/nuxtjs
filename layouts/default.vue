// tạo 1 file default layout nó sẽ hiển thị ở tất cả các page
<template>
  <div>
    <div class="">
      <h2>this is header</h2>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products">products</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <!-- giống như hiển thị các nội dung ở các trang   -->
    <slot />
    <div class="">
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
