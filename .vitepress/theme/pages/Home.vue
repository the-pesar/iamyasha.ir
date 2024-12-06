<script setup>
import BlogPreview from '../components/home/BlogPreview.vue';
import SocialLinks from '../components/home/SocialLinks.vue';
</script>

<template>
    <div class="avatar-container">
        <div class="avatar-overlay">
            <img class="avatar-image" src="/avatar.png" />
        </div>
    </div>

    <SocialLinks />

    <p class="biography">
        من یاشام و برنامه نویسم. این سایت رو به خاطر این ساختم که Vitepress رو یاد بگیرم بعد به ذهنم زد که با فیگما براش
        یه تم قشنگ طراحی کنم و بعد به همراهش یکم UIUX هم یاد گرفتم. اینجا هنوز درحال توسعه‌ست و کم کم دارم چیزای بیشتری
        بهش اضافه می‌کنم.
    </p>

    <BlogPreview />
</template>

<style scoped>
.avatar-container {
    display: flex;
    justify-content: center;
}

.avatar-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7.5px;
    background-color: #ebebeb;
    border-radius: 50%;
}

.avatar-overlay:focus {
    transform: scale(0.95);
}

img.avatar-image {
    border-radius: 50%;
    width: 170px;
}

.biography {
    color: #333333;
    text-align: center;
}
</style>