<script lang="ts" setup>
import PostPreview from "../posts/preview.vue";
import { data } from '../../../../src/posts/posts.data'

const previewPosts = data.filter((_, i) => i < 3)
</script>

<template>
    <section>
        <PostPreview v-for="post in previewPosts" :key="post.url" ...post="post" />
    </section>
</template>

<style>
section {
    margin-top: 50px;
}
</style>