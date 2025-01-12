<script lang="ts" setup>
import { useData } from 'vitepress';
import moment from "moment-jalaali";

import CalendarIcon from '../icons/Calendar.vue';
import MapMarkerIcon from '../icons/MapMarker.vue';
import { computed } from '@vue/reactivity';

const { frontmatter } = useData()

moment.loadPersian({ usePersianDigits: true });

const formattedDate = computed(() => {
    return moment(frontmatter.value.date, "jYYYY/jMM/jDD").format("jD jMMMM jYYYY")
})
</script>

<template>
    <h1 v-text="frontmatter.title" />
    <div class="details">
        <span>{{ formattedDate }}</span>
        <span>•</span>
        <span>{{ frontmatter.location }}</span>
    </div>
</template>

<style scoped>
h1 {
    font-size: 22px;
    margin-bottom: 10px;
}

div.details {
    display: flex;
    gap: 10px;
    color: #656565;
    font-weight: 500;
}
</style>