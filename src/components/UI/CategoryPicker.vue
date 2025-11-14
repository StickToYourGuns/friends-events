<template>
    <div class="categories">
        <button @click="pickCategory(category)" v-for="category in props.categories" class="category-button"
            :class="{ 'category-button--active': category === props.activeEventCategory }">
            {{ category }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { Haptics } from '@/services/haptics'
import { ref } from "vue";

const props = defineProps<{
    categories?: string[],
    activeEventCategory?: string
}>()

const emit = defineEmits<{
    (e: 'pickCategory', category: string): void
}>()

const pickCategory = (category: string) => {
    Haptics.selection()
    emit('pickCategory', category)
}
</script>

<style lang="scss" scoped>
.categories {
    display: flex;
    gap: $spacing-xs;
    height: $categories-height;
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-snap-align: start;
    margin-left: -$spacing-xl;
    padding-left: $spacing-xl;
    width: calc(100% + $spacing-xl * 2);
    padding-right: $spacing-xl;

    &::-webkit-scrollbar {
        display: none;
    }
}

.category-button {
    display: flex;
    align-items: center;
    height: 100%;
    border: none;
    border-radius: calc($categories-height/2);
    padding: 0 $spacing-m;
    background-color: $color-white;
    color: $color-text-50;
    font-size: 1rem;
    transition: all .3s ease;

    &--active {
        background-color: $color-primary;
        color: $color-white;
    }
}
</style>