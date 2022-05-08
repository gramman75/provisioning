<template>
    <user-profile>
        <template #username>
            <div> {{user.id}} </div>
        </template>
        <template v-slot:time>
            {{logOnDate}}
        </template>
        <template #karma>
            <div>{{user.karma}}</div>
        </template>
    </user-profile>
  
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