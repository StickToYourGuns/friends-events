<template>
    <section class="content__section">
        <h2 class="users__heading">{{ label }}</h2>
        <div ref="usersDropdown" class="users" v-if="participants" :style="usersStyle">
            <span v-if="!participants.length" class="users__empty">Бля ну пока никак</span>

            <Chevron v-if="participants && participants.length" class="users__button-expand" @click="expandUsers"
                :class="{ rotated: usersExpanded }" />

            <div v-if="!usersExpanded" v-for="(participant, index) in visibleUsers" :key="participant.id"
                :class="['users__user', 'users__user--row', { 'users__user--not-first': index !== 0 }]">
                <img class="users__image" :style="{ 'z-index': 5 - index }" :src="participant.photo_url"
                    :alt="participant.username">
            </div>
            <transition name="more">
                <span v-if="remainingUsers > 0 && !usersExpanded" class="users__more">
                    + {{ remainingUsers }} more
                </span>
            </transition>

            <div v-if="usersExpanded" v-for="(participant, index) in participants" :key="participant.id"
                class="users__user">
                <img class="users__image" :src="participant.photo_url" :alt="participant.username">
                <span class="users__username">{{ participant.username }} </span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from "vue";
import type { Participant, Friend } from '@/types'
import Chevron from '@/assets/images/icons/chevron.svg'

const props = defineProps<{
    participants: Participant[] | Friend[],
    label: string
}>()

const usersDropdown = ref<HTMLElement | null>(null)
const maxHeight = ref('')

const usersExpanded = ref<any>(false);

const expandUsers = async () => {
    usersExpanded.value = !usersExpanded.value

    await nextTick()
    const el = usersDropdown.value
    if (!el) return

    if (usersExpanded.value) {
        // плавное раскрытие
        const scrollHeight = el.scrollHeight
        maxHeight.value = scrollHeight + 'px'
    } else {
        // сворачивание
        maxHeight.value = el.scrollHeight + 'px'
        await nextTick()
        maxHeight.value = '56px'
    }
}

const visibleUsers = computed(() => {
    return props.participants?.slice(0, 4) || [];
});

const remainingUsers = computed(() => {
    return props.participants?.length > 4 ? props.participants.length - 4 : 0;
});

const usersStyle = computed(() => {
    return {
        flexDirection: usersExpanded.value ? 'column' : 'row',
        alignItems: usersExpanded.value ? 'flex-start' : 'center',
        height: maxHeight.value
    };
});
</script>

<style scoped lang="scss">
.users {
    position: relative;
    display: flex;
    row-gap: $spacing-xs;
    padding: $spacing-xs;
    border: 1px solid $color-text-50;
    border-radius: 27px;
    transition: height 1s ease;
    overflow: hidden;
    width: 100%;

    &__heading {
        margin-bottom: $spacing-s;
    }

    &__user {
        height: 100%;
        display: flex;
        gap: 10px;
        align-items: center;

        &--row {
            align-items: flex-start;

            &.users__user--not-first {
                margin-left: -$spacing-xs;
            }
        }
    }

    &__more {
        margin-left: $spacing-xs;
    }

    &__image {
        height: $avatars-size-m;
        width: $avatars-size-m;
        border-radius: 50%;
        object-fit: cover;
    }

    &__username {
        margin-top: 5px;
    }

    &__button-expand {
        fill: $color-primary;
        position: absolute;
        // background-color: $color-opacitygrey;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s ease;
        // transform: rotate(180deg);
        z-index: 1;
        right: 10px;

        &.rotated {
            transform: rotate(270deg);
        }

        &:active {
            backdrop-filter: contrast(50%);
        }
    }
}
</style>