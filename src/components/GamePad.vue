<template>
  <!-- Gamepad -->
  <div class="gamepad">
    <!-- Cells -->
    <div v-for="i in size * size" :key="i" class="gamepad__cell"></div>
  </div>
</template>

<script setup>
// Props
defineProps({
  size: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.gamepad {
  display: grid;
  grid-template-rows: repeat(v-bind("size"), minmax(0, 1fr));
  grid-template-columns: repeat(v-bind("size"), minmax(0, 1fr));
  border-radius: 5px;
  aspect-ratio: 1;

  &__cell {
    margin: 4px;
    border-radius: 8px;
    background: var(--color-background);
  }
}
</style>
