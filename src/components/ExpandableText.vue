<template>
    <section v-if="text" class="content__section">
        <div class="content__description-container"
            :class="{ 'content__description-container--long': isLongText, 'content__description-container--expanded': isExpandedText }"
            :style="{
                maxHeight: isExpandedText ? expandedHeight : undefined
            }">
            <p ref="description" class="content__description" @click="expandText(null)">{{
                text }}</p>
        </div>

        <button class="content__description-button" @click="expandText('toggle')">
            {{ isExpandedText ? 'Скрыть' : 'Показать полностью' }}
        </button>
    </section>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useTextExpand } from '@/services/useTextExpand'

const props = defineProps<{
    text: string,
}>()

const description = ref<HTMLElement | null>(null)

const {
    isLongText,
    isExpandedText,
    expandedHeight,
    expandText
} = useTextExpand(description)
</script>