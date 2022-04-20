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
