<template>
  <div class="section">
    <!-- Grid Container -->
    <GameContainer />

    <!-- Color Mode Toggle -->
    <ColorModeToggle />
  </div>
</template>

<script setup>
import ColorModeToggle from "@/components/ColorModeToggle.vue";
import GameContainer from "@/components/GameContainer.vue";
import { onKeyStroke } from "@vueuse/core";
import { game as Game } from "@/utils/game.js";
import { onMounted } from "vue";

// Game Utils
const { addRandomTile, move } = Game();

onMounted(() => addRandomTile());

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
