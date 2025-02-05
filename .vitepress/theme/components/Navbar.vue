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
            <!-- <ul>
                <li>درباره من</li>
                <li>ارتباط با من</li>
            </ul> -->
            <!-- <SunIcon /> -->
            <HamburgerMenuIcon class="menu-trigger" size="32" />
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    background-color: white;
    z-index: 10;
}

nav a,
nav div {
    display: flex;
    align-items: center;
    gap: 8px;
}

nav div ul {
    display: flex;
    gap: 20px;
    font-weight: 600;
    color: #333333;
}

nav div ul li {
    cursor: pointer;
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


@media only screen and (min-width: 1280px) {
    .menu-trigger {
        display: none;
    }
}
</style>