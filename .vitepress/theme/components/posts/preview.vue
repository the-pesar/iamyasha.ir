<script lang="ts" setup>
import moment from "moment-jalaali";

// import CalendarIcon from '../icons/Calendar.vue';
// import MapMarkerIcon from '../icons/MapMarker.vue';
import ArrowLeftIcon from '../icons/ArrowLeft.vue';

import { IPost } from '../../../../src/posts/posts.data';

const props = defineProps<IPost>()

moment.loadPersian({ usePersianDigits: true });

const formattedDate = moment(props.date, "jYYYY/jMM/jDD").format("jD jMMMM jYYYY");
</script>

<template>
    <div class="post">
        <h2 class="post-title">
            <a :href="url" v-text="title" />
        </h2>
        <div v-if="image" class="thumbnail" :style="`background-image: url(${image})`" />
        <div class="post-details">
            <span>{{ formattedDate }}</span>
            <span>•</span>
            <span>{{ location }}</span>
        </div>
        <p class="post-description" v-text="description" />
        <div class="footer">
            <a :href="url">
                <span>ادامه خواندن</span>
                <ArrowLeftIcon />
            </a>
        </div>
    </div>
</template>

<style scoped>
div.post {
    padding-bottom: 20px;
    margin-bottom: 20px;
}

div.post:not(:last-child) {
    border-bottom: 1px solid #cccccc;
}

h2.post-title {
    font-size: 20px;
    margin: 5px 0;
}

div.thumbnail {
    border-radius: 10px;
    width: 100%;
    height: 200px;
    margin-top: 15px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

div.post-details {
    display: flex;
    gap: 10px;
    font-size: 14px;
    color: #656565;
    margin-top: 10px;
    font-weight: 500;
}

p.post-description {
    margin: 5px 0;
    font-size: 16px;
    color: #656565;
}

a {
    text-decoration: none;
    color: #333333;
}

div.footer a {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-weight: 500;
}
</style>