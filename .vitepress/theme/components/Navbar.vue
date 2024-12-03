<script setup lang="ts">
import HamburgerMenuIcon from './icons/HamburgerMenu.vue'
import SunIcon from './icons/Sun.vue'
</script>

<template>
    <nav>
        <a href="/">
            <img src="/batman-logo.png" alt="">
            <span class="yasha">یاشا</span>
        </a>
        <div>
            <SunIcon />
            <HamburgerMenuIcon class="menu-trigger" size="32" />
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
}

nav a,
nav div {
    display: flex;
    align-items: center;
    gap: 8px;
}

nav a img {
    width: 50px;
    opacity: 0.8;
}

.yasha {
    font-size: 22px;
    color: #333333;
    font-weight: 700;
}

a {
    text-decoration: none;
}

.menu-trigger {
    cursor: pointer;
}
</style>