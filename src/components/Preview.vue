<template>
    <div class="preview"
        :style="{ 'backgroundImage': `url(${event.image})`, height: previewHeight, transition: transition ? '.3s ease' : 'none' }">
        <div class="preview__content">
            <h1 class="preview__title">{{ event.title }}</h1>

            <div class="preview__secondary">
                <div class="preview__secondary--block">
                    <img class="preview__secondary--img" src="@/assets/images/geo.svg" alt="">
                    <span class="preview__secondary--info">{{ event.location }}</span>
                </div>
            </div>

            <div class="preview__secondary">
                <div class="preview__secondary--block">
                    <img class="preview__secondary--img" src="@/assets/images/clock.svg" alt="">
                    <span class="preview__secondary--info">{{ dateFormatter(event.date, 'time') }}</span>
                </div>
                <div class="preview__secondary--block">
                    <img class="preview__secondary--img" src="@/assets/images/calendar.svg" alt="">
                    <span class="preview__secondary--info">{{ dateFormatter(event.date, 'date') }}</span>
                </div>
                <div class="preview__secondary--block">
                    <img class="preview__secondary--img" src="@/assets/images/weather-sun.svg" alt="">
                    <span class="preview__secondary--info">{{ event.weather }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
    event: {
        type: Object,
        required: true
    }
})

const scroll = ref(0)
let previewMinimized = ref(false)
const previewHeight = ref("70dvh");
let transition = ref(true)
let startY = 0;
const valueToMinimzie = 300

const dateFormatter = (isoString, type) => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    if (type === 'time') {
        return `${hours}:${minutes}`;
    } else if (type === 'date') {
        return `${day} ${months[month]}`;
    }
};

const handleTouchStart = (event) => {
    startY = event.touches[0].clientY;
    transition.value = false;
};

const handleTouchMove = (event) => {
    const currentY = event.touches[0].clientY;
    scroll.value = startY - currentY
    console.log(scroll.value);
};

const handleTouchEnd = () => {
    console.log('scroll: ' + scroll.value + ', Minimized: ' + previewMinimized.value);
    if ((!previewMinimized.value && scroll.value > 0 && scroll.value < valueToMinimzie / 2) || (previewMinimized.value && scroll.value <= -(valueToMinimzie / 2))) {
        console.log('разворачиваем');

        previewHeight.value = "70dvh";
        previewMinimized.value = false;
    } else if ((!previewMinimized.value && scroll.value >= valueToMinimzie / 2) || (previewMinimized.value && scroll.value < 0 && scroll.value > -(valueToMinimzie / 2))) {
        console.log('сворачиваем');

        previewHeight.value = "20dvh";
        previewMinimized.value = true;
    }
    transition.value = true;
};

watch(scroll, (newScroll) => {
    if (!previewMinimized.value && newScroll > 0) {
        previewHeight.value = `calc(70dvh - ${newScroll}px)`
    }
    else if (previewMinimized.value && newScroll < 0) {
        previewHeight.value = `calc(20dvh - ${newScroll}px)`
    }
});

watch(previewMinimized, (isMinimized) => {
    if (!isMinimized) {
        document.body.classList.add("no-scroll");
    } else {
        setTimeout(() => {
            document.body.classList.remove("no-scroll");
        }, 100);
    }
});


onMounted(() => {
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    document.body.classList.add("no-scroll");
});

onUnmounted(() => {
    window.removeEventListener("touchstart", handleTouchStart);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/preview.scss'
</style>