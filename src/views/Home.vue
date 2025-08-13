<template>
    <Header />

    <Filters />

    <section class="events">
        <Stack :events="events" title="Available events" @openEvent="openEvent" />
        <!-- <Stack :events="myEvents" title="Events with me" @openEvent="openEvent" /> -->
    </section>

    <Plus />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useEventStore } from "@/store/eventStore";
import Header from "@/components/Header.vue";
import Filters from "@/components/Filters.vue";
import Stack from "@/components/Stack.vue";
import Plus from "@/components/Plus.vue";

const router = useRouter();
const eventStore = useEventStore();

const events = computed(() => eventStore.events)

const openEvent = (id) => {
    router.push({
        path: `/event/${id}`,
    });
}

onMounted(() => {
    eventStore.fetchData('get', 'events');
});
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