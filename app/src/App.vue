<template>
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

<script lang="ts">
import { defineComponent } from "vue";
import ToolBar from "./components/ToolBar.vue";
import _ from "lodash";

export default defineComponent({
  name: "App",

  components: {
    ToolBar
  },

  data() {
    return {
    };
  },
});
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