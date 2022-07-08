<template>
  <div class="section">
    <colorModeToggle />
  </div>
</template>

<script setup>
import ColorModeToggle from "@/components/ColorModeToggle.vue";
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
