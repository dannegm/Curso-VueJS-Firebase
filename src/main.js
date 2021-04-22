import { createApp } from "vue";
import App from "./App.vue";
import router from "@/state/router";
import store from "@/state/store";

import "bulma";
import "animate.css";

createApp(App).use(store).use(router).mount("#app");
