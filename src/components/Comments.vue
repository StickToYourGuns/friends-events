<template>
    <section class="content__section">
        <h2 class="comments__heading">{{ label }}</h2>
        <div class="comments">
            <div v-for="comment in comments" class="comment">
                <img class="comment__image" :src="comment.photo_url" :alt="`Аватар ${comment.username}`">
                <div class="comment__content">
                    <div class="comment__main">
                        <span class="comment__username">{{ comment.username }}</span>
                        <span class="comment__text">{{ comment.text }}</span>
                    </div>
                    <span class="comment__time"> 3:40 </span>
                    <!-- <span class="comment__time">{{ useDateParser(comment.date) }}</span> -->
                </div>
            </div>
            <Transition name="fade" mode="out-in">
                <div v-if="!inputVisible" class="comments__input-container" key="plus">
                    <img class="comments__plus" :src="plus" @click="openInput" alt="Добавить комментарий">
                </div>
                <div v-else class="comments__input-container" key="comment">
                    <img class="comment__image" :src="user?.photo_url" @click="openInput" :alt="user?.username">
                    <InputComment v-model="commentText" />
                </div>
            </Transition>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Comment } from '@/types'
import { useUserStore } from '@/stores/userStore'
import InputComment from "@/components/UI/InputComment.vue";
// import { useDateParser } from '@/composables/useDate'
import plus from "@/assets/images/icons/plus.svg?url"
import type { FullUser } from '@/types'

const userStore = useUserStore()

const props = defineProps<{
    comments: Comment[],
    label: string
}>()

const inputVisible = ref(false)

const commentText = ref('')

const openInput = () => {
    inputVisible.value = !inputVisible.value
}

const user = computed<FullUser | null>(() => userStore.fullUser);
</script>

<style scoped lang="scss"></style>