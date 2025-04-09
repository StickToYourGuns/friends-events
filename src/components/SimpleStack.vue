<template>
    <div class="stack" @mousedown="startSwipe" @mouseup="endSwipe" @touchstart="startSwipe" @touchend="endSwipe"
        @touchmove="handleMove" @mousemove="handleMove">
        <div v-for="(event, index) in events" class="stack__card"
            :style="{ 'backgroundImage': `url(${event.image})`, 'zIndex': index * -1 }"
            :class="{ 'active': index === activeCard, 'next': index >= activeCard + 1, 'hidden': index < activeCard }"
            :ref="setRef">
            <span class="stack__title">{{ event.title }}</span>
            <span class="stack__location">{{ event.location }}</span>
            <span class="stack__date">{{ event.date }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

let activeCard = ref(0);


const events = ref([
    {
        title: 'Пейнтбол с пацанами',
        date: '21.12.2012',
        location: 'Пушкино',
        image: 'https://eu-assets.simpleview-europe.com/lillehammer/imageresizer/?image=%2Fdmsimgs%2FOlympiaparken_paintball_foto_daniel_nrodby-263_1335521767.jpg&action=ProductDetail2020'
    },
    {
        title: 'Невероятное событие',
        date: '21.12.2012',
        location: 'Москва',
        image: 'https://www.magrudereye.com/wp-content/uploads/2018/08/Blurred-vision.jpeg'
    },
    {
        title: 'Невероятное событие',
        date: '21.12.2012',
        location: 'Москва',
        image: 'https://cdn.pixabay.com/photo/2016/11/18/14/12/blurred-1834820_640.jpg'
    },
])
</script>

<style lang="scss" scoped>
.stack {
    height: 300px;
    width: 100%;
    display: flex;
    overflow-x: scroll;

    &__card {
        width: 80%;
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        backdrop-filter: blur(10px);
        border-radius: 20px;
        left: 100px;
        position: absolute;
        
        display: flex;
        flex-direction: column;
        padding: 20px;
        flex-shrink: 0; 

        &.active {
            left: 0;
        }

        &.next {
            left: 100px;
        }

        &.hidden {
            display: none;
        }
    }

    &__title {
        font-size: 20px;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        max-width: 100%;
        filter: drop-shadow(1px 1px black);
    }
}
</style>