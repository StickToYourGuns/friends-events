<template>
    <div class="users__container">
        <h2>{{ title }}</h2>
        <div class="users" :style="usersStyle" @click="expandUsers">

            <span v-if="!users.length" class="users__empty">{{ whyEmpty }}</span>

            <img v-if="users.length" src="@/assets/images/chevron.svg" class="users__button--expand"
                @click="expandUsers" :class="{ rotated: usersExpanded }">

            <div v-if="!usersExpanded" v-for="(user, index) in visibleUsers" :key="user.id" class="users__block">
                <img class="users__image" :src="user.avatar" :alt="user.nickname">
            </div>
            <span v-if="remainingUsers > 0 && !usersExpanded" class="users__more">
                + {{ remainingUsers }} more
            </span>

            <div v-if="usersExpanded" v-for="(user, index) in users" :key="user.id" class="users__block">
                <img class="users__image" :src="user.avatar" :alt="user.nickname">
                <span class="users__nickname">{{ user.nickname }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    users: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

let usersExpanded = ref(false);

const whyEmpty = computed(() => {
    console.log(props.type);

    switch (props.title) {
        case 'Friends':
            return 'The user has not added any friends yet';
        case 'Participiants':
            return 'No one is participating in the event yet';
    }
})

const expandUsers = () => {
    if (event.target === event.currentTarget) {
        usersExpanded.value = !usersExpanded.value;
    }
}

const visibleUsers = computed(() => {
    return props.users?.slice(0, 5) || [];
});

const remainingUsers = computed(() => {
    return props.users?.length > 5 ? props.users.length - 5 : 0;
});

const usersStyle = computed(() => {
    return {
        flexDirection: usersExpanded.value ? 'column' : 'row',
        alignItems: usersExpanded.value ? 'flex-start' : 'flex-start',
        height: usersExpanded.value ? `${props.users.length * 40 - 15}px` : '50px',
    };
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/UI/usersDropdown.scss'
</style>