<template>
  <NuxtLayout>
    <div class="flex min-h-screen justify-center relative bg-black">
      <!-- post container -->
      <HomePostContainer />

      <!-- right sidebar -->
      <div id="ads" class="w-[56%] min-w-[300px] text-white p-7 pt-2 relative">
        <div ref="sidebar" class="sticky bottom-5 top-5">
          <!-- search input -->
          <div id="searchInput">
            <div>
              <input
                class="w-full bg-zinc-800 rounded-full p-2 font-system mb-4 focus-within:ring-1 focus-within:ring-sky-500"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>

          <!-- subscribe section -->
          <HomeSidebarContainer>
            <h1 class="font-system font-extrabold mb-1 text-lg tracking-wide">
              Subscribe To Premium
            </h1>
            <h2 class="font-system font-normal tracking-wide text-sm">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </h2>
            <button
              class="px-4 tracking-wide flex justify-center items-center bg-sky-600 hover:bg-sky-700 rounded-full py-2 font-bold mt-2 text-sm"
            >
              Subscribe
            </button>
          </HomeSidebarContainer>

          <!-- trending section -->
          <HomeSidebarContainer>
            <h1 class="font-system font-extrabold tracking-wider mb-4">
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
            <nuxt-link to="#">
              <h2 class="text-sky-500 font-system hover:text-sky-400">
                Show more
              </h2>
            </nuxt-link>
          </HomeSidebarContainer>
          <h1
            class="font-system p-4 text-gray-500 text-sm tracking-wider"
            style="word-spacing: 5px"
          >
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
            More © 2024 X Corp.
          </h1>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const trends = ref([
    { name: "#100daysOfCoding", numberOfPosts: "3,964 posts" },
    { name: "#VueJS", numberOfPosts: "2,134 posts" },
    { name: "#NuxtJS", numberOfPosts: "1,789 posts" },
    { name: "#JavaScript", numberOfPosts: "5,241 posts" },
    { name: "#WebDevelopment", numberOfPosts: "4,567 posts" },
  ]);
  const followSuggeston = ref([
    {
      name: " Hridoy Hawladar",
      username: "@DecentCoders",
      pp: "/me.jpeg",
    },
    {
      name: " Hridoy Hawladar",
      username: "@DecentCoders",
      pp: "/me.jpeg",
    },
    {
      name: " Hridoy Hawladar",
      username: "@DecentCoders",
      pp: "/me.jpeg",
    },
  ]);

  const sidebar = ref(null);
  const followSection = ref(null);
</script>

<style scoped>
  .scrollable-sidebar {
    position: relative;
    top: 0;
    overflow-y: auto;
  }

  :focus-visible {
    outline: transparent;
  }
</style>
