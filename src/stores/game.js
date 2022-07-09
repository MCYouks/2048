import { defineStore } from "pinia";
import { ref } from "vue";
import { replace, remove } from "@/utils/inmutable.js";

export const useStoreGame = defineStore("game", () => {
  // States
  const size = ref(4);
  const uid = ref(0);
  const tiles = ref([]);

  // Methods
  const replaceTile = function (index, newTile) {
    // Update tiles
    tiles.value = replace(tiles.value, index, newTile);
  };

  const removeTile = function (index) {
    // Update tiles
    tiles.value = remove(tiles.value, index);
  };

  const addTile = function (newTile) {
    // Update tiles
    tiles.value = [...tiles.value, { ...newTile, id: uid.value++ }];
  };

  return {
    // States
    size,
    tiles,

    // Methods
    replaceTile,
    removeTile,
    addTile,
  };
});
