<script setup lang="ts">
import { useData } from 'vitepress'
import Navbar from './Navbar.vue';

const { site, frontmatter } = useData()
</script>

<template>
  <Navbar />
  <main>
    <Content />
  </main>
</template>
