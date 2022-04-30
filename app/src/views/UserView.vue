<template>
    <v-row>
        <v-col :cols="5 ">
        <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-card-text>
            <div>ID</div>
            <p class="text-h4 text--primary">
                {{userStore.getUserInfo?.id}}
            </p>
            <p>가입일</p>
            <div class="text--primary">
            {{userStore.getUserInfo?.created}}
            </div>
            <div class="text--primary">
            {{logOnDate}}
            </div>
            </v-card-text>
            
        </v-card>

        </v-col>
    </v-row>
  
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUser } from '@/store/user';
import { computed } from 'vue';
import  moment from 'moment';

const route = useRouter();
const userStore = useUser(); 

userStore.findUser(route.currentRoute.value.params.id);
const logOnDate = computed(()=> moment(userStore.getUserInfo?.created_time).format('L') )


</script>

<style>
</style>