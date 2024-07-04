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
              <div>
                <div class="flex justify-between">
                  <div id="ppImage">
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
        <div
          class="flex justify-between m400:items-center"
          ref="profileDetails"
        >
          <div>
            <div
              id="ppName"
              class="ms-2 flex leading-3 max-m400:mb-1 flex-wrap items-center cursor-pointer"
            >
              <UPopover
                mode="hover"
                :ui="{
                  background: 'bg-gray-900',
                  ring: 'ring-gray-600',
                  rounded: 'rounded-xl',
                }"
              >
                <h1
                  class="text-sm m500:text-base font-semibold font-system pe-2"
                >
                  Hridoy Hawladar
                </h1>
                <template #panel>
                  <div class="w-72 p-4 leading-6 bg-black cursor-auto">
                    <div>
                      <div class="flex justify-between">
                        <div id="ppImage">
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
              <div class="flex items-center">
                <UPopover
                  mode="hover"
                  :ui="{
                    background: 'bg-gray-900',
                    ring: 'ring-gray-600',
                    rounded: 'rounded-xl',
                  }"
                >
                  <h2
                    class="text-sm m500:text-base text-gray-500 font-system tracking-wider"
                  >
                    @DecentCoders
                  </h2>
                  <template #panel>
                    <div class="w-72 p-4 leading-6 bg-black cursor-auto">
                      <div>
                        <div class="flex justify-between">
                          <div id="ppImage">
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
                  class="text-gray-500 ms-1 text-sm font-system tracking-wider"
                  ref="postTime"
                >
                  {{ time }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="rounded-full text-gray-500 cursor-pointer hover:text-sky-400 hover:bg-gray-800 flex items-center justify-center h-6 w-6"
          >
            <div class="flex flex-col justify-center">
              <i class="fa-solid fa-ellipsis relative" @click="details"></i>
              <transition>
                <div
                  v-if="showdetails"
                  class="rounded-xl absolute mt-14 -ml-[70px] m900:-ml-12 px-1 border border-gray-600 bg-black py-1 font-system text-center flex cursor-pointer hover:bg-zinc-900 z-20"
                  @click="handlePostDelete"
                >
                  <h1 class="text-gray-300 pl-3 pr-2">Delete</h1>
                  <i
                    class="fa-regular fa-trash-can text-red-500 pr-2 mt-[2px]"
                  ></i>
                </div>
              </transition>
              <div
                class="h-screen w-screen fixed top-0 left-0 z-10"
                v-if="showdetails"
                @click="showDetailsSkip"
              ></div>
            </div>
          </div>
        </div>

        <div class="" ref="postText">
          <transition>
            <h1
              class="pl-2 max-m400:text-sm text-wrap text-base font-normal font-system whitespace-pre-line"
            >
              {{ postText }}
            </h1>
          </transition>
        </div>
        <div class="pr-4 mt-2" ref="fileURL">
          <img class="rounded-3xl" :src="fileUrl" alt="" />
        </div>
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
          <div class="flex cursor-pointer items-center">
            <UTooltip
              :ui="{
                base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                background: 'bg-gray-900',
                ring: 'ring-gray-800',
              }"
              :openDelay="1000"
            >
              <div class="flex cursor-pointer items-center">
                <i
                  class="fa-regular fa-heart hover:text-red-500"
                  v-if="!postLiked"
                  @click="handlePostLike"
                ></i>
                <i
                  class="fa-solid fa-heart text-red-600"
                  v-if="postLiked"
                  @click="handlePostLike"
                ></i>
                <p
                  class="ps-2 text-sm font-system"
                  :class="{ 'text-red-500': postLiked }"
                >
                  {{ Likes }}
                </p>
              </div>
              <template #text>
                <span v-if="!postLiked">Like</span>
                <span v-else>Liked</span>
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
                    v-if="!bookmarked"
                    @click="handeBookMark"
                  ></i>
                  <i
                    class="fa-solid fa-bookmark mr-7 cursor-pointer"
                    :class="{ 'text-blue-400': bookmarked }"
                    v-if="bookmarked"
                    @click="handeBookMark"
                  ></i>
                </div>
                <template #text>
                  <span v-if="bookmarked">Bookmarked</span>
                  <span v-else>Bookmark</span>
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
                  <UPopover
                    :ui="{
                      background: 'bg-gray-900',
                      ring: 'ring-gray-600',
                      rounded: 'rounded-xl',
                    }"
                  >
                    <i
                      class="fa-solid fa-arrow-up-from-bracket cursor-pointer hover:text-blue-400"
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
  const postStore = usePostStore();
  const emit = defineEmits(["deletePost"]);
  const showdetails = ref(false);
  const postLiked = ref(false);
  const bookmarked = ref(false);
  const Likes = ref(11);

  const showDetailsSkip = () => {
    showdetails.value = false;
  };
  const handeBookMark = () => {
    bookmarked.value = !bookmarked.value;
  };
  const handlePostLike = () => {
    postLiked.value = !postLiked.value;
    if (postLiked.value) {
      Likes.value += 1;
    } else {
      Likes.value -= 1;
    }
  };
  const handleFollowing = () => {
    postStore.toggleFollow();
    if (postStore.follow) {
      window.open("https://x.com/DecentCoders", "_blank");
    }
  };
  const details = () => {
    showdetails.value = !showdetails.value;
  };
  const handlePostDelete = () => {
    showdetails.value = false;
    emit("deletePost");
  };
  const follow = computed(() => postStore.follow);
  const followMssg = computed(() => postStore.followMssg);

  const props = defineProps({
    postText: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  });
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
