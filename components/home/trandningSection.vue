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

    <div class="ml-auto mt-5 mr-2">
      <UTooltip
        :ui="{
          base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
          background: 'bg-gray-900',
          ring: 'ring-gray-800',
        }"
        :openDelay="1000"
      >
        <i
          class="fa-solid fa-ellipsis cursor-pointer text-gray-500 hover:text-sky-400"
        ></i>
        <template #text>
          <span>More</span>
        </template>
      </UTooltip>
    </div>
  </div>
</template>

<script setup lang="">
  const props = defineProps(["name", "numberOfPosts"]);
</script>
