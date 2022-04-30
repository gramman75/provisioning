<template>
    <v-list-item v-for="ask in askStore.getPrefixAsk">
        <v-list-item-content>
            <v-list-item-title>{{ask.title}}</v-list-item-title>
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