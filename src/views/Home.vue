<template>
    <Header />

    <Filters />

    <section class="events">
        <Stack :events="friendsEvents" title="Friends Events" @openEvent="openEvent" />
        <Stack :events="myEvents" title="Events with me" @openEvent="openEvent" />
    </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from 'vue-router';
import { useEventStore } from "@/store/eventStore";
import Header from "@/components/Header.vue";
import Filters from "@/components/Filters.vue";
import Stack from "@/components/Stack.vue";

const router = useRouter();
const eventStore = useEventStore();

const friendsEvents = computed(() => eventStore.friendsEvents)
const myEvents = computed(() => eventStore.myEvents)

const openEvent = (id) => {
    router.push({
        path: `/event/${id}`,
    });
}
</script>

<style lang="scss">
.events {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
    gap: 20px;
}
</style>