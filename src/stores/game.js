import { defineStore } from "pinia";
import { useLocalStorage, StorageSerializers } from "@vueuse/core";
import { ref } from "vue";
import { replace, remove } from "@/utils/inmutable.js";

export const useStoreGame = defineStore("game", () => {
  // States
  const size = ref(4);
  const uid = ref(0);
  const score = useLocalStorage("game-score", 0, {
    serializer: StorageSerializers.number,
  });
  const pointsList = ref([]);
  const pointId = ref(0);
  const tiles = useLocalStorage("game-tiles", []);

  // Methods
  const replaceTile = function (index, newTile) {
    // Update tiles
    tiles.value = replace(tiles.value, index, newTile);
  };

  const removeTile = function (index) {
    console.log({
      index,
      tiles: tiles.value,
      newTiles: remove(tiles.value, index),
    });

    // Update tiles
    tiles.value = remove(tiles.value, index);
  };

  const addTile = function (newTile) {
    // Update tiles
    tiles.value = [...tiles.value, { ...newTile, id: uid.value++ }];
  };

  const augmentScore = function (points) {
    // Update score
    score.value += points;

    // Append points in list
    pointsList.value = [
      ...pointsList.value,
      { number: points, id: pointId.value++ },
    ];
  };

  return {
    // States
    size,
    tiles,
    score,
    pointsList,

    // Methods
    replaceTile,
    removeTile,
    addTile,
    augmentScore,
  };
});
