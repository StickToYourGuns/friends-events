<template>
    <div class="event-container" :style="{ alignItems: title === 'User events' ? 'flex-start' : null }">
        <h2>{{ title }}</h2>

        <transition-group name="events-loading">
            <div v-if="isLoading" class="stack">
                <Loader />
            </div>
            <div v-else class="stack" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
                <div v-if="events.length >= 1 && !isLoading" v-for="(event, index) in events"
                    @click="openEvent(event.id)" class="stack__card"
                    :style="{ 'backgroundImage': `url(${event.image})` }"
                    :class="{ 'active': index === activeCard, 'next': index === nextCard, 'prev': index === prevCard && events.length > 2, 'alone': events.length === 1 }">
                    <div class="stack__content">
                        <span class="stack__name">{{ event.name }}</span>
                        <div class="stack__secondary">
                            <span class="stack__location">{{ event.location_name }}</span>
                            <span class="stack__date">{{ dateFormatter(event.start_date) }}</span>
                        </div>
                    </div>
                </div>

                <div v-if="events.length > 1 && !isLoading" class="stack__buttons" @click="switchCard('prev')">
                    <img src="@/assets/images/chevron.svg" class="stack__buttons--button prev">
                </div>
                <div v-if="events.length > 1 && !isLoading" class="stack__buttons" @click="switchCard('next')">
                    <img src="@/assets/images/chevron.svg" class="stack__buttons--button next">
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useEventStore } from "@/store/eventStore";
import Loader from "@/components/UI/Loader.vue";

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

const eventStore = useEventStore();
const emits = defineEmits(['openEvent'])

const isLoading = computed(() => eventStore.isLoading);
let activeCard = ref(0);
let nextCard = ref(activeCard.value + 1);
let prevCard = ref(props.events.length - 1);

let startX = 0;
let endX = 0;

const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
};

const handleTouchEnd = (event) => {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) {
        switchCard('next');
    } else if (endX - startX > 50) {
        switchCard('prev');
    }
};

const switchCard = (direction) => {
    if (props.events.length <= 1) return
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

}

const dateFormatter = (isoString) => {
    const months = [
        "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OKT", "NOW", "DEC"
    ];
    const date = new Date(isoString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth();

    return `${day} ${months[month]}`;
};

const openEvent = (id) => {
    emits('openEvent', id)
}

onMounted(() => {
    console.log(props.events);
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/stack.scss'
</style>