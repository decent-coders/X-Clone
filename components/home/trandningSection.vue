<template lang="">
  <div class="flex">
    <div class="">
      <UPopover
        :ui="{
          background: 'bg-gray-900',
          ring: 'ring-gray-600',
          rounded: 'rounded-xl',
        }"
      >
        <h1
          class="font-system text-gray-500 tracking-wider text-xs hover:text-gray-400 cursor-pointer"
        >
          Trending in Bangladesh
        </h1>

        <template #panel>
          <div
            class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
          >
            <h1>Haven't added this feature Sorry!!</h1>
          </div>
        </template>
      </UPopover>

      <h2
        class="font-system font-medium text-base tracking-wide cursor-pointer hover:font-bold"
      >
        <UPopover
          :ui="{
            background: 'bg-gray-900',
            ring: 'ring-gray-600',
            rounded: 'rounded-xl',
          }"
        >
          {{ name }}

          <template #panel>
            <div
              class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
            >
              <h1>Haven't added this feature Sorry!!</h1>
            </div>
          </template>
        </UPopover>
      </h2>
      <h3
        class="text-gray-500 font-system tracking-wider text-xs pb-1 hover:text-gray-400 cursor-pointer mb-5"
      >
        <UPopover
          :ui="{
            background: 'bg-gray-900',
            ring: 'ring-gray-600',
            rounded: 'rounded-xl',
          }"
        >
          {{ numberOfPosts }}

          <template #panel>
            <div
              class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
            >
              <h1>Haven't added this feature Sorry!!</h1>
            </div>
          </template>
        </UPopover>
      </h3>
    </div>

    <div class="ml-auto mt-5 mr-2">
      <UPopover
        :ui="{
          background: 'bg-gray-900',
          ring: 'ring-gray-600',
          rounded: 'rounded-xl',
        }"
      >
        <i
          class="fa-solid fa-ellipsis cursor-pointer text-gray-500 hover:text-sky-400"
        ></i>

        <template #panel>
          <div
            class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
          >
            <h1>Haven't added this feature Sorry!!</h1>
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<script setup lang="">
  const props = defineProps(["name", "numberOfPosts"]);
</script>
