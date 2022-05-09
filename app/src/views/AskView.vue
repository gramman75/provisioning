<template>
    <list-view :list="list"></list-view>
</template>

<script setup lang="ts">
import { useAsk } from '@/store/ask';
import { computed, onMounted, ref, getCurrentInstance, ComponentPublicInstance } from 'vue';
import ListView from './ListView.vue'
// import useEmitter from '@/bus/useEmmiter'  
import {useMain} from '@/store/main'


// const emitter = useEmitter()   
const askStore = useAsk();
const mainStore = useMain();

// emitter.emit('startLoading');
mainStore.startSpinner();
askStore.findAll().then(()=>{
    mainStore.stopSpinnger();
})

const list = computed(()=> askStore.getAsk);




</script>

<style scoped>

</style>