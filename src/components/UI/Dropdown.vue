<template>
    <div class="dropdown" ref="dropdown" :class="isValid">
        <div class="dropdown__title" @click="toggleDropdown">
            <div class="dropdown__title--text" :class="{ 'grey': isGrey }">{{ display
            }}
            </div>
            <img class="dropdown__title--img" :class="{ rotated: isRotated }" src="@/assets/images/chevron.svg" />
        </div>
        <transition name="fade">
            <ul class="dropdown__list" style="border-top: transparent;" :class="isValid" @click="toggleDropdown"
                v-show="dropdownVisible">
                <li @click="selectValue(value)" class="dropdown__list--item" v-for="value in values" :key="value">
                    {{ value }}
                </li>
            </ul>
        </transition>
        <!-- <img v-show="clearButton && isChanged" @click="clickClearButton" class="dropdown--clearFilter"
            src="@/assets/x-circle.svg" alt=""> -->
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";

const emit = defineEmits(["update", 'isModified', "same"]);

const dropdownVisible = ref(false);
const isRotated = ref(false);
const dropdown = ref(null);

const props = defineProps({
    values: {
        type: Array,
        required: true,
    },
    display: {
        type: String,
        required: true,
    },
    close: {
        type: Boolean,
        required: false,
    },
    required: {
        type: Boolean,
        required: false,
    },
    clearButton: {
        type: Boolean,
        required: false,
    }
});

const initialValue = ref(props.display);
const localValue = ref(props.display);
const isChanged = ref(false);
const isGrey = computed(() => (initialValue.value === localValue.value));

const isValid = computed(() => {
    if (props.required) {
        if (!isChanged.value) {
            return 'invalid'
        }
    }
})

const toggleDropdown = () => {
    isRotated.value = !isRotated.value;
    dropdownVisible.value = !dropdownVisible.value;
};

const closeDropdown = () => {
    isRotated.value = false;
    dropdownVisible.value = false;
}

const selectValue = (value) => {
    emit("selectDropdownValue", value);
    localValue.value = value;
};

const clickClearButton = () => {
    emit("clickClearButton");
    localValue.value = initialValue.value;
};

const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
        closeDropdown()
    }
};

watch(
    () => props.close,
    (newValue) => {
        if (newValue) {
            closeDropdown();
        }
    }
);

watch(
    () => props.display,
    (newValue) => {
        if (initialValue.value === undefined) initialValue.value = newValue;
        localValue.value = newValue;
        if (localValue.value !== initialValue.value) {
            emit("isModified");
            isChanged.value = true;
        } else {
            emit("same");
            isChanged.value = false;
        }
    }
);

onMounted(() => {
    document.addEventListener("mousedown", handleClickOutside);
});
onBeforeUnmount(() => {
    document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<style lang="scss" scoped>
.dropdown {
    width: 100px;
    min-width: 50px;
    height: 40px;
    position: relative;
    border: 1px solid $color-opacitygrey;
    transition: .3s;
    border-radius: 20px;
    padding: 5px;


    &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: .3s;
        height: 100%;

        &--text {
            padding: 5px;
            color: $color-white;
        }

        &--img {
            transition: .3s;
            transform: rotate(90deg);
            filter: invert(100);

            &.rotated {
                transform: rotate(270deg);
            }
        }

        &:active {
            -webkit-tap-highlight-color: transparent;
        }
    }

    &__list {
        position: absolute;
        left: -1px;
        width: calc(100% + 2px);
        display: flex;
        flex-direction: column;
        top: 110%;
        background: white;
        list-style: none;
        line-height: 1rem;
        background-color: $color-opacityblack;
        backdrop-filter: blur(10px);
        overflow: hidden;
        border-radius: 20px;
        z-index: 12;

        &--item {
            padding: 10px 10px;
            transition: 0.3s;
            cursor: pointer;
            color: $color-white;

            &:hover {
                // background-color: $color-black;
                // color: $color-white;
            }
        }
    }

    &--clearFilter {
        position: absolute;
        // background-color: $color-background;
        height: 39px;
        width: 30px;
        right: -30px;
        top: 0;
        cursor: pointer;
        padding: 5px;
    }
}

.invalid {
    // border: 1px solid $color-purple;
}

.grey {
    color: grey;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateY(-10px); /* Сдвиг вверх */
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: translateY(0); /* Возвращение в исходное положение */
}
</style>