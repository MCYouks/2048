<template>
  <transition name="tile" appear>
    <div
      v-if="!tile.toRemove"
      class="tile"
      :style="{
        transform: `translate(${tile.x * 100}%, ${tile.y * 100}%)`,
        width: `calc(100% / ${size})`,
        height: `calc(100% / ${size})`,
      }"
    >
      <!-- Main -->
      <div class="tile__main" :class="`points-${tile.points}`">
        {{ tile.points }}
      </div>
    </div>
  </transition>
</template>

<script setup>
// Props
defineProps({
  tile: {
    type: Object,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.tile {
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px;
  user-select: none;

  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    font-size: 40px;
    font-weight: bold;
    box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.15);

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
