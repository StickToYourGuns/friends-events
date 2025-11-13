<template>
        <TransitionGroup name="list" class="friends__list" tag="div">
            <div v-if="friends" v-for="friend in friends" class="friend" :key="friend.username">
                <img class="friend__image" :src="friend.photo_url" alt="`Аватар ${friend.username}`">
                <div class="friend__main">
                    <span class="friend__username">{{ friend.username }}</span>
                    <span class="friend__text">{{ friend.bio }}</span>
                </div>
                <!-- <div class="friend__link">
                    <Telegram class="friend__icon" alt="Ссылка на телеграм" />
                </div> -->
            </div>
        </TransitionGroup>
</template>

<script setup lang="ts">
import type { Friend } from '@/types'
import telegram from "@/assets/images/icons/telegram.svg?url"
import Telegram from "@/assets/images/icons/telegram.svg"

const props = defineProps<{
    friends: Friend[] | null,
}>()
</script>

<style lang="scss" scoped>
.friends {
    &__list {
        position: relative;
        flex-shrink: 1;
        overflow: scroll;
        padding-bottom: calc(var(--tg-safe-area-inset-bottom) + $menu-height);
    }
}

.friend {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    gap: $spacing-xs;
    background-color: $color-white;
    padding: $spacing-xs;
    border-radius: $spacing-s;
    margin-bottom: $spacing-xs;

    &__main {
        display: flex;
        flex-direction: column;
        gap: $spacing-xs;
        flex-grow: 0;
        overflow: hidden;
    }

    &__username {
        color: $color-text-80;
    }

    &__text {
        font-size: .9rem;
        color: $color-text-50;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__image {
        width: $avatars-size-m;
        height: $avatars-size-m ;
        border-radius: $avatars-size-m;
    }

    // &__link {
    //     @include flex-center;
    //     margin-left: auto;
    //     align-self: stretch;
    // }

    // &__icon {
    //     fill: $color-primary;
    // }
}
</style>