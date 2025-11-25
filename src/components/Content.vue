<template>
    <div class="events__content" :style="{ 'maxHeight': contentHeight }">
        <div class="content__hr-container">
            <div class="content__hr" :class="{ 'content__hr--active': isScrolling }"></div>
        </div>
        <section v-if="isEvent(content)" class="content__section">
            <h2 class="content__title">{{ content.title }}</h2>
            <span class="content__info">{{ content.location_name }}</span>
            <span class="content__info">{{ useDateParser(content.date) }}</span>
        </section>

        <section class="content__section" v-else>
            <h2 class="content__title">{{ content.username }}</h2>
        </section>

        <main class="content__accept-scroll" v-if="isEvent(content)">
            <ExpandableText :text="content.description || ''" />
            <Participants label="Участники" :participants="content.participants || []" />
            <Comments label="Комментарии" :comments="content.comments || []" />
        </main>
        
        <main v-else class="content__accept-scroll">
            <EventsSlider label="Ивенты" :events="content.events || []" />
            <Participants label="Друзья" :participants="content.friends || []" />
        </main>

    </div>

</template>

<script setup lang="ts">
import { useDateParser } from '@/composables/useDate'
import { usePreviewSwipe } from '@/composables/usePreviewSwipe'
import type { FullEvent, FullUser } from '@/types'
import { isEvent } from '@/helpers/typeGuards'
import ExpandableText from "@/components/ExpandableText.vue";
import EventsSlider from '@/components/EventsSlider.vue';
import Participants from "@/components/Participants.vue";
import Comments from "@/components/Comments.vue";

const props = defineProps<{
    content: FullEvent | FullUser,
}>()

const { isScrolling, contentHeight, transitionSpeed } = usePreviewSwipe()
</script>