<template>
    <div class="content-wrapper">
        <Transition name="header">
            <Header />
        </Transition>
        <slot />
        <Transition name="menu">
            <MainMenu v-if="!keyboardOpen" />
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Header from "@/components/Header.vue";
import MainMenu from "@/components/UI/MainMenu.vue"
import { useServiceStore } from '@/stores/serviceStore.ts'
const serviceStore = useServiceStore()
const keyboardOpen = computed(() => serviceStore.keyboardOpen)
</script>