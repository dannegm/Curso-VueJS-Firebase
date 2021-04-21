import { createApp } from "vue";
import App from "./App.vue";
import router from "@/state/router";
// import store from "./store";

import "bulma";

createApp(App)
  // .use(store)
  .use(router)
  .mount("#app");
