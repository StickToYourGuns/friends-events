<template>
    <header class="header">
        <h1 class="header__title">My Events</h1>
        <img class="header__image" src="https://creativecloud.adobe.com/content/dam/2020/09/dsc20200922_profilepic_ht/profile-picture_960x540.jpg" alt="">
    </header>
</template>

<style lang="scss" scoped>
.header {
    height: 100px;
    width: 100%;
    background-color: #00000050;
    box-shadow: 5px 5px 10px $color-opacityblack;
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(10px);
    border-radius: 0 0 20px 20px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
        
    }

    &__image {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>