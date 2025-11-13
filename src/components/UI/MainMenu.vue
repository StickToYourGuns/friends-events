<template>
    <nav class="menu">
        <button v-for="item in menuItems" :key="item.path" @click="navigate(item.path)" class="menu__button"
            :class="{ 'menu__button--active': activePage === item.name }">
            <component :is="item.icon" class="menu__icon"
                :class="{ 'menu__icon--active': activePage === item.name }" />
        </button>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { Haptics } from '@/services/haptics'

import Home from '@/assets/images/icons/home.svg'
import GroupPerson from '@/assets/images/icons/group-person.svg'
import Calendar from '@/assets/images/icons/calendar.svg'
import Flame from '@/assets/images/icons/flame.svg'

const router = useRouter()
const route = useRoute()


const navigate = (page: string) => {
    Haptics.selection()
    router.push(page)
}

const activePage = computed(() => route.name)

const menuItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/friends', name: 'Friends', icon: GroupPerson },
    { path: '/calendar', name: 'Calendar', icon: Calendar },
    { path: '/swipe', name: 'Swipe', icon: Flame }
]
</script>

<style lang="scss" scoped>
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - $spacing-l * 2);
    padding: 0 $menu-padding;
    height: $menu-height;
    border-radius: calc($menu-height / 2);
    margin: auto;
    position: absolute;
    left: 0;
    bottom: var(--tg-safe-area-inset-bottom);
    right: 0;
    background-color: $color-primary;

    &__button {
        background-color: transparent;
        border: none;
        height: $menu-button-size;
        width: $menu-button-size;
        border-radius: $menu-button-size;
        transition: all .5s ease;

        &--active {
            background-color: $color-white;
        }
    }

    &__icon {
        scale: 1.25;
        fill: $color-white;
        transition: all .3s ease;

        &--active {
            scale: 1.35
            ;
            fill: $color-primary;
        }
    }
}
</style>