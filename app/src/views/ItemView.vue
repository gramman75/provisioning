<template>
<v-container>
    <section>
        <div>
            <router-link :to="`/user/${askStore.item.user}`">{{askStore.item.user}}</router-link>
        </div>
        <div>
            {{askStore.item.time_ago}}
        </div>
        <div>
            <h2>{{askStore.getItem.title}}</h2>
        </div>
        <p>
            <v-row>
                <v-col :cols="10">
                    <div v-html="askStore.getItem.content"></div>
                </v-col>
            </v-row>
        </p>

      
    </section>
</v-container>

</template>

<script setup lang="ts">
import { useAsk } from '@/store/ask';
import { useRouter } from 'vue-router';

const askStore = useAsk();
const route = useRouter();

let id: String = route.currentRoute.value.params.id as String;
askStore.findItem(id);
</script>

<style scoped>

</style>