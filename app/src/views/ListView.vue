<template>
    <v-list-item two-line v-for="ask in list">
        <v-list-item-content>
            <v-list-item-title><router-link :to="`/item/${ask.id}`">{{ask.title}}</router-link></v-list-item-title>
            <v-list-item-subtitle>{{ask.user}}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>


<script setup lang="ts">
import { useNews } from '@/store/news';
import { useAsk } from '@/store/ask';
import { useJobs } from '@/store/jobs';
import { useRouter } from 'vue-router';
import ListModel from '@/models/ListModel';
const askStore = useAsk();
const newsStore = useNews();
const jobsStore = useJobs();

let route = useRouter();
let name = route.currentRoute.value.name;
let list = Array<ListModel>();

if (name =='news') {
    list = newsStore.getNews;
}  else if(name == 'ask') {
    list = askStore.getAsk;
}  else if (name == 'jobs'){
    list = jobsStore.getJobs;
}




</script>