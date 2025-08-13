<template>
    <header class="header">
        <h1 class="header__title">My Events</h1>
        <img v-if="avatar !== 'null'" @click="openProfile(login)" class="header__image" :src="avatar" :alt="login">
        <span v-else @click="openProfile(login)" class="header__image empty">
            {{ login.charAt(0).toUpperCase() }}
        </span>
    </header>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const openProfile = (login) => {

    router.push({
        path: `/profile/${login}`,
    });
    console.log(login.value, avatar.value);
}

const login = computed(() => localStorage.getItem('login'))
const avatar = computed(() => localStorage.getItem('avatar'))
</script>

<style lang="scss" scoped>
.header {
    height: 100px;
    width: 100%;
    background-color: #00000050;
    box-shadow: 5px 5px 10px $color-opacityblack;
    position: sticky;
    top: 0;
    z-index: $z-index-header;
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
        color: $color-white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: $font-size-xl;
        font-weight: bold;

        &.empty {
            border: 1px solid $color-opacitygrey;
        }
    }
}
</style>