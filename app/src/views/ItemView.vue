<template>
<v-container>
    <section>
        <user-profile></user-profile>
       
    </section>
    <section>
        <div>
            <h2>{{askStore.getItem.title}}</h2>
        </div>
    </section>
    <section>
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
import UserProfile from './UserProfile.vue';


const askStore = useAsk();
const route = useRouter();

let id: String = route.currentRoute.value.params.id as String;
askStore.findItem(id);
</script>

<style scoped>

</style>