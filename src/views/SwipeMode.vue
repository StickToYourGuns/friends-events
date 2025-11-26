<template>
    <main class="swiper">
        <div class="swiper__heading">
            <h2>Выбери следующий ивент</h2>
            <!-- <div class="events__icon-container"> -->
                <UIIconButton icon="filter" />
            <!-- </div> -->
        </div>
        <Swiper />
    </main>
</template>

<script setup lang="ts">
import Swiper from '@/components/Swiper.vue'
import UIIconButton from '@/components/UI/UIIconButton.vue';
</script>


<style lang="scss" scoped>
.swiper {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
    flex-grow: 1;
    padding-bottom: calc(var(--tg-safe-area-inset-bottom) + $menu-height + $spacing-xl);

    &>* {
        // flex-shrink: 0;
    }
}
</style>