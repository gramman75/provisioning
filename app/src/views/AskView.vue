<template>
    <v-list-item v-for="ask in askList">
        <v-list-item-content>
            <v-list-item-title>{{ask.title}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script setup lang="ts">
import AskService from '@/api/AskService';
import { ref } from 'vue';

const askList = ref<Array<any>>();

function getAsk(): void {
    AskService.fetchAskList()
        .then((response) =>{
            askList.value = response.data;
        })
        .catch((error)=>{
            console.log(error);
        });
}

getAsk();

</script>

<style scoped>

</style>