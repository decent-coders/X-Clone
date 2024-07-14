<template>
  <div
    id="post_preference"
    class="w-full relative m600:border-r border-gray-600 text-white"
  >
    <section ref="post option">
      <div
        class="max-m600:fixed z-10 max-m600:top-0 max-m600:w-full border-y border-gray-600 text-white"
      >
        <div class="flex font-semibold tracking-wide bg-opacity-80 bg-black">
          <div
            class="border-r p-3 border-gray-600 w-1/2 text-center cursor-pointer"
            @click="showAllPosts"
          >
            <span
              class="p-3 w-full font-system"
              :class="{ 'border-b-4 border-sky-500': activeShowAllPosts }"
            >
              For You
            </span>
          </div>
          <div
            class="p-3 w-1/2 text-center cursor-pointer"
            @click="showFollowedPosts"
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
    </section>

    <HomeCreatePostContainer
      class="hidden m600:flex"
      v-if="activeShowAllPosts"
      @handlePost="handlePost"
    />
    <div id="post-container">
      <div>
        <transition-group name="fade">
          <HomePosts
            v-if="!activeShowFollowedPosts"
            v-for="(post, index) in reversedPosts"
            :key="post.id"
            :postText="post.postText"
            :fileUrl="post.fileURL"
            :time="formatPostTime(post.createdAt)"
            @deletePost="handlePostDelete(index)"
          />
        </transition-group>
      </div>
      <div
        v-if="activeShowAllPosts && reversedPosts.length === 0"
        ref="noPostsDiv"
        class="h-[80vh] m600:h-[65vh] m900:h-[80vh] w-full flex flex-col items-center justify-center"
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
        <p class="text-2xl m600:text-3xl animate-pulse">Nothing Posted yet!!</p>
      </div>
      <div id="followposts" v-if="activeShowFollowedPosts">
        <div
          class="h-[80vh] w-full flex flex-col items-center justify-center max-m600:fixed top-0"
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
          <p class="text-xl m600:text-3xl animate-pulse">
            No Following Post Available!!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const postStore = usePostStore();

  const currentTime = ref(new Date());

  const showAllPosts = () => {
    postStore.showAllPosts();
  };

  const showFollowedPosts = () => {
    postStore.showFollowedPosts();
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
  const formatPostTime = (date) => {
    const now = currentTime.value;
    const seconds = Math.floor((now - new Date(date)) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) {
      return `Just Now`;
    } else if (minutes < 60) {
      return `${minutes}min`;
    } else {
      return `${hours}h`;
    }
  };

  onMounted(() => {
    const intervalId = setInterval(() => {
      currentTime.value = new Date();
    }, 60000);

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });
  });
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
