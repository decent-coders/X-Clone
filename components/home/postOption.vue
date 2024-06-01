<template lang="">
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
      <!-- ================================= -->

      <!-- following posts button-->
      <div
        class="border-r p-3 border-gray-600 w-1/2 text-center cursor-pointer"
        @click="ShowFollowedPosts"
      >
        <span
          class="p-3 w-full font-system"
          :class="{
            'border-b-4 border-sky-500': activeShowFollowedPosts,
          }"
          >Following</span
        >
      </div>
      <!-- ================================= -->
    </div>
  </div>
</template>

<script setup lang="">
  const activeShowAllPosts = ref(true);
  const activeShowFollowedPosts = ref(false);

  const ShowAllPosts = () => {
    activeShowFollowedPosts.value = false;
    activeShowAllPosts.value = true;
  };

  const ShowFollowedPosts = () => {
    activeShowAllPosts.value = false;
    activeShowFollowedPosts.value = true;
  };
</script>
