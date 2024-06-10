<template lang="">
  <div class="p-3 border-b border-gray-600">
    <div class="flex justify-start">
      <div id="ppImage" class="w-10 h-full">
        <img class="h-10 w-10 rounded-full" src="/public/me.webp" alt="" />
      </div>

      <div ref="post" class="flex-1">
        <div class="flex justify-between items-center" ref="profileDetails">
          <div>
            <div id="ppName" class="ms-2 flex items-center">
              <h1 class="text-base font-semibold font-system">
                Hridoy Hawladar
              </h1>
              <h2 class="text-gray-500 ps-2 font-system tracking-wider">
                @DecentCoders
              </h2>
              <i class="fa-solid fa-circle ms-1 text-[3px] text-gray-500"></i>
              <div class="text-gray-500 ms-1 font-system tracking-wider">
                19h
              </div>
            </div>
          </div>
          <div
            class="rounded-full text-gray-500 cursor-pointer hover:text-sky-400 hover:bg-gray-800 flex items-center justify-center mt-2 h-6 w-6"
          >
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <!-- post text -->
        <div class="" ref="post-text">
          <h1 class="pl-2 text-base font-normal font-system">Hello !!!!</h1>
        </div>
        <!-- post file -->
        <div class="pr-4 mt-2" ref="post-file">
          <img class="rounded-3xl" src="/public/me.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang=""></script>
