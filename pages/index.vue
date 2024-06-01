<template lang="">
  <div class="flex justify-center items-center h-screen w-screen bg-black">
    <img class="h-24 w-24 animate-pulse" src="/x-home.jpg" alt="" />
  </div>
</template>

<script setup>
  setTimeout(() => {
    navigateTo("/home");
  }, 2000);
</script>
