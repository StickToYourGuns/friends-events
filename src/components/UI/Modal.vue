<template>
    <transition name="modal-slide">
        <div @click.stop="toggleModal('hide')" class="modal" :class="modalVisible" v-if="modalVisible !== 'close'">
            <div @click.stop class="modal__container" :class="modalVisible"
                :style="{ bottom: modalVisible === 'open' ? `-${translateY}px` : `${translateY}px` }"
                @touchstart="startSwipe" @touchmove="trackSwipe" @touchend="endSwipe">
                <component :is="formSelect" />
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, computed } from "vue";
import { useEventStore } from "@/store/eventStore.js";

import Auth from "@/components/forms/Auth.vue";

const eventStore = useEventStore();

const formSelect = computed(() => {
    switch (modalType.value) {
        case "auth":
            return Auth;
    }
});

const toggleModal = (action) => {
    eventStore.toggleModal(action)
};

const modalVisible = computed(() => eventStore.modalVisible);
const modalType = computed(() => eventStore.modalType);

// swipe
const startY = ref(0);
const translateY = ref(0);
const threshold = 150;
let animationFrame = null;

const startSwipe = (e) => {
    startY.value = e.touches[0].clientY;
    translateY.value = 0;
};

const trackSwipe = (e) => {
    if (modalVisible.value === 'open') {
        const deltaY = e.touches[0].clientY - startY.value;
        if (deltaY > 0) {
            e.preventDefault();
            if (animationFrame) cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(() => {
                translateY.value = deltaY;
            });
            console.log(startY.value, translateY.value, deltaY);
        }
    } else {
        const deltaY = startY.value - e.touches[0].clientY;
        console.log('startY', startY.value, 'e.touches[0].clientY', e.touches[0].clientY, 'translateY.value', translateY.value);
        if (deltaY > 0) {
            e.preventDefault();
            if (animationFrame) cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(() => {
                translateY.value = deltaY;
            });
        }
    }
};

const endSwipe = () => {
    cancelAnimationFrame(animationFrame);
    if (modalVisible.value === 'open') {
        if (translateY.value > threshold) {
            toggleModal('hide');
        }
    } else {
        if (translateY.value > threshold) {
            toggleModal('open');
        }
    }
    translateY.value = 0;
    startY.value = 0;
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/UI/modal.scss'
</style>