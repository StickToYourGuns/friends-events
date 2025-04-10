<script setup>
import { onMounted, onUnmounted } from "vue";

const preventPullToRefresh = (event) => {
  if (window.scrollY === 0 && event.touches[0].clientY > 0) {
    event.preventDefault(); // Блокируем "pull-to-refresh"
  }
};

onMounted(() => {
  window.addEventListener("touchmove", preventPullToRefresh, { passive: false });
});

onUnmounted(() => {
  window.removeEventListener("touchmove", preventPullToRefresh);
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
