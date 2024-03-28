<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <!-- cách translate -->
  <!-- <div class="">{{ $t("title") }}</div>
  <div class="">{{ $t("home.title") }}</div> -->
  <h2>home page</h2>
  <IconsVn />
  <PostHeader />
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt beatae
    laboriosam iste, incidunt quam accusantium assumenda? Quaerat totam eius
    ipsam! Cum dolorem quidem tempore a dignissimos distinctio maiores odio sed!
  </p>
</template>
