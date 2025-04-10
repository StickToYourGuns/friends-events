<template>
    <div class="secondary">
        <UsersDropdown :users="user.friends" title="Friends" />

        <Stack :events="user.user_events" title="User events" @openEvent="openEvent" />
    </div>
</template>

<script setup>
import UsersDropdown from "@/components/UI/UsersDropdown.vue";
import Stack from "@/components/Stack.vue";

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

console.log(props.user);

</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/profile.scss'
</style>