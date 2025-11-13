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
            <img class="comments__plus" :src="plus" alt="Добавить комментарий">
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Comment } from '@/types'
// import { useDateParser } from '@/services/useDate'
import plus from "@/assets/images/icons/plus.svg?url"

const props = defineProps<{
    comments: Comment[],
    label: string
}>()
</script>

<style scoped lang="scss"></style>