<template>
    <list-view :list="list"></list-view>
    <!-- <spinner :loading="loading"></spinner> -->
    
</template>

<script setup lang="ts">
import { useNews} from '@/store/news';
import { computed } from 'vue';
import ListView from './ListView.vue'
import {useMain} from '@/store/main';

const newsStore = useNews();
const mainStore = useMain();
mainStore.startSpinner();
newsStore.findAll().then(() => {
    mainStore.stopSpinnger();
});
const list = computed(()=> newsStore.getNews);

</script>

<style scoped>

</style>