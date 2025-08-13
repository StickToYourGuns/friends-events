<template>
    <div class="notifications">
        <transition-group name="notification">
            <div v-for="notification in notifications" :key="notification" class="notifications__notification"
                :class="notification.type">
                {{ notification.notification }}
            </div>
        </transition-group>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useEventStore } from '@/store/eventStore'

const eventStore = useEventStore()
const notifications = computed(() => eventStore.notifications)
</script>

<style lang="scss" scoped>
.notifications {
    position: fixed;
    bottom: 50px;
    right: 24px;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__notification {
        padding: 12px 24px;
        border-radius: 8px;
        color: white;
        min-width: 280px;
        max-width: 400px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        &.success {
            background-color: #4CAF50;
        }

        &.error {
            background-color: #FF4444;
        }

        &.warning {
            background-color: #FFB002;
        }

        &.info {
            background-color: #2196F3;
        }
    }
}

.notification-enter-active,
.notification-leave-active {
    transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>
