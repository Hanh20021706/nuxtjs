<template>
  <div>
    <h2>{{ product.title }}</h2>

    <!-- id -->
    <h2>id is : {{ $route.params.id }}</h2>
    <!-- end -->
    <h2>this is product detail anh id: {{ id }}</h2>
    <img alt="" :src="product.image" class="w-[100px] h-[100px]" />
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup>
// sử dụng useRoute đẻ lấy được id của sản phẩm
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri, { key: id });

// chỉnh sủa lại thông báo error status và message
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}
// sau đó gọi chúng ở đây để sử dụng
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
