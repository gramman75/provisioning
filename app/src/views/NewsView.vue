<template>
    <input v-on:input="search" v-model="searchStr" type="input" />
    <v-list-item two-line v-for="n in newsStore.$state.news">
        <v-list-item-content>
            <v-list-item-title><a v-bind:href="n.url">{{n.title}}</a></v-list-item-title>
            <v-list-item-subtitle><router-link :to="`/user/${n.user}`">{{n.user}}</router-link></v-list-item-subtitle>
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
    newsStore.findByTitle(v.value);
    console.log(v.value)
}

</script>

<style scoped>

</style>