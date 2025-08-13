<script setup>
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Modal from "@/components/UI/Modal.vue";
import Notifications from "@/components/UI/Notifications.vue";
import { useEventStore } from "@/store/eventStore.js";

const eventStore = useEventStore();

// import MainMenu from "@/components/UI/MainMenu.vue";

const preventPullToRefresh = (event) => {
  if (window.scrollY === 0 && deltaY > 0) {
    event.preventDefault();
  }
};

const router = useRouter();
let startX = 0;
let startY = 0;
let currentX = 0;
let currentY = 0;
let endX = 0;
let endY = 0;
let deltaX = 0;
let deltaY = 0;

const handleTouchStart = (event) => {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
};

const handleTouchMove = (event) => {
  currentX = event.touches[0].clientX;
  currentY = event.touches[0].clientY;
  deltaX = currentX - startX;
  deltaY = currentY - startY;

  console.log(deltaY);


  if (startX < 30 && deltaX > 0) {
    const shadowIntensity = Math.min(deltaX / 2, 200);
    document.body.style.boxShadow = `inset ${shadowIntensity}px 0 50px black`;
    console.log(shadowIntensity, document.body);
  }
};

const handleTouchEnd = (event) => {
  endX = event.changedTouches[0].clientX;
  endY = event.changedTouches[0].clientY;
  const deltaX = endX - startX;
  const deltaY = endY - startY;

  document.body.style.boxShadow = "";

  if (startX < 30 && deltaX > 100) {
    router.back();
  }
};

onMounted(() => {
  eventStore.checkAuth();

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
  <Modal />
  <Notifications />
  <router-view></router-view>
  <!-- <MainMenu /> -->
</template>

<style scoped></style>