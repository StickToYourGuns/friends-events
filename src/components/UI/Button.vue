<template>
    <button @click="handleClick" class="button" :class="{ 'active': active }">{{ label }}</button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: false
    }
});

const emits = defineEmits(["click"])

const handleClick = () => emits("click");
</script>

<style lang="scss">
@import "@/assets/styles/components/UI/button.scss";
</style>