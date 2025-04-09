<template>
    <Header />

    <Filters />

    <section class="events">
        <Stack :events="friendsEvents" title="Friends Events" @openEvent="openEvent" />
        <Stack :events="myEvents" title="Events with me" />
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import Header from "@/components/Header.vue";
import Filters from "@/components/Filters.vue";
import Stack from "@/components/Stack.vue";

const router = useRouter();

const friendsEvents = ref([
    {
        id: 1,
        title: 'MTB party',
        date: '15.04.2025',
        location: 'Virgin, USA',
        image: 'https://media.trekbikes.com/image/upload/w_1200/b300_mtbMarqueeImage'
    },
    {
        id: 2,
        title: 'Paintball w/ guys',
        date: '08.05.2025',
        location: 'Prypiat, Ukraine',
        image: 'https://eu-assets.simpleview-europe.com/lillehammer/imageresizer/?image=%2Fdmsimgs%2FOlympiaparken_paintball_foto_daniel_nrodby-263_1335521767.jpg&action=ProductDetail2020'
    },
    {
        id: 3,
        title: 'Hiking',
        date: '20.05.2025',
        location: 'Nordfjord, Norway',
        image: 'https://www.grisport.co.uk/blog/wp-content/uploads/2021/07/hiking-1024x684.jpeg'
    },
    {
        id: 4,
        title: 'Awesome carting',
        date: '01.06.2025',
        location: 'Nurburgring, Germany',
        image: 'https://kartings.ru/wp-content/uploads/2020/01/sitw2.jpg'
    },
])

const myEvents = ref([
    {
        id: 5,
        title: 'garage barbeque',
        date: '02.05.2025',
        location: 'Fryazino, Russia',
        image: 'https://nauglax.ru/wp-content/uploads/2022/10/5.jpg'
    },
    {
        id: 6,
        title: 'Parkour training',
        date: '17.05.2025',
        location: 'Shelkovo, Russia',
        image: 'https://media.foodspring.com/magazine/public/uploads/2022/06/parkour.gif'
    },
    {
        id: 1,
        title: 'MTB party',
        date: '20.05.2025',
        location: 'Virgin, USA',
        image: 'https://media.trekbikes.com/image/upload/w_1200/b300_mtbMarqueeImage'
    },
])

// const testEvents = ref([
//     {
//         title: 'garage barbeque',
//         date: '02.05.2025',
//         location: 'Fryazino, Russia',
//         image: 'https://nauglax.ru/wp-content/uploads/2022/10/5.jpg'
//     },
//     {
//         title: 'Parkour training',
//         date: '17.05.2025',
//         location: 'Shelkovo, Russia',
//         image: 'https://media.foodspring.com/magazine/public/uploads/2022/06/parkour.gif'
//     },
// ])

// const oneEvent = ref([
//     {
//         title: 'garage barbeque',
//         date: '02.05.2025',
//         location: 'Fryazino, Russia',
//         image: 'https://nauglax.ru/wp-content/uploads/2022/10/5.jpg'
//     },
// ])

const openEvent = (id) => {
    router.push(`/event/${id}`);
}
</script>

<style lang="scss">
// @import "@/assets/styles/main.scss";
.events {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
    gap: 20px;
}
</style>