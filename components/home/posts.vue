<template>
  <div class="p-3 border-b border-gray-600">
    <div class="flex justify-start">
      <div id="ppImage" class="w-10 h-full">
        <UPopover
          mode="hover"
          :ui="{
            background: 'bg-gray-900',
            ring: 'ring-gray-600',
            rounded: 'rounded-xl',
          }"
        >
          <img
            class="h-10 w-10 rounded-full cursor-pointer"
            src="/public/me.webp"
            alt=""
          />
          <template #panel>
            <div class="w-72 p-4 bg-black cursor-auto">
              <div class="">
                <div class="flex justify-between">
                  <div id="ppImage" class="">
                    <img
                      class="h-16 mb-2 w-16 rounded-full cursor-pointer"
                      src="/public/me.webp"
                      alt=""
                    />
                  </div>

                  <button
                    class="rounded-full px-4 h-8 bg-slate-200 hover:bg-slate-300 font-bold text-black text-sm tracking-[1px] z-10 absolute right-3 font-system"
                    :class="{
                      'text-gray-300 border h-9 border-gray-600 bg-zinc-950  hover:bg-zinc-900':
                        follow,
                    }"
                    ref="followButton"
                    @click="handleFollowing"
                  >
                    {{ followMssg }}
                  </button>
                </div>
                <div id="ppName" class="mb-2">
                  <h1
                    class="font-semibold font-system cursor-pointer hover:underline"
                  >
                    Hridoy Hawladar
                  </h1>
                  <h2
                    class="text-gray-500 hover:underline font-system tracking-wider cursor-pointer"
                  >
                    @DecentCoders
                  </h2>
                </div>
                <div id="ppbio" class="font-system font-normal cursor-text">
                  Web Developer, I love building things for the web and sharing
                  my knowledge with others. Let's connect!!!
                </div>
                <div id="followDetails" class="mt-2 flex justify-start">
                  <div
                    class="font-system text-gray-500 hover:border-b border-white font-thin cursor-pointer h-5 leading-none"
                  >
                    <span class="font-semibold text-gray-200 mr-1">420</span
                    >Following
                  </div>
                  <div
                    class="font-system text-gray-500 hover:border-b border-white font-thin cursor-pointer ml-4 h-5 leading-none"
                  >
                    <span class="font-semibold text-gray-200 mr-1">420</span
                    >Followers
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UPopover>
      </div>

      <div ref="post" class="flex-1">
        <div class="flex justify-between items-center" ref="profileDetails">
          <div>
            <div id="ppName" class="ms-2 flex items-center cursor-pointer">
              <UPopover
                mode="hover"
                :ui="{
                  background: 'bg-gray-900',
                  ring: 'ring-gray-600',
                  rounded: 'rounded-xl',
                }"
              >
                <h1 class="text-base font-semibold font-system">
                  Hridoy Hawladar
                </h1>
                <template #panel>
                  <div class="w-72 p-4 bg-black cursor-auto">
                    <div class="">
                      <div class="flex justify-between">
                        <div id="ppImage" class="">
                          <img
                            class="h-16 mb-2 w-16 rounded-full cursor-pointer"
                            src="/public/me.webp"
                            alt=""
                          />
                        </div>
                        <button
                          class="rounded-full px-4 h-8 bg-slate-200 hover:bg-slate-300 font-bold text-black text-sm tracking-[1px] z-10 absolute right-3 font-system"
                          :class="{
                            'text-gray-300 border h-9 border-gray-600 bg-zinc-950  hover:bg-zinc-900':
                              follow,
                          }"
                          ref="followButton"
                          @click="handleFollowing"
                        >
                          {{ followMssg }}
                        </button>
                      </div>
                      <div id="ppName" class="mb-2">
                        <h1
                          class="font-semibold font-system cursor-pointer hover:underline"
                        >
                          Hridoy Hawladar
                        </h1>
                        <h2
                          class="text-gray-500 hover:underline font-system tracking-wider cursor-pointer"
                        >
                          @DecentCoders
                        </h2>
                      </div>
                      <div
                        id="ppbio"
                        class="font-system font-normal cursor-text"
                      >
                        Web Developer, I love building things for the web and
                        sharing my knowledge with others. Let's connect!!!
                      </div>
                      <div id="followDetails" class="mt-2 flex justify-start">
                        <div
                          class="font-system text-gray-500 hover:border-b border-white font-thin cursor-pointer h-5 leading-none"
                        >
                          <span class="font-semibold text-gray-200 mr-1"
                            >420</span
                          >Following
                        </div>
                        <div
                          class="font-system text-gray-500 hover:border-b border-white font-thin cursor-pointer ml-4 h-5 leading-none"
                        >
                          <span class="font-semibold text-gray-200 mr-1"
                            >420</span
                          >Followers
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </UPopover>
              <UPopover
                mode="hover"
                :ui="{
                  background: 'bg-gray-900',
                  ring: 'ring-gray-600',
                  rounded: 'rounded-xl',
                }"
              >
                <h2 class="text-gray-500 ps-2 font-system tracking-wider">
                  @DecentCoders
                </h2>
                <template #panel>
                  <div class="w-72 p-4 bg-black cursor-auto">
                    <div class="">
                      <div class="flex justify-between">
                        <div id="ppImage" class="">
                          <img
                            class="h-16 mb-2 w-16 rounded-full cursor-pointer"
                            src="/public/me.webp"
                            alt=""
                          />
                        </div>
                        <button
                          class="rounded-full px-4 h-8 bg-slate-200 hover:bg-slate-300 font-bold text-black text-sm tracking-[1px] z-10 absolute right-3 font-system"
                          :class="{
                            'text-gray-300 border h-9 border-gray-600 bg-zinc-950  hover:bg-zinc-900':
                              follow,
                          }"
                          ref="followButton"
                          @click="handleFollowing"
                        >
                          {{ followMssg }}
                        </button>
                      </div>
                      <div id="ppName" class="mb-2">
                        <h1
                          class="font-semibold font-system cursor-pointer hover:underline"
                        >
                          Hridoy Hawladar
                        </h1>
                        <h2
                          class="text-gray-500 hover:underline font-system tracking-wider cursor-pointer"
                        >
                          @DecentCoders
                        </h2>
                      </div>
                      <div
                        id="ppbio"
                        class="font-system font-normal cursor-text"
                      >
                        Web Developer, I love building things for the web and
                        sharing my knowledge with others. Let's connect!!!
                      </div>
                      <div id="followDetails" class="mt-2 flex justify-start">
                        <div
                          class="font-system text-gray-500 hover:border-b border-white font-thin cursor-pointer h-5 leading-none"
                        >
                          <span class="font-semibold text-gray-200 mr-1"
                            >420</span
                          >Following
                        </div>
                        <div
                          class="font-system text-gray-500 hover:border-b border-white font-thin cursor-pointer ml-4 h-5 leading-none"
                        >
                          <span class="font-semibold text-gray-200 mr-1"
                            >420</span
                          >Followers
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </UPopover>
              <i class="fa-solid fa-circle ms-1 text-[3px] text-gray-500"></i>
              <div
                class="text-gray-500 ms-1 font-system tracking-wider"
                ref="postTime"
              >
                19h
              </div>
            </div>
          </div>
          <div
            class="rounded-full text-gray-500 cursor-pointer hover:text-sky-400 hover:bg-gray-800 flex items-center justify-center mt-2 h-6 w-6"
          >
            <UPopover
              :ui="{
                background: 'bg-gray-900',
                ring: 'ring-gray-600',
                rounded: 'rounded-xl',
              }"
            >
              <i class="fa-solid fa-ellipsis"></i>

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

        <!-- post text -->
        <div class="" ref="postText">
          <h1 class="pl-2 text-base font-normal font-system">{{ postText }}</h1>
        </div>
        <!-- post file -->
        <div class="pr-4 mt-2" ref="fileURL">
          <img class="rounded-3xl" :src="fileUrl" alt="" />
        </div>
        <!-- Post react -->
        <div class="pt-3 flex text-gray-500 justify-between text-lg pr-6">
          <div class="flex items-center">
            <!-- UTooltip Reply -->
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
            <!-- UTooltip Repost -->
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
            <!-- UTooltip Like -->
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
              <!-- UTooltip Bookmark -->
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
              <!-- UTooltip Share -->
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

<script setup>
  const follow = ref(false);
  const followMssg = ref("Follow");

  const handleFollowing = () => {
    if (!follow.value) {
      follow.value = true;
      followMssg.value = "Following";
      window.open("https://x.com/DecentCoders", "_blank");
    } else {
      follow.value = false;
      followMssg.value = "Follow";
    }
  };

  // Define props
  const props = defineProps({
    postText: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
  });
</script>
