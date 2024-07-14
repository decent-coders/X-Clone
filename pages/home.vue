<template>
  <NuxtLayout>
    <div class="flex min-h-screen justify-center relative bg-black">
      <!-- post container -->
      <HomePostContainer class="my-12 m600:my-0" />

      <!-- right sidebar -->
      <div
        id="ads"
        class="hidden m900:block w-[56%] min-w-[300px] text-white p-7 pt-2 relative"
      >
        <div ref="sidebar" class="sticky bottom-5 top-5">
          <!-- search input -->
          <div id="searchInput">
            <div>
              <input
                class="w-full bg-zinc-800 rounded-full p-2 font-system mb-4 focus-within:ring-1 focus-within:ring-sky-500 pl-4"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>

          <!-- subscribe section -->
          <HomeSidebarContainer>
            <h1 class="font-system font-bold mb-1 text-lg tracking-wide">
              {{ premiumHeading }}
            </h1>
            <h2 class="font-system font-normal tracking-wide text-sm">
              {{ premiumDetails }}
            </h2>
            <button
              class="px-4 tracking-wider flex justify-center items-center bg-sky-600 text-gray-200 hover:bg-sky-700 rounded-full py-2 font-bold mt-2 text-base"
              :class="{
                'text-gray-300 border  border-gray-600 bg-zinc-950  hover:bg-zinc-900':
                  Subscribe,
              }"
              ref="followButton"
              @click="handleSubscribe"
            >
              {{ SubscribeMssg }}
            </button>
          </HomeSidebarContainer>

          <!-- trending section -->
          <HomeSidebarContainer>
            <h1 class="font-bold text-lg tracking-wider mb-4">
              Trends for you
            </h1>
            <!-- trending contents -->
            <HomeTrandningSection
              v-for="trend in trends"
              :key="trend.name"
              :name="trend.name"
              :numberOfPosts="trend.numberOfPosts"
            />
          </HomeSidebarContainer>

          <!-- follow section -->
          <HomeSidebarContainer ref="followSection">
            <h1 class="font-bold text-lg tracking-wider">Who to Follow</h1>

            <HomeFollowingSuggestion
              v-for="follow in followSuggeston"
              :key="follow.name"
              :name="follow.name"
              :username="follow.username"
              :pp="follow.pp"
            >
            </HomeFollowingSuggestion>

            <UPopover
              :ui="{
                background: 'bg-gray-900',
                ring: 'ring-gray-600',
                rounded: 'rounded-xl',
              }"
            >
              <h2 class="text-sky-500 font-system hover:text-sky-400">
                Show more
              </h2>

              <template #panel>
                <div
                  class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
                >
                  <h1>Haven't added this feature Sorry!!</h1>
                </div>
              </template>
            </UPopover>
          </HomeSidebarContainer>
          <h1
            class="animate-pulse font-system p-4 text-gray-200 text-sm tracking-wider"
          >
            This X-clone was made by DecentCoders. For more information
            <a
              href="https://github.com/decent-coders"
              class="underline"
              target="_blank"
              >Click here</a
            >
          </h1>
        </div>
      </div>
    </div>
    <div class="relative m600:hidden">
      <button
        v-if="postStore.activeShowAllPosts"
        ref="post button on mobile phone"
        class="flex justify-center items-center bg-sky-600 hover:bg-sky-700 rounded-full py-2 px-3 font-normal fixed bottom-[65px] right-5 z-20"
        @click="handleAddPost2"
      >
        <i class="fa-regular fa-pen-to-square text-xl"></i>
      </button>
      <transition>
        <div
          v-if="postStore.activeShowAllPosts & ppTips2"
          class="tooltiptexta fixed bg-gray-800 font-system text-gray-300 cursor-default text-base right-3 bottom-[115px]"
        >
          Create a post
        </div>
      </transition>
    </div>
    <transition>
      <div
        @click="handleSkipModal2"
        v-if="showPostModal"
        class="h-screen m600:hidden w-screen fixed right-0 top-0 z-50 flex justify-center items-start pt-14 modal-bg overflow-auto"
      >
        <postModal
          @click.stop="skipSkipping2"
          @handlePost="handlePost2"
          class="relative"
        >
          <i
            class="fa-solid fa-x text-white absolute right-3 m600:right-6 cursor-pointer"
            @click="handleSkipModal2"
          ></i>
        </postModal>
      </div>
    </transition>
  </NuxtLayout>
</template>

<script setup>
  const postStore = usePostStore();
  const ppTips2 = ref(false);
  const showPostModal = ref(false);
  const skipSkipping2 = () => {};
  const handlePost2 = (data) => {
    postStore.addPost(data);
    showPostModal.value = false;
  };
  const handleSkipModal2 = () => {
    showPostModal.value = false;
    postStore.setPostText("");
    postStore.setFileURL("");
  };
  const handleAddPost2 = () => {
    ppTips2.value = false;
    showPostModal.value = true;
  };
  onMounted(() => {
    if (postStore.isPostsEmpty) {
      setTimeout(() => {
        ppTips2.value = true;
      }, 2000);
    }
  });

  const trends = ref([
    { name: "#100daysOfCoding", numberOfPosts: "3,964 posts" },
    { name: "#VueJS", numberOfPosts: "2,134 posts" },
    { name: "#NuxtJS", numberOfPosts: "1,789 posts" },
    { name: "#JavaScript", numberOfPosts: "5,241 posts" },
    { name: "#WebDevelopment", numberOfPosts: "4,567 posts" },
  ]);

  const followSuggeston = ref([
    {
      name: postStore.name,
      username: postStore.username,
      pp: postStore.ppPath,
    },
    {
      name: postStore.name,
      username: postStore.username,
      pp: postStore.ppPath,
    },
    {
      name: " Hridoy Hawladar",
      username: "@DecentCoders",
      pp: "/me.webp",
    },
  ]);

  const sidebar = ref(null);
  const followSection = ref(null);

  const Subscribe = ref(false);
  const SubscribeMssg = ref("Subscribe");
  const premiumHeading = ref(" Subscribe To Premium");
  const premiumDetails = ref(
    "Subscribe to unlock new features and if eligible, receive a shareof ads revenue."
  );

  const handleSubscribe = () => {
    if (!Subscribe.value) {
      Subscribe.value = true;
      SubscribeMssg.value = "Subscribed";
      premiumHeading.value = "Add free user";
      premiumDetails.value =
        "Enjoy our premium service without ads, Thank you!";
    } else {
      Subscribe.value = false;
      SubscribeMssg.value = "Subscribe";
      premiumHeading.value = "Subscribe To Premium";
      premiumDetails.value =
        "Subscribe to unlock new features and if eligible, receive a shareof ads revenue.";
    }
  };
  useSeoMeta({
    description: "X-clone by DecentCoders",
    ogTitle: "X-clone",
    ogDescription: "A clone made by Decent Coders",
    ogImage: "/x-home.jpg",
    ogUrl: "https://x-clone-decentcoders.netlify.app/",
    twitterTitle: "X-clone",
    twitterDescription: "A clone made by Decent Coders",
    twitterImage: "/x-home.jpg",
    twitterCard: "This is a clone of X",
  });

  useHead({
    htmlAttrs: {
      lang: "en",
    },
    link: [
      {
        rel: "icon",
        type: "image/jpg",
        href: "/x-home.jpg",
      },
    ],
  });
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: 0.5s;
    scale: 1;
  }

  .v-enter-from,
  .v-leave-to {
    scale: 0.5;
    opacity: 0;
  }
  :focus-visible {
    outline: transparent;
  }
  .tooltiptexta {
    width: 122px;
    padding: 5px;
    text-align: center;
    border-radius: 5px;
    padding: 5px 5px;
    z-index: 1;
  }
  .tooltiptexta::after {
    content: "";
    margin-left: -5px;
    border-width: 5px;
    top: 100%;
    position: absolute;
    left: 78%;
    border-style: solid;
    border-color: rgb(63 60 60) transparent transparent transparent;
  }
</style>
