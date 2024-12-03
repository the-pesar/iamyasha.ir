<script lang="ts" setup>
import moment from "moment-jalaali";

import CalendarIcon from './icons/Calendar.vue';
import MapMarkerIcon from './icons/MapMarker.vue';

import { IPost } from '../../../src/posts/posts.data';

const props = defineProps<IPost>()

moment.loadPersian({ usePersianDigits: true });

const formattedDate = moment(props.date, "jYYYY/jMM/jDD").format("jD jMMMM jYYYY");
</script>

<template>
    <div class="post">
        <h2 class="post-title">
            <a :href="url" v-text="title" />
        </h2>
        <div class="post-details">
            <div>
                <CalendarIcon size="16" />
                <span>{{ formattedDate }}</span>
            </div>
            <div>
                <MapMarkerIcon size="16" />
                <span v-text="location" />
            </div>
        </div>
        <p class="post-description" v-text="description" />
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

div.post-details {
    display: flex;
    gap: 15px;
    font-size: 14px;
    color: #656565;
}

.post-details div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 700;
    color: #656565;
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
</style>