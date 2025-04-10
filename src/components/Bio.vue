<template>
    <div class="bio">

        <UsersDropdown :users="event.participants" title='Participants' />

        <h2 class="bio__title">Description</h2>
        <span class="bio__description">{{ event.description }}</span>
    </div>
</template>

<script setup>
import UsersDropdown from "@/components/UI/UsersDropdown.vue";

const props = defineProps({
    event: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/bio.scss'
</style>