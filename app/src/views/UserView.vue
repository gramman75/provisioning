<template>
        <!-- <v-row>
        <v-col :cols="5 ">
        <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-card-text>
            <div>ID</div>
            <p class="text-h4 text--primary">
                {{user.id}}
            </p>
            <p>가입일</p>
            <div class="text--primary">
            {{user.created}}
            </div>
            <div class="text--primary">
            {{logOnDate}}
            </div>
            </v-card-text>
            
        </v-card>

        </v-col>
    </v-row> -->

    <user-profile></user-profile>
  
</template>

<script setup lang="ts">
import { useUser } from '@/store/user';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import UserProfile from './UserProfile.vue';
import moment from 'moment'


const route = useRouter();

let id: String = route.currentRoute.value.params.id as String;
const userStore = useUser();
userStore.findUser(id);

const user = computed(()=> userStore.getUserInfo)
const logOnDate = computed(()=> moment(userStore.getUserInfo.created_time).format('L') )
</script>

<style>
</style>