<template>
  <transition>
    <div
      @click="handleSkipModal"
      v-if="showPostModal"
      class="h-full w-screen fixed right-0 top-0 z-10 flex justify-center items-start pt-14 modal-bg overflow-auto"
    >
      <postModal
        @click.stop="skipSkipping"
        @handlePost="handlePost"
        class="relative"
      >
        <i
          class="fa-solid fa-x text-white absolute right-6 cursor-pointer"
          @click="handleSkipModal"
        ></i>
      </postModal>
    </div>
  </transition>

  <div
    class="flex h-screen overflow-auto select-none"
    style="font-family: none"
  >
    <div
      id="sidebar"
      class="m1100:w-[25%] m1100:min-w-[250px] m1200:w-[22%] h-screen bg-black text-white flex flex-col overflow-y-auto"
    >
      <div class="border-r border-gray-600 flex flex-col h-full">
        <aside
          id="logo-sidebar"
          class="lg:ps-5 h-full w-full lg:overflow-hidden lg:hover:overflow-auto flex flex-col"
        >
          <div class="px-2 bg-black flex flex-col flex-grow">
            <NuxtLink to="/Home" class="flex px-2 pt-2">
              <img src="@/public/x-home.jpg" class="h-10 w-11" alt="X Logo" />
            </NuxtLink>

            <ul
              class="mt-1 font-semibold text-xl font-system flex-grow overflow-y-auto"
            >
              <li>
                <NuxtLink
                  href="/Home"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="w-7 flex justify-center">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <span class="ms-3">Home</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Explore"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="w-7 flex justify-center">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <span class="ms-3">Explore</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Notifications"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="w-7 flex justify-center">
                    <i class="fa-regular fa-bell"></i>
                  </div>
                  <span class="ms-3">Notifications</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Messages"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-regular fa-envelope w-7"></i>
                  <span class="ms-3">Messages</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Communities"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-users text-lg w-7"></i>
                  <span class="ms-3">Communities</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Profile"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-user-large w-7 ps-1 text-lg"></i>
                  <span class="ms-3">Profile</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Membership"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-brands fa-web-awesome w-7 text-base"></i>
                  <span class="ms-3">Premium</span>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  href="/Settings"
                  class="flex text-white items-center ms-0 py-2 px-4 m-1 rounded-full hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-gear w-7"></i>
                  <span class="ms-3">Settings</span>
                </NuxtLink>
              </li>
              <li class="pr-2">
                <button
                  class="w-full flex justify-center items-center bg-sky-600 hover:bg-sky-700 rounded-full py-2 font-normal mt-2"
                  @click="handleAddPost"
                >
                  Post
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
                  class="p-2 flex flex-row justify-start cursor-pointer rounded-full hover:bg-zinc-900 items-center"
                >
                  <div id="ppImage">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="@/public/me.webp"
                      alt=""
                    />
                  </div>
                  <div id="ppName" class="ms-2">
                    <h1 class="text-base font-semibold font-system">
                      Hridoy Hawladar
                    </h1>
                    <h2 class="text-gray-500 font-system tracking-wider">
                      @DecentCoders
                    </h2>
                  </div>
                  <i
                    class="fa-solid fa-ellipsis ml-auto mr-2 text-gray-400 hover:text-sky-400"
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
                      <h1>Log Out @DecentCoders</h1>
                    </li>
                  </ol>
                </div>
              </template>
            </UPopover>
          </div>
        </aside>
      </div>
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
