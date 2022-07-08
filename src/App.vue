<template>
  <div class="section">
    <button @click="toggle()">Toggle color mode</button>
    {{ isDark }}
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

// Vueuse - Dark API
const isDark = useDark({ attribute: "color-mode" });

// Vueuse - Toggle API
const toggle = useToggle(isDark);
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
