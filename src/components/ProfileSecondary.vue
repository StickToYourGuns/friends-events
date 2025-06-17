<template>
    <div class="secondary">
        <UsersDropdown :users="user.friends" title="Friends" />

        <Stack :events="user.user_events" title="User events" @openEvent="openEvent" />
    </div>
</template>

<script setup>
import UsersDropdown from "@/components/UI/UsersDropdown.vue";
import { useRouter } from 'vue-router';
import Stack from "@/components/Stack.vue";

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const router = useRouter();

const openEvent = (id) => {
    router.push({
        path: `/event/${id}`,
    });
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/profile.scss'
</style>