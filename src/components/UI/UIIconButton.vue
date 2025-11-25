<template>
    <picture class="ui-icon-button">
        <component class="ui-icon-button__icon" :is="currentIcon" :key="currentIcon" />
    </picture>
</template>

<script setup lang="ts">
import FilterIcon from '@/assets/images/icons/filter.svg'
import CloseIcon from '@/assets/images/icons/close.svg'
import Rocket from '@/assets/images/icons/rocket.svg'
import Heart from '@/assets/images/icons/heart.svg'

const props = defineProps<{
    icon: 'filter' | 'close' | 'rocket' | 'heart'
}>()

const currentIcon = {
    filter: FilterIcon,
    close: CloseIcon,
    rocket: Rocket,
    heart: Heart,
}[props.icon as 'filter' | 'close' | 'rocket' | 'heart']
</script>

<style lang="scss" scoped>
.ui-icon-button {
    @include flex-center;
    height: $avatars-size-l;
    width: $avatars-size-l;
    border-radius: 100%;
    background-color: $color-primary;

    &__icon {
        fill: $color-white;
    }
}
</style>