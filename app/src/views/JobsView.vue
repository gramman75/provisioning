<template>
    <div>
        <v-list-item two-line v-for="jobs in jobsStore.getPrefixJobs">
            <v-list-item-content>
                <v-list-item-title><a :href="jobs.url">{{jobs.title}}</a></v-list-item-title>
                <v-list-item-subtitle>{{jobs.domain}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

    </div>
</template>

<script setup lang="ts">
import { useJobs } from '@/store/jobs';

const jobsStore = useJobs();
jobsStore.findAll();

</script>

<style scoped>

</style>