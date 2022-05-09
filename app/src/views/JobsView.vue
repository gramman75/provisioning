<template>
    <list-view :list="list"></list-view>
</template>

<script setup lang="ts">
import { useJobs } from '@/store/jobs';
import { computed, ref } from 'vue';
import ListView from './ListView.vue'
import {useMain} from '@/store/main';

const jobsStore = useJobs();

const mainStore = useMain();
mainStore.startSpinner();
jobsStore.findAll().then(()=>{
    mainStore.stopSpinnger();
});
const list = computed(()=> jobsStore.getJobs);
</script>

<style scoped>

</style>