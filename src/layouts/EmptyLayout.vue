<template>
    <div class="content-wrapper content-wrapper--empty">
        <div class="events__nav-buttons">
            <button @click="goBack" class="events__nav-button">
                <Chevron class="events__nav-icon" />
            </button>
            <button class="events__nav-button">
                <Heart class="events__nav-icon" />
            </button>
        </div>
        <slot />

    </div>
</template>

<script setup lang="ts">
import Chevron from '@/assets/images/icons/chevron.svg'
import Heart from '@/assets/images/icons/heart.svg'
import { useRouter } from "vue-router";
const router = useRouter()
const goBack = () => router.back()
</script>