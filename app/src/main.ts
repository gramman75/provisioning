import { createApp } from "vue";
import App from "./App.vue";
import router from './routes'
// import {store, key } from "./store/index.ts.txt";
import {createPinia} from 'pinia'
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App)
    .use(router)
    .use(vuetify)
    .use(createPinia())
    // .use(store, key)
    .mount("#app");