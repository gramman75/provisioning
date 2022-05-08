<template>
    <v-list-item two-line v-for="item in list">
        <v-list-item-content>
            <template v-if="item.domain">
                <v-list-item-title><a v-bind:href="item.url">{{item.title}}</a></v-list-item-title>
            </template>
            <template v-else>
                <v-list-item-title><router-link :to="`/item/${item.id}`">{{item.title}}</router-link></v-list-item-title>
            </template>
            <template v-if="item.user">
                <v-list-item-subtitle>{{`${item.time_ago} by `}}<router-link :to="`/user/${item.user}`">{{item.user}}</router-link></v-list-item-subtitle>
            </template>
            <template v-else>
                <v-list-item-subtitle>{{`${item.time_ago} by `}}<a v-bind:href="item.url">{{item.domain}}</a></v-list-item-subtitle>
            </template>
        </v-list-item-content>
    </v-list-item>
</template>


<script setup lang="ts">
import ListModel from '@/models/ListModel';
import { PropType } from 'vue';

const prop = defineProps({
    list : {type: Array as PropType<Array<ListModel>> }
})

</script>