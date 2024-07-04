<template>
  <div
    class="bg-black w-full max-w-[350px] m600:max-w-[500px] m1100:-ml-14 m1200:-ml-[94px] m900:w-[47%] m700:max-w-[630px] rounded-lg border shadow-[rgba(233,233,233,.4)_0px_0px_15px_3px] border-gray-600 p-2 m700:p-4 mx-2 m600:mx-0"
  >
    <slot></slot>
    <div class="flex p-2 border-gray-600">
      <div id="ppImage" class="w-10 m600:w-12 m900:w-14 h-full">
        <img
          class="h-auto w-10 m600:w-12 m900:w-14 rounded-full"
          src="/public/me.webp"
          alt=""
        />
      </div>
      <div class="flex-1">
        <div class="border-b border-gray-600 ml-3 mr-5 mt-2 tracking-wider">
          <textarea
            rows="1"
            id="textarea"
            style="resize: none"
            placeholder="What is happening?!"
            @input="textAreaHeight"
            v-model="postText"
            class="bg-transparent w-full outline-none mb-1 font-system text-base m600:text-xl"
          ></textarea>
          <div v-if="fileURL" class="my-3">
            <img
              :src="fileURL"
              alt="Image Preview"
              class="rounded-3xl mx-auto max-h-[45vh]"
            />
          </div>
          <UPopover
            :ui="{
              background: 'bg-gray-900',
              ring: 'ring-gray-600',
              rounded: 'rounded-xl',
            }"
            :popper="{ placement: 'bottom-start' }"
          >
            <p
              class="text-sky-500 hover:text-sky-600 font-semibold font-system text-xs m600:text-sm pl-2 pb-3 cursor-pointer"
            >
              <i class="fa-solid fa-earth-americas pr-1"></i> Everyone can reply
            </p>
            <template #panel>
              <div
                class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
              >
                <h1>Haven't added this feature Sorry!!</h1>
              </div>
            </template>
          </UPopover>
        </div>
        <div class="m-3 mb-0 flex justify-between items-center cursor-pointer">
          <div class="text-sky-500 text-lg flex">
            <UTooltip
              :ui="{
                base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                background: 'bg-gray-900',
                ring: 'ring-gray-800',
              }"
              :openDelay="1000"
            >
              <div @click="triggerFileInput">
                <i class="fa-regular fa-image me-4 hover:text-sky-600"></i>
                <input
                  type="file"
                  id="file"
                  ref="file"
                  style="display: none"
                  @change="handleFileChange"
                />
              </div>
              <template #text>
                <span>Media</span>
              </template>
            </UTooltip>
            <UTooltip
              class=""
              :ui="{
                base: 'font-sm font-system px-3 py-1 tracking-wider font-semibold rounded-md bg-gray-700 text-gray-200 text-white',
                background: 'bg-gray-900',
                ring: 'ring-gray-800',
              }"
              :openDelay="1000"
            >
              <div @click="toggleEmojiPicker" class="hidden m1100:block">
                <i class="fa-regular fa-face-smile me-4 hover:text-sky-600"></i>
              </div>
              <template #text>
                <span>Emoji</span>
              </template>
            </UTooltip>
            <UPopover
              :ui="{
                background: 'bg-gray-900',
                ring: 'ring-gray-600',
                rounded: 'rounded-xl',
              }"
            >
              <i class="fa-solid fa-location-dot hover:text-sky-600 mt-1"></i>
              <template #panel>
                <div
                  class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
                >
                  <h1>Haven't added this feature Sorry!!</h1>
                </div>
              </template>
            </UPopover>
          </div>
          <button
            class="flex justify-center items-center p-2 tracking-wider font-system font-semibold rounded-full px-4 bg-sky-600 hover:bg-sky-700 text-base"
            @click="emitPost"
          >
            Post
          </button>
          <HomePostErrorWArning
            v-if="postError"
            class="h-screen w-screen fixed left-0 top-14 z-50 flex justify-center"
          >
            <button
              class="flex justify-center items-center p-2 tracking-wider font-system font-semibold rounded-full px-4 bg-red-600 hover:bg-red-700 text-base mx-auto mt-3"
              @click="handlePosteror"
            >
              Ok
            </button>
          </HomePostErrorWArning>
        </div>
        <div
          class="h-screen w-screen fixed left-0 top-0 z-10"
          v-if="showEmojiPicker"
          @click="handleSkipEmoji"
        ></div>
        <div
          v-if="showEmojiPicker"
          ref="emojiPicker"
          class="fixed z-20 mt-2 bg-white shadow-lg rounded-lg"
        >
          <emoji-picker @emoji-click="addEmoji"></emoji-picker>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(["handlePost"]);
  const postStore = usePostStore();
  const showEmojiPicker = ref(false);

  const textAreaHeight = () => {
    const textarea = document.getElementById("textarea");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const triggerFileInput = () => {
    const fileInput = document.getElementById("file");
    fileInput.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        postStore.setFileURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEmojiPicker = () => {
    showEmojiPicker.value = !showEmojiPicker.value;
  };

  const handleSkipEmoji = () => {
    showEmojiPicker.value = false;
  };

  const addEmoji = (event) => {
    const emoji = event.detail.unicode;
    const cursorPosition = postStore.postText.length;
    postStore.setPostText(
      postStore.postText.slice(0, cursorPosition) +
        emoji +
        postStore.postText.slice(cursorPosition)
    );
  };

  const emitPost = () => {
    if (!postStore.postText && !postStore.fileURL) {
      postStore.togglePostError();
      return;
    }
    emit("handlePost", {
      postText: postStore.postText,
      fileURL: postStore.fileURL,
    });
    postStore.setPostText("");
    postStore.setFileURL("");
    textarea.style.height = "auto";
    textarea.style.height = `auto`;
  };

  const handlePosteror = () => {
    postStore.togglePostError();
  };

  const postText = computed({
    get: () => postStore.postText,
    set: (newValue) => {
      // Handle setting logic here (e.g., validation)
      postStore.setPostText(newValue);
    },
  });

  const fileURL = computed(() => postStore.fileURL);
  const postError = computed(() => postStore.postError);
</script>

<style scoped>
  emoji-picker {
    width: 100%;
    max-width: 320px;
  }
</style>
