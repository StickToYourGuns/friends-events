<template>
    <main class="friends">
        <InputSearch v-model="searchQuery" />
        <h2>Друзья</h2>
        <Friends :friends="filteredFriends" />
    </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import InputSearch from "@/components/UI/InputSearch.vue";
import Friends from "@/components/FriendsList.vue";
import { useUserStore } from "@/stores/userStore";
import type { Friend } from '@/types';

const userStore = useUserStore();

const searchQuery = ref('');

const filteredFriends = computed<Friend[]>(() => {
    const query = searchQuery.value.trim().toLowerCase();

    if (!query) {
        return userStore.fullUser?.friends ?? [];
    }

    return (userStore.fullUser?.friends ?? []).filter(friend => {
        const username = (friend.username ?? '').toLowerCase();
        const bio = (friend.bio ?? '').toLowerCase();
        return username.includes(query) || bio.includes(query);
    });
});
</script>

<style lang="scss" scoped>
.friends {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    overflow: hidden;
    flex-shrink: 1;
}
</style>