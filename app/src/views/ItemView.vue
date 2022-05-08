<template>
<v-container>
    <section>
        <user-profile>
            <template #username>
                <div>
                    <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
                </div>
            </template>
            <template #time>
                {{item.time_ago}}
            </template>
        </user-profile>  
        <div >
        <v-icon
          large
          color="orange darken-2"
        >
        mdi-face-man-profile
        </v-icon>
        </div>
        <div>
            <p><router-link :to="`/user/${item.user}`">{{item.user}}</router-link></p>
            <p>{{item.time_ago}}</p>
        </div> 
    </section>
    <section>
        <div>
            <h2>{{item.title}}</h2>
        </div>
    </section>
    <section>
            <p>
            <v-row>
                <v-col :cols="10">
                    <div v-html="item.content"></div>
                </v-col>
            </v-row>
        </p>

    </section>

</v-container>

</template>

<script setup lang="ts">
import { useAsk } from '@/store/ask';
import { useUser } from '@/store/user';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import UserProfile from './UserProfile.vue';


const askStore = useAsk();
const userStore = useUser();
const route = useRouter();

let id: String = route.currentRoute.value.params.id as String;
askStore.findItem(id);
// userStore.findUser(askStore.getItem.user);

const item = computed(()=> askStore.getItem);
</script>

<style scoped>

</style>