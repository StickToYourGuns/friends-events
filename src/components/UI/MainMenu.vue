<template>
    <div class="menu">
        <div class="menu__side">
            <button class="menu__button">
                <img src="@/assets/images/chevron.svg" style="transform: rotate(180deg)" @click="goBack">
            </button>
            <button class="menu__button">
                <img src="@/assets/images/view-list.svg" @click="handleClick" alt="">
            </button>
        </div>
        <div class="menu__side">
            <button class="menu__button">
                <img src="@/assets/images/people.svg" alt="">
            </button>
            <button class="menu__button">
                <img src="@/assets/images/person.svg" alt="">
            </button>
        </div>
    </div>
    <button class="menu__button add">
        <img src="@/assets/images/plus.svg" alt="">
    </button>
</template>

<script setup>
const goBack = () => {
    window.history.back();
};

const handleClick = (event) => {
    const button = event.currentTarget;

    button.classList.add('clicked'); // Добавляем класс для анимации

    // Удаляем класс после завершения анимации
    button.addEventListener('animationend', () => {
        button.classList.remove('clicked');
    }, { once: true });
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/UI/mainMenu.scss'
</style>