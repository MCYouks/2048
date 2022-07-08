<template>
  <div>
    {{ size }}
  </div>
</template>

<script setup>
import { useStoreGame } from "@/stores/game.js";
import { storeToRefs } from "pinia";

// Store Game API
const { size } = storeToRefs(useStoreGame());
</script>

<style lang="scss" scoped></style>
