<template>
  <div class="grid" @click="addRandomTile()">
    <!-- Wrapper -->
    <div class="grid__wrapper">
      <!-- Game pad -->
      <GamePad :size="size" />

      <!-- Game tiles -->
      <GameTile v-for="tile in tiles" :key="tile.id" :tile="tile" />
    </div>
  </div>
</template>

<script setup>
import GamePad from "@/components/GamePad.vue";
import GameTile from "@/components/GameTile.vue";
import { useStoreGame } from "@/stores/game.js";
import { storeToRefs } from "pinia";
import { game as Game } from "@/utils/game.js";

// Store Game API
const { size, tiles } = storeToRefs(useStoreGame());

// Game Utils
const { addRandomTile } = Game();
</script>

<style lang="scss" scoped>
.grid {
  position: relative;
  background: var(--color-background-soft);

  &__wrapper {
    margin: 4px;
  }
}
</style>
