import { createApp } from "vue";
import App from "./App.vue";
import router from './routes'
// import {store, key } from "./store/index.ts.txt";
import {createPinia} from 'pinia'
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret, faUser)

loadFonts();

createApp(App)
    .use(router)
    .use(vuetify)
    .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    // .use(store, key)
    .mount("#app");