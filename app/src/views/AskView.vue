<template>
    <list-view :list="list"></list-view>
</template>

<script setup lang="ts">
import { useAsk } from '@/store/ask';
import { computed, onMounted, ref, getCurrentInstance, ComponentPublicInstance } from 'vue';
import ListView from './ListView.vue'
import mitt from 'mitt';

    // const  proxy = getCurrentInstance()?.proxy;

const askStore = useAsk();

// emitter.emit('startLoading');
askStore.findAll();
// setTimeout(() =>{
//     emitter.emit('stopLoading')}
//     ,2000);
const list = computed(()=> askStore.getAsk);




</script>

<style scoped>

</style>