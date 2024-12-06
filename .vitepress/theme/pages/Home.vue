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
        خب سلام، اینجا وب‌سایت شخصی منه و سعی می‌کردم هر چیزی که مربوط به خودم هست رو اینجا بذارم. دلم برای
        وبلاگ‌نویسی
        تنگ شده بود پس یه بخش وبلاگ هم دارم به اینجا اضافه می‌کنم. اینجا فعلا درحال توسعه‌ست.
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