<template>
  <div id="post_preference" class="w-full border-r border-gray-600 text-white">
    <div class="border-y border-gray-600 text-white">
      <div class="flex font-semibold tracking-wide">
        <div
          class="border-r p-3 border-gray-600 w-1/2 text-center cursor-pointer"
          @click="ShowAllPosts"
        >
          <span
            class="p-3 w-full font-system"
            :class="{ 'border-b-4 border-sky-500': activeShowAllPosts }"
          >
            For You
          </span>
        </div>
        <div
          class="border-r p-3 border-gray-600 w-1/2 text-center cursor-pointer"
          @click="ShowFollowedPosts"
        >
          <span
            class="p-3 w-full font-system"
            :class="{ 'border-b-4 border-sky-500': activeShowFollowedPosts }"
          >
            Following
          </span>
        </div>
      </div>
    </div>
    <HomeCreatePostContainer
      v-if="activeShowAllPosts"
      @handlePost="handlePost"
    />
    <div id="post-container">
      <div>
        <transition-group>
          <HomePosts
            v-for="(post, index) in reversedPosts"
            :key="post.id"
            v-if="activeShowAllPosts"
            :postText="post.postText"
            :fileUrl="post.fileURL"
            :time="postTime"
            @deletePost="handlePostDelete(index)"
            class="relative"
          />
        </transition-group>
      </div>

      <div
        v-if="activeShowAllPosts && reversedPosts.length === 0"
        ref="noPostsDiv"
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

      <div id="followposts" v-if="activeShowFollowedPosts">
        <div
          class="h-[80vh] w-full flex flex-col items-center absolute top-0 justify-center"
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
</template>

<script setup>
  const postStore = usePostStore();
  const postTime = "19h";
  const ShowAllPosts = () => {
    postStore.ShowAllPosts();
  };

  const ShowFollowedPosts = () => {
    postStore.ShowFollowedPosts();
  };

  const handlePost = (data) => {
    postStore.addPost(data);
  };

  const handlePostDelete = (index) => {
    postStore.posts.splice(index, 1);
  };

  const activeShowAllPosts = computed(() => postStore.activeShowAllPosts);
  const activeShowFollowedPosts = computed(
    () => postStore.activeShowFollowedPosts
  );
  const reversedPosts = computed(() => postStore.reversedPosts);
</script>

<style>
  .v-move,
  .v-enter-active,
  .v-leave-active {
    transition: Opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
