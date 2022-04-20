import { createApp } from "vue";
import App from "./App.vue";
import router from './routes'
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import * as $ from 'jquery';

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");