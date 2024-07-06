<template>
  <transition>
    <div
      @click="handleSkipModal"
      v-if="showPostModal"
      class="h-screen w-screen fixed right-0 top-0 z-50 flex justify-center items-start pt-14 modal-bg overflow-auto"
    >
      <postModal
        @click.stop="skipSkipping"
        @handlePost="handlePost"
        class="relative"
      >
        <i
          class="fa-solid fa-x text-white absolute right-3 m600:right-6 cursor-pointer"
          @click="handleSkipModal"
        ></i>
      </postModal>
    </div>
  </transition>

  <div class="flex h-screen select-none">
    <div
      id="sidebar"
      class="m1100:w-[25%] m1100:min-w-[250px] m1200:w-[22%] h-screen bg-black text-white hidden m600:flex flex-col overflow-y-auto"
    >
      <div class="border-r border-gray-600 flex flex-col h-full">
        <aside
          id="logo-sidebar"
          class="lg:ps-5 h-full w-full lg:overflow-hidden lg:hover:overflow-auto flex flex-col"
        >
          <div class="px-2 bg-black flex flex-col flex-grow">
            <NuxtLink
              to="/Home"
              class="flex w-fit p-2 rounded-full hover:bg-gray-700"
            >
              <img
                src="/x-home.jpg"
                class="w-12 h-11 rounded-full"
                alt="X Logo"
              />
            </NuxtLink>

            <ul
              class="mt-1 font-semibold text-xl font-system flex-grow overflow-y-auto"
            >
              <li>
                <NuxtLink
                  href="/Home"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="m1100:w-7 flex justify-center">
                    <i class="fa-solid fa-house text-2xl"></i>
                  </div>
                  <span class="m1100:ms-3 hidden m1100:block">Home</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Explore"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="m1100:w-7 flex justify-center">
                    <i class="fa-solid fa-magnifying-glass text-2xl"></i>
                  </div>
                  <span class="ms-3 hidden m1100:block">Explore</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Notifications"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="m1100:w-7 flex justify-centerr">
                    <i class="fa-regular fa-bell text-2xl"></i>
                  </div>
                  <span class="ms-3 hidden m1100:block">Notifications</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Messages"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-regular fa-envelope m1100:w-7 text-2xl"></i>
                  <span class="ms-3 hidden m1100:block">Messages</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Communities"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-users m1100:w-7 text-2xl"></i>
                  <span class="ms-3 hidden m1100:block">Communities</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Profile"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <i
                    class="fa-solid fa-user-large m1100:w-7 m900:ps-1 text-xl m1100:text-lg"
                  ></i>
                  <span class="ms-3 hidden m1100:block">Profile</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Membership"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-brands fa-web-awesome m1100:w-7 text-xl"></i>
                  <span class="ms-3 hidden m1100:block">Premium</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Settings"
                  class="flex text-white items-center ms-0 py-2 m1100:px-4 m-1 rounded-full hover:bg-gray-700 justify-center m1100:justify-start group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-gear m1100:w-7 text-2xl"></i>
                  <span class="ms-3 hidden m1100:block">Settings</span>
                </NuxtLink>
              </li>
              <li class="pr-2">
                <button
                  class="m1100:w-full mx-auto flex justify-center items-center bg-sky-600 hover:bg-sky-700 rounded-full py-3 m1100:py-2 px-3 m1100:px-0 font-normal mt-2 mb-2"
                  @click="handleAddPost"
                >
                  <span class="hidden m1100:block">Post</span>

                  <i class="fa-regular fa-pen-to-square m1100:hidden"></i>
                </button>
              </li>
            </ul>

            <UPopover
              class="w-full"
              mode="click"
              :ui="{
                background: 'bg-gray-900',
                ring: 'ring-gray-500 dark:ring-gray-500 ring-1 shadow-[rgba(233,233,233,.4)_0px_0px_15px_3px]',
                rounded: 'rounded-xl',
              }"
              :popper="{ arrow: true }"
              @click.stop="handleClick"
            >
              <div class="mt-2 m1100:mt-auto mb-2 w-full">
                <div
                  class="p-2 flex flex-row justify-center m1100:justify-start cursor-pointer rounded-full hover:bg-zinc-900 items-center"
                >
                  <div id="ppImage">
                    <img
                      class="w-10 h-10 rounded-full"
                      :src="postStore.ppPath"
                      alt=""
                    />
                  </div>
                  <div id="ppName" class="ms-2 hidden m1100:block">
                    <h1 class="text-base font-semibold font-system">
                      {{ postStore.name }}
                    </h1>
                    <h2 class="text-gray-500 font-system tracking-wider">
                      @{{ postStore.username }}
                    </h2>
                  </div>
                  <i
                    class="fa-solid fa-ellipsis m1100:ml-auto m1100:mr-2 text-gray-400 hover:text-sky-400 hidden m1100:block"
                  ></i>
                </div>
              </div>
              <template #panel>
                <div
                  class="w-full py-3 bg-black cursor-pointer font-system ring-1 ring-gray-600"
                >
                  <ol class="text-sm font-semibold">
                    <li class="hover:bg-zinc-900 font-system p-2 px-4">
                      Add Existing Account
                    </li>
                    <li class="mt-1 hover:bg-zinc-900 p-2 px-4 font-system">
                      <h1>Log Out @{{ postStore.username }}</h1>
                    </li>
                  </ol>
                </div>
              </template>
            </UPopover>
          </div>
        </aside>
      </div>
    </div>

    <button
      ref="post button on mobile phone"
      class="m600:hidden flex justify-center items-center bg-sky-600 hover:bg-sky-700 rounded-full py-2 px-3 font-normal fixed bottom-[65px] right-5 z-20"
      @click="handleAddPost"
    >
      <i class="fa-regular fa-pen-to-square text-xl"></i>
    </button>

    <div
      id="sidebarForMobiles"
      class="menu w-screen border-t border-gray-600 z-30 text-white flex justify-center fixed bottom-0 items-center m600:hidden"
    >
      <NuxtLink
        href="/Home"
        class="flex text-white items-center w-[20%] py-2 px-4 rounded-md hover:bg-zinc-900 justify-center font-normal"
        exact-active-class="active2"
      >
        <div id="icon">
          <i class="fa-solid fa-house text-2xl"></i>
        </div>
      </NuxtLink>
      <NuxtLink
        href="/Explore"
        class="flex w-[20%] text-white items-center py-2 px-4 rounded-md hover:bg-zinc-900 justify-center font-normal"
        exact-active-class="active2"
      >
        <div id="icon">
          <i class="fa-solid fa-magnifying-glass text-2xl"></i>
        </div>
      </NuxtLink>
      <NuxtLink
        href="/Notifications"
        class="flex w-[20%] text-white items-center py-2 px-4 rounded-md hover:bg-zinc-900 justify-center font-normal"
        exact-active-class="active2"
      >
        <div id="icon">
          <i class="fa-regular fa-bell text-2xl"></i>
        </div>
      </NuxtLink>
      <NuxtLink
        href="/Messages"
        class="flex w-[20%] text-white items-center py-2 px-4 rounded-md hover:bg-zinc-900 justify-center font-normal"
        exact-active-class="active2"
      >
        <div id="icon">
          <i class="fa-regular fa-envelope text-2xl"></i>
        </div>
      </NuxtLink>
      <NuxtLink
        href="/Settings"
        class="flex w-[20%] text-white items-center py-2 px-4 rounded-md hover:bg-zinc-900 justify-center font-normal"
        exact-active-class="active2"
      >
        <div id="icon">
          <i class="fa-solid fa-gear m1100:w-7 text-2xl"></i>
        </div>
      </NuxtLink>
    </div>

    <div id="main-content" class="flex-1 bg-black overflow-y-scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  const postStore = usePostStore();
  const showPostModal = ref(false);

  const handleAddPost = () => {
    showPostModal.value = true;
  };

  const handleSkipModal = () => {
    showPostModal.value = false;
    postStore.setPostText("");
    postStore.setFileURL("");
  };
  const skipSkipping = () => {};
  const handlePost = (data) => {
    postStore.addPost(data);
    showPostModal.value = false;
  };

  const handleClick = () => {
    navigateTo("/");
  };
</script>

<style scoped>
  ::-webkit-scrollbar {
    width: 3px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background: #a4a2a2;
    border-radius: 2rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .active {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-gray-800) / var(--tw-bg-opacity));
  }
  .active2 {
    background-color: rgba(24, 24, 27, 0.5);
  }
  .menu {
    background-color: rgba(24, 24, 27, 0.5);
  }

  .modal-bg {
    background-color: rgba(31, 41, 55, 0.6);
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
