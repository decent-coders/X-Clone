<template lang="">
  <div class="flex justify-center items-center h-screen w-full bg-black">
    <img class="h-24 w-24 animate-pulse" src="/x-home.jpg" alt="" />
  </div>
</template>

<script setup>
  setTimeout(() => {
    navigateTo("/home");
  }, 2000);
  useSeoMeta({
    description: "X-clone by DecentCoders",
    ogTitle: "X-clone",
    ogDescription: "A clone made by Decent Coders",
    ogImage: "/favicon.ico",
    ogUrl: "https://x-clone-decentcoders.netlify.app/",
    twitterTitle: "X-clone",
    twitterDescription: "A clone made by Decent Coders",
    twitterImage: "/favicon.ico",
    twitterCard: "This is a clone of X",
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/ico",
        href: "/favicon.ico",
      },
    ],
  });
</script>
