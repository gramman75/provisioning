<template>
    <div>
        <v-list-item v-for="jobs in jobsList">
            <v-list-item-content>
                <v-list-item-title>{{jobs.title}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

    </div>
</template>

<script setup lang="ts">
import JobService from '@/api/JobService';
import { ref } from 'vue';

const jobsList = ref<Array<any>>();

function getJobs() {
    JobService.fetchJobsList()
        .then((response)=>{
            jobsList.value = response.data;
        })
        .catch((error) =>{
            console.log(error);

        })
}

getJobs();

</script>

<style scoped>

</style>