import { defineStore } from "pinia";
import { ref } from "vue";

export const useStoreGame = defineStore("game", () => {
  // States
  const size = ref(4);

  return {
    // States
    size,
  };
});
