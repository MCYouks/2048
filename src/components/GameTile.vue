<template>
  <div
    class="tile"
    :class="{ merged: tile.merged }"
    :style="{
      transform: `translate(${tile.x * 100}%, ${tile.y * 100}%)`,
      width: `calc(100% / ${size})`,
      height: `calc(100% / ${size})`,
    }"
  >
    <!-- Main -->
    <transition name="tile" appear>
      <div class="tile__main" :class="`points-${tile.points}`">
        {{ tile.points }}
      </div>
    </transition>
  </div>
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
  transition: transform 100ms ease-in-out;

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
      background: #64748b;
      color: #fff;
    }

    &.points-4 {
      background: #818cf8;
      color: #fff;
    }

    &.points-8 {
      background: #fb923c;
      color: #fff;
    }

    &.points-16 {
      background: #ea580c;
      color: #fff;
    }

    &.points-32 {
      background: #ef4444;
      color: #fff;
    }

    &.points-64 {
      background: #dc2626;
      color: #fff;
    }

    &.points-128 {
      background: #facc15;
      color: #fff;
      font-size: 36px;
    }

    &.points-256 {
      background: #f59e0b;
      color: #fff;
      font-size: 36px;
    }

    &.points-512 {
      background: #eab308;
      color: #fff;
      font-size: 36px;
    }

    &.points-1024 {
      background: #34d399;
      color: #fff;
      font-size: 32px;
    }

    &.points-2048 {
      background: #10b981;
      color: #fff;
      font-size: 32px;
    }

    &.points-4096 {
      background: #60a5fa;
      color: #fff;
      font-size: 32px;
    }

    &.points-8192 {
      background: #6366f1;
      color: #fff;
      font-size: 32px;
    }

    &.points-16384 {
      background: #e879f9;
      color: #fff;
      font-size: 24px;
    }

    &.points-32768 {
      background: #ec4899;
      color: #fff;
      font-size: 20px;
    }

    &.points-65536 {
      background: #84cc16;
      color: #fff;
      font-size: 16px;
    }

    &.points-super {
      background: #0d9488;
      color: #fff;
      font-size: 16px;
    }
  }
}

// Animation
.tile-enter-active {
  animation-name: tile-appear;
  animation-timing-function: ease;
  animation-duration: 200ms;
  animation-delay: 100ms;
  animation-fill-mode: backwards;
}

.merged .tile-enter-active {
  animation-name: tile-pop;
  animation-timing-function: ease;
  animation-duration: 200ms;
  animation-delay: 100ms;
  animation-fill-mode: backwards;
}

// Keyframes
@keyframes tile-appear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes tile-pop {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
