<template>
   <Spinner :loading="loadingStatus"></Spinner>
  <v-app>
      <v-app-bar color="grey-lighten-2">
        <tool-bar class="abc"/>
      </v-app-bar>
      <v-main>
          <transition name="page">
            <router-view/>
          </transition>
      </v-main>
    </v-app>
</template>

<script setup lang="ts">
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import {useMain} from '@/store/main';
import { computed, ref } from "vue";
import mitt from 'mitt'


const emitter = mitt<Events>();
type Events = {
    'startLoading' : void;
    'stopLoading' : void;
}
const mainStore = useMain();
const loadingStatus = computed(()=> mainStore.getLoadingStatus)
// let loadingStatus = ref(Boolean())
// emitter.on('startLoading', ()=>{
//   loadingStatus.value = true;

// });
// emitter.on('stopLoading', ()=>{
//   loadingStatus.value = false;

// });

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>