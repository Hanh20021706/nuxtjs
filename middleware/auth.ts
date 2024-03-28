export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  console.log("to", to);
  // điểm đến
  if (isLoggedIn) {
    // chuyển hướng đến trang muốn truy cập
    return navigateTo(to.fullPath);
  }
  // điều hướng đến đăng nhập
  return navigateTo("/login");
});
