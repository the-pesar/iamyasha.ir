<script lang="ts" setup>
import Post from "./Post.vue";
import { data } from '../../../src/posts/posts.data'

const previewPosts = data.filter((_, i) => i < 3)
</script>

<template>
    <section>
        <Post v-for="post in previewPosts" :key="post.url" ...post="post" />
    </section>
</template>

<style>
section {
    margin-top: 50px;
}
</style>