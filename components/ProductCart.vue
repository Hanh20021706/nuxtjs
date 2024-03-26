<template>
  <div>
    <h2>this is the product cart</h2>
    <NuxtLink :to="`/products/${product.id}`">
      <h2>
        {{ product.title }}
      </h2>
    </NuxtLink>
  </div>
</template>

<script setup>
// khởi tạo props cho component
const { product } = defineProps(["product"]);
</script>

<style lang="scss" scoped></style>
