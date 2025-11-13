<template>
  <Transition name="layouting" mode="out-in">
    <component :is="layout" :key="layoutKey">
      <Transition name="routing">
        <router-view />
      </Transition>
    </component>
  </Transition>
  <!-- <Notifications /> -->
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";

// import Notifications from "@/components/UI/Notifications.vue";
import { useKeyboardWatcher } from '@/services/useKeyboardBlur'
import { initTelegramApp } from '@/services/initTelegramApp'

import { useRoute } from 'vue-router'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";

const route = useRoute()

const layoutMap: Record<string, any> = {
  DefaultLayout,
  EmptyLayout,
};

const layout = computed(() => layoutMap[route.meta.layout as string] || DefaultLayout);
const layoutKey = computed(() => route.meta.layout || "DefaultLayout");

useKeyboardWatcher()

onMounted(() => {
  initTelegramApp()
});
</script>


<style scoped></style>
