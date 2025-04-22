<template>
    <div>
        <p v-if="user">Привет, {{ user.name }}!</p>
        <p v-else>Гость</p>
    </div>
</template>

<script>
export default {
    props: {
        user: Object,
    }
}
</script>
