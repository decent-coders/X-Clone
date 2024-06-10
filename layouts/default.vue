<template>
  <div
    class="flex h-screen overflow-auto select-none"
    style="font-family: none"
  >
    <!-- Sidebar -->
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
            <!-- logo -->
            <NuxtLink to="/Home" class="flex px-2 pt-2">
              <img src="/public/x-home.jpg" class="h-10 w-11" alt="X Logo" />
            </NuxtLink>

            <ul
              class="mt-1 font-semibold text-xl font-system flex-grow overflow-y-auto"
            >
              <!-- home -->
              <li>
                <NuxtLink
                  href="/Home"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="w-7 flex justify-center">
                    <i class="fa-solid fa-house"></i>
                  </div>
                  <span class="ms-3">Home</span>
                </NuxtLink>
              </li>
              <!-- explore -->
              <li>
                <NuxtLink
                  href="/Explore"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="w-7 flex justify-center">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <span class="ms-3">Explore</span>
                </NuxtLink>
              </li>
              <!-- notifications -->
              <li>
                <NuxtLink
                  href="/Notifications"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <div id="icon" class="w-7 flex justify-center">
                    <i class="fa-regular fa-bell"></i>
                  </div>
                  <span class="ms-3">Notifications</span>
                </NuxtLink>
              </li>
              <!-- Messages -->
              <li>
                <NuxtLink
                  href="/Messages"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-regular fa-envelope w-7"></i>
                  <span class="ms-3">Messages</span>
                </NuxtLink>
              </li>
              <!-- Communities -->
              <li>
                <NuxtLink
                  href="/Communities"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-users text-lg w-7"></i>
                  <span class="ms-3">Communities</span>
                </NuxtLink>
              </li>
              <!-- Profile -->
              <li>
                <NuxtLink
                  href="/Profile"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-user-large w-7 ps-1 text-lg"></i>
                  <span class="ms-3">Profile</span>
                </NuxtLink>
              </li>
              <!-- Premium -->
              <li>
                <NuxtLink
                  href="/Membership"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-brands fa-web-awesome w-7 text-base"></i>
                  <span class="ms-3">Premium</span>
                </NuxtLink>
              </li>
              <!-- Monetization -->
              <li>
                <NuxtLink
                  href="/Monetization"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-money-check-dollar w-7"></i>
                  <span class="ms-3">Monetization</span>
                </NuxtLink>
              </li>
              <!-- Settings -->
              <li>
                <NuxtLink
                  href="/Settings"
                  class="flex items-center ms-0 py-2 px-4 m-1 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group font-normal"
                  exact-active-class="active"
                >
                  <i class="fa-solid fa-gear w-7"></i>
                  <span class="ms-3">Settings</span>
                </NuxtLink>
              </li>
              <!-- post button -->
              <li class="pr-2">
                <button
                  class="w-full flex justify-center items-center bg-sky-600 hover:bg-sky-700 rounded-full py-2 font-normal mt-2"
                >
                  Post
                </button>
              </li>
            </ul>
            <!--Profile preview-->
            <div class="mt-2 m1100:mt-auto mb-2">
              <div
                class="p-2 flex flex-row justify-start cursor-pointer rounded-full hover:bg-zinc-900 items-center"
              >
                <div id="ppImage" class="">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="/public/me.webp"
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
          </div>
        </aside>
      </div>
    </div>

    <!-- Main Content -->
    <div id="main-content" class="flex-1 bg-black overflow-y-auto">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style>
  ::-webkit-scrollbar {
    width: 3px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background: #a4a2a2; /* Color of the scrollbar thumb */
    border-radius: 2rem; /*Rounds the corners of the scrollbar thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Color of the scrollbar thumb when hovered */
  }
  .active {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity));
  }
</style>
