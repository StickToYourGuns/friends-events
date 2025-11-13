<template>
    <picture class="filter-button-container">
        <FilterIcon class="filter-button" />
    </picture>
</template>

<script setup lang="ts">
import FilterIcon from '@/assets/images/icons/filter.svg'
</script>

<style lang="scss" scoped>
.filter-button-container {
    background-color: $color-primary;
    height: 100%;
    width: $avatars-size-l;
    right: 0;
}
</style>