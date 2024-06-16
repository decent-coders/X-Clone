<template>
  <div class="p-3 border-b border-gray-600">
    <div class="flex justify-start">
      <div id="ppImage" class="w-10 h-full">
        <img
          class="h-10 w-10 rounded-full cursor-pointer"
          src="/public/me.webp"
          alt=""
        />
      </div>

      <div ref="post" class="flex-1">
        <div class="flex justify-between items-center" ref="profileDetails">
          <div>
            <div id="ppName" class="ms-2 flex items-center cursor-pointer">
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
            <UTooltip
              :ui="{
                base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                background: 'bg-gray-900',
                ring: 'ring-gray-800',
              }"
              :openDelay="1000"
            >
              <i class="fa-solid fa-ellipsis"></i>
              <template class="bg-black m-0 p-0" #text>
                <span>More</span>
              </template>
            </UTooltip>
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

        <!-- Post react -->
        <div class="pt-3 flex text-gray-500 justify-between text-lg pr-6">
          <div class="flex items-center">
            <UTooltip
              :ui="{
                base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                background: 'bg-gray-900',
                ring: 'ring-gray-800',
              }"
              :openDelay="1000"
            >
              <div class="flex cursor-pointer hover:text-blue-500 items-center">
                <i class="fa-regular fa-comment"></i>
                <p class="m-0 p-0 ps-2 text-sm font-system">11</p>
              </div>
              <template #text>
                <span>Reply</span>
              </template>
            </UTooltip>
          </div>

          <div>
            <UTooltip
              :ui="{
                base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                background: 'bg-gray-900',
                ring: 'ring-gray-800',
              }"
              :openDelay="1000"
            >
              <i
                class="fa-solid fa-repeat cursor-pointer hover:text-green-500"
              ></i>
              <template #text>
                <span>Repost</span>
              </template>
            </UTooltip>
          </div>

          <div class="flex cursor-pointer hover:text-red-500 items-center">
            <UTooltip
              :ui="{
                base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                background: 'bg-gray-900',
                ring: 'ring-gray-800',
              }"
              :openDelay="1000"
            >
              <div class="flex cursor-pointer hover:text-red-500 items-center">
                <i class="fa-regular fa-heart"></i>
                <p class="ps-2 text-sm font-system">11</p>
              </div>
              <template #text>
                <span>Like</span>
              </template>
            </UTooltip>
          </div>

          <div class="flex">
            <div>
              <UTooltip
                :ui="{
                  base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                  background: 'bg-gray-900',
                  ring: 'ring-gray-800',
                }"
                :openDelay="1000"
              >
                <div>
                  <i
                    class="fa-regular fa-bookmark mr-7 cursor-pointer hover:text-blue-400"
                  ></i>
                </div>
                <template #text>
                  <span>Bookmark</span>
                </template>
              </UTooltip>
            </div>

            <div>
              <UTooltip
                :ui="{
                  base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                  background: 'bg-gray-900',
                  ring: 'ring-gray-800',
                }"
                :openDelay="1000"
              >
                <div>
                  <i
                    class="fa-solid fa-arrow-up-from-bracket cursor-pointer hover:text-blue-400"
                  ></i>
                </div>
                <template class="bg-transparent" #text>
                  <span>Share</span>
                </template>
              </UTooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
