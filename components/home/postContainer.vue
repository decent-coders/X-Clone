<template>
  <div id="post_preference" class="w-full border-r border-gray-600 text-white">
    <!-- post option -->
    <div class="border-y border-gray-600 text-white">
      <div class="flex font-semibold tracking-wide">
        <!--all post button-->
        <div
          class="border-r p-3 border-gray-600 w-1/2 text-center cursor-pointer"
          @click="ShowAllPosts"
        >
          <span
            class="p-3 w-full font-system"
            :class="{ 'border-b-4 border-sky-500': activeShowAllPosts }"
            >For You</span
          >
        </div>
        <!-- following posts button-->
        <div
          class="border-r p-3 border-gray-600 w-1/2 text-center cursor-pointer"
          @click="ShowFollowedPosts"
        >
          <span
            class="p-3 w-full font-system"
            :class="{ 'border-b-4 border-sky-500': activeShowFollowedPosts }"
            >Following</span
          >
        </div>
      </div>
    </div>
    <!-- create post container -->
    <HomeCreatePostContainer
      v-if="activeShowAllPosts"
      @handlePost="handlePost"
    />
    <!-- Posts Container -->
    <div id="post-container">
      <!-- All posts container -->
      <div id="allPosts">
        <!-- all post -->
        <div v-for="(post, index) in reversedPosts" :key="index">
          <HomePosts
            v-if="activeShowAllPosts"
            :postText="post.postText"
            :fileUrl="post.fileURL"
          />
        </div>
        <div
          v-if="activeShowAllPosts && reversedPosts.length === 0"
          ref="no posts div"
          class="h-[80vh] w-full flex flex-col items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-20 animate-pulse"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            />
          </svg>
          <p class="text-3xl animate-pulse">Nothing Posted yet!!</p>
        </div>
        <!-- followposts -->
        <div id="followposts" v-if="activeShowFollowedPosts">
          <div
            class="h-[80vh] w-full flex flex-col items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-20 animate-pulse"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            <p class="text-3xl animate-pulse">No Following Post Available!!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const activeShowAllPosts = ref(true);
  const activeShowFollowedPosts = ref(false);
  const posts = ref([]);

  const ShowAllPosts = () => {
    activeShowFollowedPosts.value = false;
    activeShowAllPosts.value = true;
  };

  const ShowFollowedPosts = () => {
    activeShowAllPosts.value = false;
    activeShowFollowedPosts.value = true;
  };

  const handlePost = (data) => {
    posts.value.unshift(data); // Add new post to the beginning of the array
    console.log("Post data received:", data);
  };

  const reversedPosts = computed(() => {
    return [...posts.value]; // Simply return the posts as they are added at the beginning
  });
</script>
