<template lang="">
  <div class="flex p-3 border-b border-gray-600">
    <div id="ppImage" class="w-10 h-full">
      <img class="h-10 w-10 rounded-full" src="/public/me.webp" alt="" />
    </div>
    <!-- post input -->
    <div class="flex-1">
      <div class="border-b border-gray-600 ml-3 mr-5 mt-2 tracking-wider">
        <textarea
          rows="1"
          id="textarea"
          style="resize: none"
          placeholder="What is happening?!"
          @input="textAreaHeight"
          class="bg-transparent w-full outline-none mb-1 font-system text-xl"
        ></textarea>
        <p
          class="text-sky-500 font-semibold font-system text-sm pl-2 pb-3 cursor-pointer"
        >
          <i class="fa-solid fa-earth-americas pr-1"></i> Everyone can reply
        </p>
      </div>
      <div class="m-3 mb-0 flex justify-between items-center cursor-pointer">
        <div class="text-sky-500 text-lg flex">
          <UTooltip
            :ui="{
              base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
              background: 'bg-gray-900',
              ring: 'ring-gray-800',
            }"
            :openDelay="1000"
          >
            <i class="fa-regular fa-image me-4 hover:text-sky-600"></i>
            <template #text>
              <span>Media</span>
            </template>
          </UTooltip>

          <UTooltip
            :ui="{
              base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
              background: 'bg-gray-900',
              ring: 'ring-gray-800',
            }"
            :openDelay="1000"
          >
            <i class="fa-regular fa-face-smile me-4 hover:text-sky-600"></i>
            <template #text>
              <span>Emoji</span>
            </template>
          </UTooltip>

          <UTooltip
            :ui="{
              base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
              background: 'bg-gray-900',
              ring: 'ring-gray-800',
            }"
            :openDelay="1000"
          >
            <i class="fa-solid fa-location-dot hover:text-sky-600"></i>
            <template #text>
              <span>Location</span>
            </template>
          </UTooltip>
        </div>

        <button
          class="flex justify-center items-center p-2 tracking-wider font-system font-semibold rounded-full px-4 bg-sky-600 hover:bg-sky-700 text-base"
        >
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="">
  const textAreaHeight = () => {
    var textarea = document.getElementById("textarea");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };
</script>
