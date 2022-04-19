<template>
 <v-app>
    <v-app-bar color="grey-lighten-2">
      <tool-bar class="abc"/>
    </v-app-bar>
    <v-main>
      <v-card height="200px">
        <router-view/>
      </v-card>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ToolBar from "./components/ToolBar.vue";

export default defineComponent({
  name: "App",

  components: {
    HelloWorld, ToolBar
  },

  data() {
    return {
      //
    };
  },
});
</script>
