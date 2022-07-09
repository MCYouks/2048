<template>
  <div class="grid">
    <!-- Wrapper -->
    <div class="grid__wrapper">
      <!-- Game pad -->
      <GamePad :size="size" />

      <!-- Game tiles -->
      <GameTile
        v-for="tile in tiles"
        :key="tile.id"
        :tile="tile"
        :size="size"
      />
    </div>
  </div>
</template>

<script setup>
import GamePad from "@/components/GamePad.vue";
import GameTile from "@/components/GameTile.vue";
import { useStoreGame } from "@/stores/game.js";
import { storeToRefs } from "pinia";

// Store Game API
const { size, tiles } = storeToRefs(useStoreGame());
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
