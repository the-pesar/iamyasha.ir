<script lang="ts" setup>
import { useData } from 'vitepress';

const { frontmatter } = useData()
</script>

<template>
    <h3>برچسب‌ها</h3>
    <div>
        <div v-for="tag in frontmatter.tags" :key="tag" class="tag" v-text="tag" />
    </div>
</template>

<style scoped>
h3 {
    color: #333333;
}

div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

div div.tag {
    background-color: #EBEBEB;
    color: #656565;
    padding: 3px 8px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
}
</style>