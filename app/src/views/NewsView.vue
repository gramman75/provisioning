<template>
    <input v-on:input="search" v-model="searchStr" type="input" />
    <v-list-item v-for="n in newsStore.getPrefixNews">
        <v-list-item-content>
            <v-list-item-title>{{n.title}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script setup lang="ts">

import NewsModel from '@/models/NewsModel';
import { useNews } from '@/store/news';
import { ref } from 'vue';

let newsStore = useNews();
let searchStr = ''; 
let filterNews : Array<NewsModel> = [];
newsStore.findAll();

function search(event: Event) {
    const v = event.target as HTMLInputElement
    filterNews = newsStore.findByTitle(v.value);
    console.log(v.value)
}

</script>

<style scoped>

</style>