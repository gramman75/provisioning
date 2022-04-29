<template>
    <v-list-item v-for="n in newsStore.customNews">
        <v-list-item-content>
            <v-list-item-title>{{n.title}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script setup lang="ts">

import { useNews } from '@/store/news';

let newsStore = useNews();
newsStore.getNews();


</script>

<style scoped>

</style>