<template>
    <v-list-item two-line v-for="ask in askStore.getPrefixAsk">
        <v-list-item-content>
            <v-list-item-title><router-link :to="`/item/${ask.id}`">{{ask.title}}</router-link></v-list-item-title>
            <v-list-item-subtitle>{{ask.user}}</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script setup lang="ts">
import { useAsk } from '@/store/ask';

const askStore = useAsk();
askStore.findAll();

</script>

<style scoped>

</style>