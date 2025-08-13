<template>
    <div class="loader">
        <div class="loader--img"></div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(1px);

    &--img {
        width: 50px;
        padding: 8px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: $color-opacitygrey;
        --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
        -webkit-mask: var(--_m);
        mask: var(--_m);
        -webkit-mask-composite: source-out;
        mask-composite: subtract;
        animation: spin 1s infinite linear;
    }
}

@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}
</style>