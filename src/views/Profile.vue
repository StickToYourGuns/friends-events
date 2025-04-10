<template>
  <img src="@/assets/images/chevron.svg" class="event__button--back" @click="goBack">

  <ProfileMain :user="user" />

  <ProfileSecondary :user="user" />
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from 'vue-router';
import { useEventStore } from '@/store/eventStore';
import ProfileMain from "@/components/ProfileMain.vue";
import ProfileSecondary from "@/components/ProfileSecondary.vue";

const route = useRoute();
const eventStore = useEventStore();

const goBack = () => {
  window.history.back();
};

const user = computed(() => eventStore.user);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/event.scss'
</style>