<template>
    <Preview v-if="event" :image="event.image" />
    <Content v-if="event" :content="event" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from 'vue-router';
import { useEventsStore } from '@/stores/eventsStore';
import type { FullEvent } from '@/types'

import Preview from "@/components/Preview.vue";
import Content from "@/components/Content.vue";

const eventsStore = useEventsStore();
const event = computed<FullEvent>(() => eventsStore.eventsMock[0] || {} as FullEvent);

const route = useRoute();
const eventId = route.params.id;
</script>