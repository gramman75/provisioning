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
import mitt from 'mitt';
library.add(faUserSecret, faUser)

loadFonts();
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.msg = 'hello'

app.use(router)
    .use(vuetify)
    .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app");
