<template>
        <header v-if="user" class="header">
            <div class="header__section">
                <h1 class="header__heading">Привет, {{ user?.first_name }}</h1>
                <span class="header__heading header__heading--secondary">Куда пойдем сегодня?</span>
            </div>
            <div class="header__section">
                <picture @click="openProfile" class="header__avatar-container">
                    <img class="header__avatar" :src="user?.photo_url" alt="Avatar">
                </picture>
            </div>
        </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import type { FullUser } from '@/types'
const userStore = useUserStore()
const router = useRouter()

const user = computed<FullUser>(() => userStore.fullUser);

const openProfile = () => {
    router.push(`/user/${user.value?.id}`)
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: $spacing-xl;

    &__section {
        display: inherit;
        flex-direction: column;
    }

    &__heading {
        &--secondary {
            color: $color-text-50;
            font-size: .875rem;
        }
    }

    &__avatar-container {
        background-color: $color-primary;
        height: $avatars-size-l;
        width: $avatars-size-l;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
    }

    &__avatar {
        height: inherit;
        width: inherit;
        object-fit: contain;
    }
}
</style>