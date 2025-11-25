<template>
    <section v-if="events" class="content__section">
        <h2 class="events-slider__heading">{{ label }}</h2>
        <div class="events-slider__container">
            <div v-for="event in events" class="events-slider__card">
                <picture class="events-slider__image-container">
                    <img class="events-slider__image" :src="event.image" :alt="event.title">
                </picture>
                <div class="events-slider__content">
                    <div class="events-slider__description">
                        <h3 class="events-slider__title"> {{ event.title }} </h3>
                        <span class="events-slider__location"> {{ event.location_name }} </span>
                        <span class="events-slider__date"> {{ useDateParser(event.date) }} </span>
                    </div>
                    <picture class="events-slider__arrow-container">
                        <img class="events-slider__arrow" :src="arrow" alt="К событию">
                    </picture>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useDateParser } from '@/composables/useDate'
import type { FullEvent } from '@/types'
import arrow from "@/assets/images/icons/arrow-right.svg?url"

const props = defineProps<{
    events: FullEvent[],
    label: string
}>()
</script>