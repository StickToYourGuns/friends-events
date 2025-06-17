<template>
    <div class="input" :class="isValid">
        <label for="">{{ label }}</label>
        <div class="input__string">
            <input :class="{ 'grey': isGrey }" class="input__content" :id="id" :type="typeValidate"
                :placeholder="placeholder" :value="localValue" @input="updateValue($event.target.value)"
                autocomplete="off" />
            <img v-if="type === 'password'" @click="togglePassword" :src="toggleEye" alt="">

        </div>
        <div class="input__hint" :class="{ 'active': isActive }" v-text="hint">
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import EyeFill from "@/assets/images/eye-fill.svg";
import EyeSlashFill from "@/assets/images/eye-slash-fill.svg";

const emit = defineEmits(["update:modelValue"]);

const passwordVisible = ref(false);

const togglePassword = () => passwordVisible.value = !passwordVisible.value;
const toggleEye = computed(() => passwordVisible.value ? EyeSlashFill : EyeFill)

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: false,
    },
    modelValue: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    required: {
        type: Boolean,
        required: false,
    },
});

const typeValidate = computed(() => {
    if (props.type === 'password') {
        return passwordVisible.value ? 'text' : 'password'
    }
})

const updateValue = (value) => {
    // localValue.value = value;
    // emit("isModified");
    emit("update:modelValue", value);
};
</script>

<style lang="scss">
.input {
    width: 100%;
    border-bottom: 1px solid #000000;

    &__string {
        width: 100%;
        display: flex;
    }

    &__content {
        width: 100%;
        border: none;
    }
}
</style>