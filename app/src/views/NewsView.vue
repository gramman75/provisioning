<template>
    <!-- <p>{{counter}}</p>
    <p>{{name}}</p>
    <p>{{isAdmin}}</p> -->
    <v-list-item v-for="news in newsStore.orignNews">
        <v-list-item-content>
            <v-list-item-title>{{news.title}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script setup lang="ts">

import NewsService from "@/api/NewsService";
import { reactive, ref } from "vue";
import { useNews } from '@/store/news';
import {storeToRefs} from 'pinia'
import NewsModel from "@/models/NewsModel";

const newsList =  ref<Array<NewsModel>>(); 
const customNewsList = ref<Array<NewsModel>>();  
// const icon = reactive({icon : 'mdi-clock'});

const newsStore = useNews();

// const {counter, isAdmin, name } = storeToRefs(store);

// console.log('store counter :' +store.counter);

function getNews(): void {
    newsStore.orignNews;
    // newsList.value = newsStore.orignNews;
    // customNewsList.value = newsStore.customNews
    // NewsService.fetchNewsList()
    //     .then((response) =>{
    //         newsList.value = response.data;
    //         console.log(newsList.value);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // NewsService.fetchNewsList();

}

getNews();

</script>

<style scoped>

</style>