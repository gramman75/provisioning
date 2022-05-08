<template>
    <list-view :list="list"></list-view>
</template>

<script setup lang="ts">
import { useJobs } from '@/store/jobs';
import { computed, ref } from 'vue';
import ListView from './ListView.vue'

const jobsStore = useJobs();
jobsStore.findAll();
const list = computed(()=> jobsStore.getJobs);
// const list = ref(jobsStore.getJobs).value;
</script>

<style scoped>

</style>