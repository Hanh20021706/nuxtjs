<template>
  <div>this is about page</div>
</template>

<script>
const { data: products } = await useFetch("/api/products");
console.log("data", toRaw(products.value));
</script>
