<template lang="">
  <div class="flex">
    <div class="">
      <h1
        class="font-system text-gray-500 tracking-wider text-xs hover:text-gray-400 cursor-pointer"
      >
        Trending in Bangladesh
      </h1>
      <h2
        class="font-system font-medium text-base tracking-wide cursor-pointer hover:font-bold"
      >
        {{ name }}
      </h2>
      <h3
        class="text-gray-500 font-system tracking-wider text-xs pb-1 hover:text-gray-400 cursor-pointer mb-5"
      >
        {{ numberOfPosts }}
      </h3>
    </div>

    <i
      class="fa-solid fa-ellipsis ml-auto mr-2 mt-5 cursor-pointer text-gray-500 hover:text-sky-400"
    ></i>
  </div>
</template>

<script setup lang="">
  const props = defineProps(["name", "numberOfPosts"]);
</script>
