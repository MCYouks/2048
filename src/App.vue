<template>
  <div class="section">
    <!-- Score Container -->
    <ScoreContainer :style="{ marginTop: '64px' }" />

    <!-- Grid Container -->
    <GameContainer :style="{ marginTop: '48px' }" />

    <!-- Color Mode Toggle -->
    <ColorModeToggle />

    <!-- Restart -->
    <div @click="restart()">Restart</div>
  </div>
</template>

<script setup>
import ScoreContainer from "@/components/ScoreContainer.vue";
import ColorModeToggle from "@/components/ColorModeToggle.vue";
import GameContainer from "@/components/GameContainer.vue";
import { onKeyStroke } from "@vueuse/core";
import { game as Game } from "@/utils/game.js";
import { onMounted } from "vue";
import { useStoreGame } from "@/stores/game.js";
import { storeToRefs } from "pinia";

// Store Game API
const { tiles } = storeToRefs(useStoreGame());

// Game Utils
const { move, restart } = Game();

onMounted(() => {
  // If no tiles
  if (!tiles.value.length) restart();
});

// Vueuse - Keystroke API
onKeyStroke("ArrowUp", () => {
  move("up");
});

onKeyStroke("ArrowDown", () => {
  move("down");
});

onKeyStroke("ArrowLeft", () => {
  move("left");
});

onKeyStroke("ArrowRight", () => {
  move("right");
});
</script>

<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 448px;
  margin-left: auto;
  margin-right: auto;
}
</style>
