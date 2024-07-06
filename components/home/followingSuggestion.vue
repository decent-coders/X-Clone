<template>
  <div ref="followingSuggestion">
    <div class="mt-2 mb-2" ref="suggestionContainer">
      <div
        class="p-2 ps-0 pr-1 flex flex-row justify-between items-center cursor-pointer"
      >
        <UPopover
          :ui="{
            background: 'bg-gray-900',
            ring: 'ring-gray-600',
            rounded: 'rounded-xl',
          }"
        >
          <div ref="ppDetails" class="flex flex-row justify-start relative">
            <div class="pp-image">
              <img class="h-10 w-10 rounded-full" :src="pp" alt="" />
            </div>
            <div class="pp-name ms-2">
              <h1
                class="text-sm tracking-wider font-semibold font-system hover:underline"
              >
                {{ name }}
              </h1>
              <h2 class="text-gray-500 tracking-wider">{{ username }}</h2>
            </div>
          </div>

          <template #panel>
            <div
              class="w-36 text-sm text-gray-400 px-4 py-2 bg-black cursor-default font-system text-center ring ring-gray-600"
            >
              <h1>Haven't added this feature Sorry!!</h1>
            </div>
          </template>
        </UPopover>
        <button
          class="rounded-full -mt-1 flex items-center justify-center px-4 h-8 bg-slate-200 hover:bg-slate-300 font-bold text-black text-sm tracking-[1px] z-10 absolute right-3 font-system"
          :class="{
            'text-gray-300 border h-9 border-gray-600 bg-zinc-950  hover:bg-zinc-900':
              follow,
          }"
          ref="followButton"
          @click="handleFollowing"
        >
          {{ followMssg }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(["name", "username", "pp"]);
  const follow = ref(false);
  const followMssg = ref("Follow");
  const handleFollowing = () => {
    if (!follow.value) {
      follow.value = true;
      followMssg.value = "Following";
    } else {
      follow.value = false;
      followMssg.value = "Follow";
    }
  };
</script>
