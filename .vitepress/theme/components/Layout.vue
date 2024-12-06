<script setup lang="ts">
import { useData } from 'vitepress'

import Navbar from './Navbar.vue';
import PostContainer from './posts/Container.vue'

const { frontmatter } = useData()
</script>

<template>
  <Navbar />
  <main>
    <Content v-if="frontmatter.layout == 'page'" />
    <PostContainer v-else-if="frontmatter.layout === 'blog'">
      <Content />
    </PostContainer>
  </main>
</template>

<style scoped>
main {
  width: 90%;
  margin: 35px auto;
}
</style>