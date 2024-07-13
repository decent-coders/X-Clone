<template>
  <NuxtLayout>
    <div class="flex justify-center items-center h-screen w-full bg-black">
      <div
        v-if="changeName"
        ref="ProfileDetails"
        class="bg-zinc-900 mx-5 rounded-2xl relative"
      >
        <img
          v-if="loading"
          class="h-24 w-24 mx-auto my-auto animate-pulse"
          src="/x-home.jpg"
          alt=""
        />
        <div
          v-else
          class="flex min-h-full flex-col justify-center px-6 pt-7 pb-12 lg:px-8"
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="space-y-6">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-300"
                  >Name</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    required
                    v-model="postStore.name"
                    class="block w-full border-1 border-white rounded-md border-0 py-1.5 text-gray-200 px-2 shadow-sm ring-1 ring-inset focus-visible:outline-none ring-gray-300 sm:text-sm sm:leading-6 bg-black"
                  />
                  <span
                    v-if="validationMessages.name"
                    class="text-red-500 text-sm"
                    >{{ validationMessages.name }}</span
                  >
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-gray-300"
                    >Username</label
                  >
                </div>
                <div class="mt-2">
                  <div class="relative mt-2 rounded-md shadow-sm">
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <span class="text-gray-300 sm:text-sm pb-1">@</span>
                    </div>
                    <input
                      type="text"
                      class="block w-full rounded-md border-1 border-white py-1.5 text-gray-200 px-2 shadow-sm ring-1 ring-inset focus-visible:outline-none ring-gray-300 sm:text-sm sm:leading-6 pl-7 bg-black"
                      v-model="sanitizedUsername"
                    />
                  </div>
                  <span
                    v-if="validationMessages.username"
                    class="text-red-500 text-sm"
                    >{{ validationMessages.username }}</span
                  >
                </div>
              </div>

              <div>
                <button
                  class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  @click="handleLogIng"
                >
                  Update
                </button>
                <button
                  class="flex w-full mt-3 justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  @click="handleChangeName"
                >
                  Cancel
                </button>
                <span
                  v-if="validationMessages.general"
                  class="text-red-500 text-sm"
                  >{{ validationMessages.general }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div ref="ProfileDetails" class="bg-zinc-900 mx-5 rounded-2xl z-50">
          <transition>
            <div
              class="flex min-h-full flex-col justify-center px-6 pt-7 pb-4 lg:px-8"
            >
              <div class="w-full flex justify-center">
                <div class="relative">
                  <img
                    class="h-20 cursor-pointer w-20 mb-3 rounded-full"
                    :src="ppPath"
                    alt="Profile Photo"
                    @click="handlePp"
                  />
                  <transition>
                    <div
                      class="tooltiptext bg-gray-800 font-system text-gray-300 cursor-default"
                      v-if="ppTips"
                    >
                      Change photo
                    </div>
                  </transition>
                </div>

                <input
                  type="file"
                  id="file"
                  ref="file"
                  style="display: none"
                  accept="image/*"
                  @change="handleFileChange"
                />
              </div>

              <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <div class="space-y-6">
                  <div>
                    <div class="mt-2">
                      <div
                        class="block w-full py-1.5 text-gray-200 px-2 shadow-sm sm:leading-6 bg-black"
                      >
                        {{ postStore.name }}
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div
                      class="block w-full py-1.5 m-0 text-gray-200 px-2 shadow-sm sm:leading-6 bg-black"
                    >
                      @{{ postStore.username }}
                    </div>
                  </div>

                  <div>
                    <button
                      class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                      @click="handleChangeName"
                    >
                      Change Name
                    </button>
                    <input type="text" class="m-0 w-full invisible" />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const postStore = usePostStore();
  const ppTips = ref(false);
  const changeName = ref(false);
  const loading = ref(false);

  const handleChangeName = () => {
    loading.value = false;
    changeName.value = !changeName.value;
  };

  onMounted(() => {
    setTimeout(() => {
      ppTips.value = true;
      setTimeout(() => {
        ppTips.value = false;
      }, 5000);
    }, 1000);
  });
  const validationMessages = ref({
    name: "",
    username: "",
    general: "",
  });

  // Computed property to remove spaces from username
  const sanitizedUsername = computed({
    get() {
      return postStore.username.replace(/\s+/g, "");
    },
    set(value) {
      postStore.username = value.replace(/\s+/g, "");
    },
  });

  const handleLogIng = () => {
    // Reset validation messages
    validationMessages.value.name = "";
    validationMessages.value.username = "";
    validationMessages.value.general = "";

    // Sanitize the username
    postStore.username = postStore.username.replace(/\s+/g, "");

    // Validate inputs
    if (!postStore.name) {
      validationMessages.value.name = "Name is required.";
    }
    if (!postStore.username) {
      validationMessages.value.username = "Username is required.";
    }
    if (!postStore.ppPath) {
      validationMessages.value.general = "Profile picture is required.";
    }

    if (
      !validationMessages.value.name &&
      !validationMessages.value.username &&
      !validationMessages.value.general
    ) {
      setTimeout(() => {
        changeName.value = false;
      }, 2000);
      loading.value = true;
    }
  };

  const handlePp = () => {
    ppTips.value = false;

    const fileInput = document.getElementById("file");
    fileInput.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          const size = Math.min(image.width, image.height);
          const offsetX = (image.width - size) / 2;
          const offsetY = (image.height - size) / 2;

          canvas.width = size;
          canvas.height = size;
          context.drawImage(
            image,
            offsetX,
            offsetY,
            size,
            size,
            0,
            0,
            size,
            size
          );

          postStore.setppPath(canvas.toDataURL("image/jpeg"));
          validationMessages.value.general = ""; // Clear general validation message on successful file change

          // Show name tips after 1 second
          showNameTips();
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  const showNameTips = () => {
    setTimeout(() => {
      nameTips.value = true;
      setTimeout(() => {
        nameTips.value = false;
      }, 5000);
    }, 1000);
  };

  const ppPath = computed(() => postStore.ppPath);

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

<style>
  ::selection {
    background-color: #636060;
  }
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
</style>
