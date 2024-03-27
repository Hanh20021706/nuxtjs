<template>
  <!-- tạo file error  -->
  <div class="mx-auto text-center">
    <!-- status code trả về  -->
    <p>{{ error.statusCode }}</p>
    <!-- thông báo message  -->
    <p>{{ error.statusMessage }}</p>
    <button @click="handleClick">Go home...</button>
  </div>
</template>

<script setup>
defineProps(["error"]);
const handleClick = () => clearError({ redirect: "/" });
</script>

<style scoped></style>
