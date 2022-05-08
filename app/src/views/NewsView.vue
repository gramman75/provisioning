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
newsStore.findAll();
const list = computed(()=> newsStore.getNews);
setInterval(()=>{
    mainStore.stopSpinnger();
}, 2000)

</script>

<style scoped>

</style>