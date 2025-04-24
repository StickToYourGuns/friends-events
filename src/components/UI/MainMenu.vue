<template>
    <div class="menu">
        <button class="menu__button">
            <img src="@/assets/images/chevron.svg" style="transform: rotate(180deg)" @click="goBack">
        </button>
        <button class="menu__button">
            <img src="@/assets/images/view-list.svg" alt="">
        </button>
        <button class="menu__button">
            <img src="@/assets/images/plus.svg" alt="">
        </button>
        <button class="menu__button">
            <img src="@/assets/images/people.svg" alt="">
        </button>
        <button class="menu__button">
            <img src="@/assets/images/person.svg" alt="">
        </button>
    </div>
    <button class="menu__button add">
        <img src="@/assets/images/plus.svg" alt="">
    </button>
</template>

<script setup>
const goBack = () => {
    window.history.back();
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/UI/mainMenu.scss'
</style>