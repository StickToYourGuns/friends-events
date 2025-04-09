<template>
    <div class="filters">
        <Dropdown :display="currentMonth" :values="months" @selectDropdownValue="selectDropdownValueMonth" />
        <Dropdown :display="currentFilter" :values="filters" @selectDropdownValue="selectDropdownValueFilter" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from '@/components/UI/Dropdown.vue';


const months = ref([
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
])
const filters = ref([
    "Closest", "Huge", "Cost"
])

let currentMonth = ref('Month');
let currentFilter = ref('Closest');

const selectDropdownValueMonth = (newValue) => {
    currentMonth.value = newValue;
};
const selectDropdownValueFilter = (newValue) => {
    currentFilter.value = newValue;
};
</script>

<style lang="scss" scoped>
.filters {
    padding: 20px;
    display: flex;
    gap: 10px;
}
</style>