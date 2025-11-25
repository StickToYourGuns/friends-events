<template>
    <!-- <div class="swiper"> -->
    <!-- <span>{{ event }}</span> -->
    <!-- <div class="swiper__card" > -->
    <div class="swiper__card" :style="{ backgroundImage: `url(${event?.image})` }">
        <div class="swiper__content">
            <span class="swiper__content-item swiper__content-item--date">{{ useDateParser(event?.date) }}</span>
            <span class="swiper__content-item swiper__content-item--location">{{ event?.location_name }}</span>
            <h1 class="swiper__content-item swiper__content-item--heading">{{ event?.title }}</h1>
            <span class="swiper__content-item swiper__content-item--description">{{ event?.description }}</span>
        </div>
        <div class="swiper__actions">
            <UIIconButton icon="close" />
            <UIIconButton icon="rocket" />
            <UIIconButton icon="heart" />
        </div>
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import UIIconButton from '@/components/UI/UIIconButton.vue';
import { mockApi } from '@/api/mockApi'
import type { SwipeEvent } from '@/types';
import { useDateParser } from '@/composables/useDate'

const event = ref<SwipeEvent | null>(null)

onMounted(async () => {
    const response = await mockApi.nextSwipeEvent()
    event.value = response
});
</script>

<style scoped lang="scss">
.swiper {
    &__card {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: $spacing-l;
        flex-grow: 1;
        background: no-repeat center/cover;
        position: relative;
        border-radius: $spacing-m;
        padding: $spacing-l;

        &::after {
            content: '';
            background: #000000;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 1) 100%);
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: $spacing-m;
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
}
</style>