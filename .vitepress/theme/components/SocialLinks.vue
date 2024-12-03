<script lang="ts" setup>
import socials from '../socials'
</script>

<template>
    <ul class="social-icons">
        <li v-for="social in socials" :key="social.name">
            <a :href="social.link" target="_blank">
                <component :is="social.icon" />
            </a>
        </li>
    </ul>
</template>

<style>
.social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
}

.social-icons li:hover {
    transform: translateY(-3px);
    transition: all 0.2s;
}
</style>