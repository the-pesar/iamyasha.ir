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
        <div>
            <CalendarIcon size="16" />
            <span>{{ formattedDate }}</span>
        </div>
        <div>
            <MapMarkerIcon size="16" />
            <span v-text="frontmatter.location" />
        </div>
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
}

div.details div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 700;
    color: #656565;
}
</style>