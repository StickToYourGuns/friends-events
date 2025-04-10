<template>
    <header class="header">
        <h1 class="header__title">My Events</h1>
        <img @click="openProfile(user.nickname)" class="header__image"
            :src="user.avatar"
            alt="">
    </header>
</template>

<script setup>
import { computed } from "vue";
import { useEventStore } from '@/store/eventStore';
import { useRouter } from 'vue-router';

const eventStore = useEventStore();
const router = useRouter();

const openProfile = (nickname) => {
    router.push({
        path: `/profile/${nickname}`,
    });
}

const user = computed(() => eventStore.user)
</script>

<style lang="scss" scoped>
.header {
    height: 100px;
    width: 100%;
    background-color: #00000050;
    box-shadow: 5px 5px 10px $color-opacityblack;
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    border-radius: 0 0 20px 20px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {}

    &__image {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>