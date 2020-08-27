import { createApp } from 'vue';
import App from './App.vue';
import router from './state/router';
import store from './state/store';

import 'bulma';
import 'animate.css';

const app = createApp(App);

app.use(router).use(store);
app.mount('#app');
