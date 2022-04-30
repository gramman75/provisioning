<template>
    <div>
        <v-list-item v-for="jobs in jobsStore.getPrefixJobs">
            <v-list-item-content>
                <v-list-item-title>{{jobs.title}}</v-list-item-title>
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