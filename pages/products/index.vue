<template>
  <div>
    <h2>this is product page</h2>
    <button class="button">click me</button>

    <!-- hiển thị danh sách sản phẩm -->
    <h2>hiển thị danh sách sản phẩm</h2>
    <div class="flex flex-wrap gap-2">
      <!-- dùng for để list ra sản phẩm  -->
      <div class="border border-gray-500 p-3" v-for="product in products">
        <!-- dùng nuxtlink để click vào trang chi tết sản phẩm  -->
        <NuxtLink :to="`/products/${product.id}`">
          <h2>
            {{ product.title }}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
//fetch data
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
