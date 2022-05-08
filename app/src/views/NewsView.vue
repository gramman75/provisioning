<template>
    <list-view :list="list"></list-view>
     <!-- <v-list-item two-line v-for="ask in newsStore.getNews">
        <v-list-item-content>
            <v-list-item-title><router-link :to="`/item/${ask.id}`">{{ask.title}}</router-link></v-list-item-title>
            <v-list-item-subtitle>{{ask.user}}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item> -->
</template>

<script setup lang="ts">
import { useNews} from '@/store/news';
import { computed, ref } from 'vue';
import ListView from './ListView.vue'

const newsStore = useNews();
newsStore.findAll();
const list = computed(()=> newsStore.getNews);
// const list = ref(newsStore.getNews).value;
</script>

<style scoped>

</style>