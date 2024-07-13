import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePostStore = defineStore("post", () => {
  const postText = ref("");
  const fileURL = ref("");
  const name = ref("Demo Name");
  const username = ref("DecentCoders");
  const ppPath = ref("/download.png");
  const postError = ref(false);
  const showEmojiPicker = ref(false);
  const activeShowAllPosts = ref(true);
  const activeShowFollowedPosts = ref(false);
  const posts = ref([]);
  const follow = ref(false);
  const ppTips = ref(true);
  const followMssg = ref("Follow");

  const setPostText = (text) => {
    postText.value = text;
  };

  const setFileURL = (url) => {
    fileURL.value = url;
  };

  const togglePostError = () => {
    postError.value = !postError.value;
  };

  const toggleEmojiPicker = () => {
    showEmojiPicker.value = !showEmojiPicker.value;
  };

  const showAllPosts = () => {
    activeShowFollowedPosts.value = false;
    activeShowAllPosts.value = true;
  };

  const showFollowedPosts = () => {
    activeShowAllPosts.value = false;
    activeShowFollowedPosts.value = true;
  };

  const addPost = (data) => {
    posts.value.unshift({ ...data, createdAt: new Date() });
  };

  const reversedPosts = computed(() => {
    return [...posts.value];
  });

  const toggleFollow = () => {
    follow.value = !follow.value;
    followMssg.value = follow.value ? "Following" : "Follow";
  };

  const formatPostTime = (date, currentTime) => {
    const now = currentTime;
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

  const setppPath = (newPath) => {
    ppPath.value = newPath;
  };

  const isPostsEmpty = computed(() => {
    return posts.value.length === 0;
  });
  return {
    postText,
    fileURL,
    postError,
    showEmojiPicker,
    activeShowAllPosts,
    activeShowFollowedPosts,
    posts,
    follow,
    followMssg,
    setPostText,
    setFileURL,
    togglePostError,
    toggleEmojiPicker,
    showAllPosts,
    showFollowedPosts,
    addPost,
    reversedPosts,
    toggleFollow,
    formatPostTime,
    name,
    username,
    ppPath,
    setppPath,
    ppTips,
    isPostsEmpty,
  };
});
