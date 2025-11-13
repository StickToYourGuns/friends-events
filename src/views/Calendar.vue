<template>
    <main class="calendar">
        Тут будет календарь
    </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.calendar {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    // height: 100%;
    padding-bottom: calc(var(--tg-safe-area-inset-bottom) + $menu-height + $spacing-xl);

    &>* {
        flex-shrink: 0;
    }
}
</style>