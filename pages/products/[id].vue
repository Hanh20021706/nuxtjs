<template>
  <div>
    <h2>this is product detail anh id: {{ id }}</h2>
  </div>
</template>

<script setup>
// sử dụng useRoute đẻ lấy được id của sản phẩm
const { id } = useRoute().params;

// sau đó gọi chúng ở đây để sử dụng
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
