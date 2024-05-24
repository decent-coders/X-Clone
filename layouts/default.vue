<template>
  <div
    class="flex h-screen overflow-auto select-none"
    style="font-family: none"
  >
    <!-- Sidebar -->
    <div id="sidebar" class="w-[22%] h-screen bg-black text-white">
      <div class="border-r border-gray-600">
        <aside
          id="logo-sidebar"
          class="lg:ps-5 h-screen overflow-auto w-full lg:overflow-hidden lg:hover:overflow-auto"
        >
          <div class="min-h-screen px-2 bg-black">
            <!-- logo -->
            <NuxtLink to="/Home" class="flex px-2 pt-2">
              <img src="/public/x-home.jpg" class="h-10 w-11" alt="X Logo" />
            </NuxtLink>

            <ul class="mt-1 text-2xl">
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
            </ul>
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
