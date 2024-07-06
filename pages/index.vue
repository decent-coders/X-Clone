<template>
  <div class="flex justify-center items-center h-screen w-full bg-black">
    <img
      v-if="loading"
      class="h-24 w-24 animate-pulse"
      src="/x-home.webp"
      alt=""
    />

    <div v-else ref="ProfileDetails" class="bg-zinc-900 mx-5 rounded-2xl">
      <div
        class="flex min-h-full flex-col justify-center px-6 pt-7 pb-12 lg:px-8"
      >
        <div class="w-full flex justify-center">
          <img
            class="h-20 cursor-pointer w-20 mb-3 rounded-full"
            :src="ppPath"
            alt="Profile Photo"
            @click="handlePp"
          />
          <input
            type="file"
            id="file"
            ref="file"
            style="display: none"
            @change="handleFileChange"
          />
        </div>
        <h1 class="w-full text-center text-gray-300">Profile Photo</h1>
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
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  required
                  v-model="postStore.name"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-200 px-2 shadow-sm ring-1 ring-inset focus-visible:outline-none ring-gray-300 sm:text-sm sm:leading-6"
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
                    name="username"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-200 px-2 shadow-sm ring-1 ring-inset focus-visible:outline-none ring-gray-300 sm:text-sm sm:leading-6 pl-7"
                    v-model="postStore.username"
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
                Log in
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
  </div>
</template>

<script setup>
  const postStore = usePostStore();

  const loading = ref(false);
  const validationMessages = ref({
    name: "",
    username: "",
    general: "",
  });

  const handleLogIng = () => {
    // Reset validation messages
    validationMessages.value.name = "";
    validationMessages.value.username = "";
    validationMessages.value.general = "";

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
      loading.value = true;
      navigateTo("/Home");
    }
  };

  const handlePp = () => {
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
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
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
    background-color: #252424;
  }
</style>
