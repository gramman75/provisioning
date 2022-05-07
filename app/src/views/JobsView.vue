<template>
    <list-view :list="list"></list-view>
</template>

<script setup lang="ts">
import { useJobs } from '@/store/jobs';
import { ref } from 'vue';
import ListView from './ListView.vue'

const jobsStore = useJobs();
jobsStore.findAll();
const list = ref(jobsStore.getJobs).value;
</script>

<style scoped>

</style>