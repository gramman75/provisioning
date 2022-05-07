<template>
    <list-view :list="list"></list-view>
</template>

<script setup lang="ts">
import { useAsk } from '@/store/ask';
import { ref } from 'vue';
import ListView from './ListView.vue'

const askStore = useAsk();
askStore.findAll();
const list = ref(askStore.getAsk).value;
</script>

<style scoped>

</style>