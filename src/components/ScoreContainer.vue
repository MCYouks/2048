<template>
  <div class="score">
    <!-- Text -->
    <div class="score__text">
      {{ score }}
    </div>

    <!-- Points -->
    <NewPoint v-for="point in pointsList" :key="point.id" :point="point" />
  </div>
</template>

<script setup>
import NewPoint from "@/components/NewPoint.vue";
import { useStoreGame } from "@/stores/game.js";
import { storeToRefs } from "pinia";

// Store Game API
const { score, pointsList } = storeToRefs(useStoreGame());
</script>

<style lang="scss" scoped>
.score {
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  min-width: 96px;
  height: 48px;
  border-radius: 5px;
  background: var(--color-background-soft);
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.15);

  &__text {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
