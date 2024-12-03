<script lang="ts" setup>
defineProps<{
    size: string
}>()
</script>


<template>
    <svg :width="size" :height="size" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2.33325 5.91692C2.33325 3.29343 4.42259 1.16666 6.99992 1.16666C9.57725 1.16666 11.6666 3.29343 11.6666 5.91692C11.6666 8.51985 10.1771 11.5572 7.8533 12.6434C7.31157 12.8966 6.68827 12.8966 6.14654 12.6434C3.82269 11.5572 2.33325 8.51985 2.33325 5.91692Z"
            stroke="#656565" stroke-width="1.5" />
        <circle cx="7" cy="5.83334" r="1.75" stroke="#656565" stroke-width="1.5" />
    </svg>
</template>