import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  state: () => ({
    activeShowAllPosts: true,
    activeShowFollowedPosts: false,
  }),
  actions: {
    async getAllPosts() {
      let res = await $fetch("/api/get-all-post");
      this.posts = res.data;
      return res.data;
    },
  },
});
