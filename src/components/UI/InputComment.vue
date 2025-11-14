<template>
    <div class="input input--comment">
        <textarea v-model="localValue" class="input__textarea" autocomplete="off" rows="1" />
        <img v-if="localValue.trim()" class="input__icon--single" :src="telegram" alt="Отправить" @click="sendMessage">
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import telegram from '@/assets/images/icons/telegram.svg?url'

const props = defineProps<{
    modelValue?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'send', message: string): void
}>()

const localValue = computed({
    get: () => props.modelValue ?? '',
    set: (value) => emit('update:modelValue', value)
})

const sendMessage = () => {
    const text = localValue.value.trim()
    if (!text) return
    emit('send', text)
    localValue.value = ''
}
</script>