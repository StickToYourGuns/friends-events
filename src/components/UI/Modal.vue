<template>
    <div @click.stop="closeModal" class="modal" v-show="modalVisible">
        <div @click.stop class="modal__container">
            <component :is="formSelect" />
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useEventStore } from "@/store/eventStore.js";

import Auth from "@/components/forms/Auth.vue";

const eventStore = useEventStore();

const formSelect = computed(() => {
    switch (modalType.value) {
        case "auth":
            return Auth;
    }
});

const closeModal = () => {
    eventStore.toggleModal('close')
};

const modalVisible = computed(() => eventStore.modalVisible);
const modalType = computed(() => eventStore.modalType);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/UI/modal.scss'
</style>