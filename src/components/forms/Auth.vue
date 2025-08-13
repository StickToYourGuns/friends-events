<template>
    <div class="auth-form">
        <div class="auth-form__buttons">
            <Button label="Log In" @click="setForm('login')" :active="formType === 'login'" />
            <Button label="Sign Up" @click="setForm('signup')" :active="formType === 'signup'" />
        </div>
        <TransitionGroup name="list" tag="div" class="auth-form__inputs">
            <Input v-if="formType === 'signup'" label="Login" type="text" id="login" v-model="login" />
            <Input label="E-mail" type="email" id="email" v-model="email" />
            <Input label="Password" type="password" id="password" v-model="password" />
        </TransitionGroup>
        <div class="auth-form__submit">
            <Button label="Submit" @click="handleSubmit" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Input from "@/components/UI/Input.vue";
import Button from "@/components/UI/Button.vue";
import { useEventStore } from "@/store/eventStore.js";

const eventStore = useEventStore();
const login = ref('');
const email = ref('');
const password = ref('');
const formType = ref('login');
const notification = computed(() => eventStore.notifications);

const setForm = (type) => {
    switch (type) {
        case 'login':
            formType.value = 'login';
            break;
        case 'signup':
            formType.value = 'signup';
            break;
    }
};

const handleSubmit = async () => {
    if (formType.value === 'login') {
        const payload = {
            email: email.value,
            password: password.value
        }
        await eventStore.fetchData('post', 'auth', 'login', payload);
        notification.value.length ? null : eventStore.toggleModal('close');
    } else if (formType.value === 'signup') {
        const payload = {
            email: email.value,
            password: password.value,
            login: login.value
        }
        await eventStore.fetchData('post', 'auth', 'register', payload);
        notification.value.length ? null : eventStore.toggleModal('close');
    }
}

</script>

<style lang="scss" scoped>
.auth-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__buttons {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 100px;
    }

    &__submit {
        display: flex;
        justify-content: center;
        margin-top: auto;
    }
}

.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease-out;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>