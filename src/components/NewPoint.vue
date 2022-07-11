<template>
  <transition name="point" appear>
    <div class="point">+ {{ point.number }}</div>
  </transition>
</template>

<script setup>
defineProps({
  point: {
    type: Object,
    required: true,
  },
});

// Const
const emojis = ["✨", "🔥", "⭐"];

// Methods
// eslint-disable-next-line no-unused-vars
const randomEmoji = function () {
  return emojis[Math.floor(Math.random() * emojis.length)];
};
</script>

<style lang="scss" scoped>
.point {
  position: absolute;
  align-self: center;
  text-align: center;
  width: 128px;
  font-size: 32px;
  font-weight: bold;
  color: green;
  opacity: 0;
}

.point-enter-active {
  animation-name: point;
  animation-timing-function: ease-in;
  animation-duration: 400ms;
  animation-fill-mode: both;
}

.point-leave-active {
  animation: none;
}

@keyframes point {
  0% {
    transform: translateY(-25px);
    opacity: 1;
  }
  50% {
    transform: translateY(-75px) scale(1.2);
    opacity: 1;
  }
  100% {
    transform: translateY(-150px);
    opacity: 0;
  }
}
</style>
