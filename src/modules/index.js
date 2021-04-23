import exampleRouter from "./Example/router";
import timelineRouter from "./Timeline/router";
import loginRouter from "./Login/router";

import timelineStore from "./Timeline/store";
import loginStore from "./Login/store";

export const Routes = [...exampleRouter, ...timelineRouter, ...loginRouter];

export const Stores = {
  timeline: timelineStore.module,
  login: loginStore.module,
};
