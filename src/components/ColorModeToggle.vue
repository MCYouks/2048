<template>
  <!-- Toggle -->
  <div class="toggle" @click="toggle()">
    <!-- Indicator -->
    <div class="toggle__indicator" :class="{ active: isDark }">
      <!-- Icon -->
      <font-awesome-icon
        :icon="isDark ? 'moon' : 'adjust'"
        class="toggle__indicator__icon"
      />
    </div>
  </div>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

// Vueuse - Dark API
const isDark = useDark({ attribute: "color-mode" });

// Vueuse - Toggle API
const toggle = useToggle(isDark);
</script>

<style lang="scss" scoped>
.toggle {
  position: fixed;
  bottom: 16px;
  right: 24px;
  display: flex;
  align-items: center;
  width: 56px;
  height: 32px;
  border: 1px solid var(--color-border);
  border-radius: 100px;
  padding: 0 4px;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-border-hover);
  }

  &__indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 100px;
    background: var(--color-border);
    transition: all 0.2s ease-in-out;

    &:not(.active) {
      transform: translateX(24px);
    }

    &__icon {
      height: 14px;
      width: 14px;
    }
  }
}
</style>
