<template>
    <div class="profile"
        :style="{ 'backgroundImage': `url(${user.avatar})`, height: profileHeight, transition: transition ? '.3s ease' : 'none' }">
        <div class="profile__content">
            <h1 class="profile__nickname">{{ user.nickname }}</h1>

            <div class="profile__secondary">
                <!-- <div class="profile__secondary--block"> -->
                    <a v-if="user.telegram_id" :href="`https://t.me/${user.telegram_id}`" target="_blank"
                        rel="noopener noreferrer" class="profile__secondary--block">
                        <img class="profile__secondary--img" src="@/assets/images/telegram.svg" alt="Telegram">
                        <span class="profile__secondary--info">{{ user.telegram_id }}</span>
                    </a>
                <!-- </div> -->
                <!-- <div class="profile__secondary--block"> -->
                    <a v-if="user.instagram_id" :href="`https://instagram.com/${user.instagram_id}`" target="_blank"
                        rel="noopener noreferrer" class="profile__secondary--block">
                        <img class="profile__secondary--img" src="@/assets/images/instagram.svg" alt="Instagram">
                        <span class="profile__secondary--info">{{ user.instagram_id }}</span>
                    </a>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const scroll = ref(0)
let profileMinimized = ref(false)
const profileHeight = ref("50dvh");
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
    console.log('scroll: ' + scroll.value + ', Minimized: ' + profileMinimized.value);
    if ((!profileMinimized.value && scroll.value > 0 && scroll.value < valueToMinimzie / 2) || (profileMinimized.value && scroll.value <= -(valueToMinimzie / 2)) || (!profileMinimized.value && scroll.value < 0)) {
        console.log('разворачиваем');

        profileHeight.value = "50dvh";
        profileMinimized.value = false;
    } else if ((!profileMinimized.value && scroll.value >= valueToMinimzie / 2) || (profileMinimized.value && scroll.value < 0 && scroll.value > -(valueToMinimzie / 2))) {
        console.log('сворачиваем');

        profileHeight.value = "20dvh";
        profileMinimized.value = true;
    }
    transition.value = true;
};

watch(scroll, (newScroll) => {
    if (!profileMinimized.value) {
        profileHeight.value = `calc(50dvh - ${newScroll}px)`
    }
    else if (profileMinimized.value && newScroll < 0) {
        profileHeight.value = `calc(20dvh - ${newScroll}px)`
    }
});

watch(profileMinimized, (isMinimized) => {
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
@import '@/assets/styles/components/profile.scss'
</style>