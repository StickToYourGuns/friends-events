<template>
    <Preview v-if="user" :image="user.photo_url" />
    <Content v-if="user" :content="user" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import type { FullUser } from '@/types'

import Preview from "@/components/Preview.vue";
import Content from "@/components/Content.vue";

const userStore = useUserStore();
const user = computed<FullUser | null>(() => userStore.fullUser);

const route = useRoute();
const userId = route.params.id;
</script>