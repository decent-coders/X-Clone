import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const usePostStore = defineStore("post", () => {
  const postText = ref("");
  const fileURL = ref("");
  const postError = ref(false);
  const showEmojiPicker = ref(false);
  const activeShowAllPosts = ref(true);
  const activeShowFollowedPosts = ref(false);
  const posts = ref([]);

  const follow = ref(false);
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

  const ShowAllPosts = () => {
    activeShowFollowedPosts.value = false;
    activeShowAllPosts.value = true;
  };

  const ShowFollowedPosts = () => {
    activeShowAllPosts.value = false;
    activeShowFollowedPosts.value = true;
  };

  const addPost = (data) => {
    posts.value.unshift(data);
  };

  const reversedPosts = computed(() => {
    return [...posts.value];
  });

  const toggleFollow = () => {
    follow.value = !follow.value;
    followMssg.value = follow.value ? "Following" : "Follow";
  };

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
    ShowAllPosts,
    ShowFollowedPosts,
    addPost,
    reversedPosts,
    toggleFollow,
  };
});
