<template>
  <img src="@/assets/images/chevron.svg" class="event__button--back" @click="goBack">

  <Preview :event="event" />

  <Bio :event="event" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router';
import { useEventStore } from '@/store/eventStore';

import Preview from "@/components/Preview.vue";
import Bio from "@/components/Bio.vue";

const route = useRoute();
const eventStore = useEventStore();

const eventId = route.params.id;

const goBack = () => {
  window.history.back();
};

const event = computed(() => {
  return eventStore.friendsEvents.find(e => e.id === Number(eventId)) ||
    eventStore.myEvents.find(e => e.id === Number(eventId));
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/event.scss'
</style>