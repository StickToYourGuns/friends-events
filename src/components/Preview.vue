<template>
    <img class="events__preview" :src="image" :style="{
        height: previewHeight,
        transition: transitionSpeed,
    }" />
</template>

<script setup lang="ts">
import { usePreviewSwipe } from '@/composables/usePreviewSwipe';

const props = defineProps<{ image: string }>();
const { previewHeight, transitionSpeed } = usePreviewSwipe();
</script>