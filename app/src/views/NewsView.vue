<template>
    <list-view :list="list"></list-view>
</template>

<script setup lang="ts">
import { useNews} from '@/store/news';
import { ref } from 'vue';
import ListView from './ListView.vue'

const newsStore = useNews();
newsStore.findAll();
const list = ref(newsStore.getNews).value;
</script>

<style scoped>

</style>