// ~/plugins/emoji-picker.js
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    import("emoji-picker-element").then((module) => {
      customElements.define("emoji-picker", module.default);
    });
  }
});
