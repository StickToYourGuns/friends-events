<template>
    <div class="input">
        <div class="input__icon-container">
            <MagnifierIcon class="input__icon" />
        </div>
        <input class="input__field input__field--search" type="text" name="search" placeholder="Поиск" :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" autocomplete="off">
        <div class="input__icon-container">
            <FilterIcon class="input__icon input__icon--white" fill="white" />
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