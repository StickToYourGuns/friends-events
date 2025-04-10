<template>
    <!-- @mousedown="startSwipe" @mouseup="endSwipe" @touchstart="startSwipe" @touchend="endSwipe" @touchmove="handleMove" @mousemove="handleMove" -->
    <div class="event-container">
        <h2>{{ title }}</h2>

        <div class="stack">
            <div v-if="events.length >= 1" v-for="(event, index) in events" @click="openEvent(event.id)"
                class="stack__card" :style="{ 'backgroundImage': `url(${event.image})` }"
                :class="{ 'active': index === activeCard, 'next': index === nextCard, 'prev': index === prevCard && events.length > 2, 'alone': events.length === 1 }">
                <div class="stack__content">
                    <span class="stack__title">{{ event.title }}</span>
                    <div class="stack__secondary">
                        <span class="stack__location">{{ event.location }}</span>
                        <span class="stack__date">{{ dateFormatter(event.date) }}</span>
                    </div>
                </div>
            </div>

            <div v-if="events.length > 1" class="stack__buttons" @click="switchCard('prev')">
                <img src="@/assets/images/chevron.svg" class="stack__buttons--button prev">
            </div>
            <div v-if="events.length > 1" class="stack__buttons" @click="switchCard('next')">
                <img src="@/assets/images/chevron.svg" class="stack__buttons--button next">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    events: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

const emits = defineEmits(['openEvent'])

let activeCard = ref(0);
let nextCard = ref(activeCard.value + 1);
let prevCard = ref(props.events.length - 1);

const switchCard = (direction) => {
    switch (direction) {
        case 'next':
            activeCard.value++;
            prevCard.value = activeCard.value - 1;
            nextCard.value++;
            if (prevCard.value < 0) prevCard.value = props.events.length - 1;
            if (activeCard.value >= props.events.length) activeCard.value = 0;
            if (nextCard.value >= props.events.length) nextCard.value = 0;
            break;
        case 'prev':
            activeCard.value--;
            nextCard.value--;
            prevCard.value--;
            if (prevCard.value < 0) prevCard.value = props.events.length - 1;
            if (activeCard.value < 0) activeCard.value = props.events.length - 1;
            if (nextCard.value < 0) nextCard.value = props.events.length - 1;
            break;
    }
    console.log(`active: ${activeCard.value}, next: ${nextCard.value}, prev: ${prevCard.value}`);
    // console.log(props.events.value.length);

}

const dateFormatter = (isoString) => {
    const months = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OKT", "NOW", "DEC"
    ];
    const date = new Date(isoString);
    const day = date.getUTCDate(); // Получаем день
    const month = date.getUTCMonth(); // Получаем месяц (0-11)

    return `${day} ${months[month]}`; // Форматируем в "DD MMM"
};

const openEvent = (id) => {
    console.log(id);

    emits('openEvent', id)
}
</script>

<style lang="scss" scoped>
.event-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
}

.stack {
    height: 20dvh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__card {
        width: calc(100% - 50px);
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 20px;
        position: absolute;
        left: 50px;
        transition: all .3s, opacity .6s;
        z-index: 1;
        opacity: 0;
        box-shadow: inset 0px 0px 20px 10px $color-opacityblack;

        &.active {
            left: 0;
            z-index: 3;
            opacity: 1;
        }

        &.next {
            filter: brightness(.5);
            z-index: 2;
            opacity: 1;
        }

        &.prev {
            left: -500px;
            z-index: 4;
            opacity: 0;
        }

        &.alone {
            width: 100%;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        backdrop-filter: blur(1px) brightness(.6);
        color: $color-white;
    }

    &__secondary {
        display: flex;
        justify-content: space-between;
        font-size: $font-size-s;
    }

    &__title {
        font-size: $font-size-l;
        font-weight: bold;
        text-transform: uppercase;
        max-width: 100%;
    }

    &__buttons {
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;

        &:active {

            .prev,
            .next {
                height: 22px;
                width: 22px;
                filter: brightness(3);
            }
        }

        &--button {
            background-color: $color-opacitygrey;
            border-radius: 50%;
            height: 20px;
            width: 20px;
            padding: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .2s ease;

            &.prev {
                transform: rotate(180deg);
            }

        }
    }
}

@keyframes prevCard {}
</style>