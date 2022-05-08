<template>
    <v-card class=""
            max-width="344"
            outlined>
            <v-list-item>
                <v-list-item-avatar>
                    <font-awesome-icon icon="user" class="fa-2xl" />
                </v-list-item-avatar>
                <v-list-item-content>
                    <div>
                        <router-link :to="`/user/${user.id}`">{{user.id}}</router-link>

                    </div>
                    <v-list-item-title>
                        {{user.created}}

                    </v-list-item-title>
                    <v-list-item-subtitle>
                        point {{user.karma}}

                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>


        </v-card>
  
</template>

<script setup lang="ts">
import UserModel from '@/models/UserModel';
import { computed, PropType } from 'vue';
import moment from 'moment'



// import { useRouter } from 'vue-router';
import { useUser } from '@/store/user';
// import { computed } from 'vue';
// import  moment from 'moment';

// const route = useRouter();
const userStore = useUser(); 
// const props = defineProps({
//     user : { type:  {} as PropType<UserModel>, required: true}
// })

// userStore.findUser(props.user);
// const logOnDate = computed(()=> moment(props.user.created_time).format('L') )

const user = computed(()=> userStore.getUserInfo)
</script>

<style>
</style>