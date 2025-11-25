<template>
    <main class="home">
        <InputSearch />
        <h2>Ивенты вокруг</h2>
        <CategoryPicker :categories="categories" :activeEventCategory="activeEventCategory"
            @pick-category="pickCategory" />
        <EventsListHome @click="openEvent(0)" />
    </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import InputSearch from "@/components/UI/InputSearch.vue";
import CategoryPicker from "@/components/UI/CategoryPicker.vue";
import EventsListHome from "@/components/EventsListHome.vue";
import { useRouter } from 'vue-router'
const router = useRouter()

import { useEventsStore } from "@/stores/eventsStore.ts";

const eventsStore = useEventsStore()

const categories = computed(() => eventsStore.eventsCategories)
const activeEventCategory = computed(() => eventsStore.activeEventCategory)

const pickCategory = (category: string) => {
    eventsStore.setCategory(category)
}


// todo
const openEvent = (id: number) => {
    router.push({
        path: `/event/${id}`,
    });
}
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    // padding-bottom: calc(var(--tg-safe-area-inset-bottom) + $menu-height + $spacing-xl);
}
</style>