<template>
    <div class="swiper__container">
        <div v-if="eventNext" class="swiper__card swiper__card--next"
            :style="{ backgroundImage: `url(${eventNext.image})` }"></div>

        <div v-if="event" class="swiper__card" :style="{
            backgroundImage: `url(${event.image})`,
            transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`
        }">
            <div class="swiper__content">
                <span class="swiper__content-item swiper__content-item--date">{{ useDateParser(event.date) }}</span>
                <span class="swiper__content-item swiper__content-item--location">{{ event.location_name }}</span>
                <h1 class="swiper__content-item swiper__content-item--heading">{{ event.title }}</h1>
                <span class="swiper__content-item swiper__content-item--description">{{ event.description }}</span>
            </div>
            <div class="swiper__actions">
                <UIIconButton @click="programmaticSwipe('left')" icon="close"
                    :style="direction === 'left' ? { filter: `brightness(${1 + 3 * opacity})` } : {}" />
                <UIIconButton @click="programmaticSwipe('up')" icon="rocket"
                    :style="direction === 'up' ? { filter: `brightness(${1 + 3 * opacity})` } : {}" />
                <UIIconButton @click="programmaticSwipe('right')" icon="heart"
                    :style="direction === 'right' ? { filter: `brightness(${1 + 3 * opacity})` } : {}" />
            </div>

            <div class="swiper__painter" :style="{
                backgroundColor: `${color}`,
                opacity: `${opacity}`
            }"></div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UIIconButton from '@/components/UI/UIIconButton.vue';
import { mockApi } from '@/api/mockApi';
import type { SwipeEvent } from '@/types';
import { useDateParser } from '@/composables/useDate';
import { useSwipeCard } from '@/composables/useSwipeCard';

const event = ref<SwipeEvent | null>(null)
const eventNext = ref<SwipeEvent | null>(null)
const cardEl = ref<HTMLElement | null>(null)

const { x, y, rotation, reset, swipeOff, color, opacity, direction } = useSwipeCard(cardEl)

const programmaticSwipe = async (direction: "left" | "right" | "up") => {
    swipeOff(direction)
    event.value = eventNext.value;
    eventNext.value = await mockApi.nextSwipeEvent();
}

const loadNext = async () => {
    const response = await mockApi.nextSwipeEvent()
    if (response) event.value = response
    reset()
}

onMounted(async () => {
    event.value = await mockApi.nextSwipeEvent();
    eventNext.value = await mockApi.nextSwipeEvent();
})
</script>

<style scoped lang="scss">
.swiper {
    &__container {
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
    }

    &__card {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: $spacing-l;
        background: no-repeat center/cover;
        border-radius: $spacing-m;
        padding: $spacing-l;
        transition: transform .1s;

        &::after {
            content: '';
            background: #000000;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 1) 100%);
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: $spacing-m;
            mix-blend-mode: luminosity;
            pointer-events: all;
        }

        &--next {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            filter: blur(2px);
        }
    }

    &__content {
        z-index: 1;
    }

    &__actions {
        z-index: 1;
        display: flex;
        justify-content: space-around;
    }

    &__content-item {
        display: flex;
        flex-direction: column;
        color: $color-white-80;

        &--date {
            font-size: .8rem;
        }

        &--location {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        &--heading {
            color: $color-white;
            line-height: 1.5rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        &--description {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

    }

    &__painter {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: inherit;
        mix-blend-mode: color;
    }
}
</style>