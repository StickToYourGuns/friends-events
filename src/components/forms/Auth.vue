<template>
    <div class="auth-form">
        <Input label="E-mail" type="email" id="email" v-model="email"/>
        <Input label="Password" type="password" id="password" v-model="password" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import Input from "@/components/UI/Input.vue";

const email = ref('')
const password = ref('')
</script>

<style lang="scss" scoped>
.auth-form {
    width: 100%;
}
</style>