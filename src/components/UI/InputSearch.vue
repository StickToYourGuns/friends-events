<template>
    <div class="input-search">
        <div class="input-search__icon-container">
            <MagnifierIcon class="input-search__icon" />
        </div>
        <input class="input-search__input" type="text" name="search" placeholder="Поиск" :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" autocomplete="off">
        <div class="input-search__icon-container">
            <FilterIcon class="input-search__icon input-search__icon--white" fill="white" />
        </div>
    </div>
</template>

<script setup lang="ts">
import MagnifierIcon from '@/assets/images/icons/magnifier.svg'
import FilterIcon from '@/assets/images/icons/filter.svg'

const props = defineProps<{
    modelValue?: string;
}>();

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();
</script>

<style lang="scss" scoped>
.input-search {
    display: flex;
    align-items: center;
    height: $main-input-height;
    background-color: $color-white;
    border-radius: calc($main-input-height/2);
    gap: 10px;
    position: relative;
    flex-shrink: 0;

    &__input {
        background: transparent;
        border: none;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        padding: 0 calc($main-input-height + $spacing-xxs) 0 $main-input-height;
        font-size: 1.25rem;
        color: $color-text-50;
        transition: all .3s ease;

        &:focus {
            outline: none;
            border: none;
            color: $color-text-80;
        }
    }

    &__icon-container {
        @include flex-center;
        position: absolute;
        height: $avatars-size-l;
        width: $avatars-size-l;
        border-radius: 100%;

        &:last-child {
            right: 0;
            background-color: $color-primary;
        }
    }

    &__icon {
        scale: 1.2;
        fill: #282828;

        &--white {
            fill: $color-white;
        }
    }
}
</style>