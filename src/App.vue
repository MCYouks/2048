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
</script>

<style lang="scss">
.section {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 512px;
  margin-left: auto;
  margin-right: auto;
}
</style>
