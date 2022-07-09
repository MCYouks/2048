<template>
  <transition name="tile" appear>
    <div
      class="tile"
      :style="`transform: translate(${tile.x * 100}%, ${tile.y * 100}%)`"
    >
      <!-- Main -->
      <div class="tile__main" :class="`points-${tile.points}`">
        {{ tile.points }}
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useStoreGame } from "@/stores/game.js";
import { storeToRefs } from "pinia";

// Props
defineProps({
  tile: {
    type: Object,
    required: true,
  },
});

// Store Game API
const { size } = storeToRefs(useStoreGame());
</script>

<style lang="scss" scoped>
.tile {
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;
  width: calc(100% / v-bind("size"));
  height: calc(100% / v-bind("size"));
  user-select: none;

  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    font-size: 32px;
    font-weight: bold;

    &.points-2 {
      background: turquoise;
    }

    &.points-4 {
      background: green;
    }
  }
}

// Animation
// .tile-enter-active {
//   animation-name: tile-appear;
//   animation-timing-function: ease;
//   animation-duration: 200ms;
//   animation-fill-mode: backwards;
// }

// // Keyframes
// @keyframes tile-appear {
//   0% {
//     opacity: 0;
//     transform: scale(0);
//   }
//   100% {
//     opacity: 1;
//     transform: scale(1);
//   }
// }
</style>
