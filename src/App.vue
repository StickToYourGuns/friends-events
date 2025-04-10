<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const preventPullToRefresh = (event) => {
  if (window.scrollY === 0 && event.touches[0].clientY > 0) {
    event.preventDefault();
  }
};

const router = useRouter();
let startX = 0;
let currentX = 0;
let endX = 0;

const handleTouchStart = (event) => {
  startX = event.touches[0].clientX;
};

const handleTouchMove = (event) => {
  currentX = event.touches[0].clientX;
  const deltaX = currentX - startX;

  if (startX < 30 && deltaX > 0) {

    const shadowIntensity = Math.min(deltaX / 2, 200);
    document.body.style.boxShadow = `inset ${shadowIntensity}px 0 30px black`;
    console.log(shadowIntensity, document.body);
  }
};

const handleTouchEnd = (event) => {
  endX = event.changedTouches[0].clientX;
  const deltaX = endX - startX;

  document.body.style.boxShadow = "";

  if (startX < 30 && deltaX > 100) {
    router.back();
  }
};

onMounted(() => {
  window.addEventListener("touchmove", preventPullToRefresh, { passive: false });
  window.addEventListener("touchstart", handleTouchStart);
  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);
});

onUnmounted(() => {
  window.removeEventListener("touchmove", preventPullToRefresh);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
