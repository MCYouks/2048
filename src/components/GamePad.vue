<template>
  <!-- Gamepad -->
  <div class="gamepad" @click="toggleSize()">
    <!-- Cells -->
    <div v-for="i in size * size" :key="i" class="gamepad__cell"></div>
  </div>
</template>

<script setup>
import { useStoreGame } from "@/stores/game.js";
import { storeToRefs } from "pinia";

// Store Game API
const { size } = storeToRefs(useStoreGame());

// Methods
const toggleSize = function () {
  if (size.value < 5) size.value++;
  else size.value = 3;
};
</script>

<style lang="scss" scoped>
.gamepad {
  position: relative;
  display: grid;
  grid-template-rows: repeat(v-bind("size"), minmax(0, 1fr));
  grid-template-columns: repeat(v-bind("size"), minmax(0, 1fr));
  padding: 4px;
  aspect-ratio: 1;
  background: var(--color-background-soft);

  &__cell {
    margin: 4px;
    border-radius: 8px;
    background: var(--color-background);
  }
}
</style>
