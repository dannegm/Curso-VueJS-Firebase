import exampleRouter from "./Example/router";
import timelineRouter from "./Timeline/router";

import timelineStore from "./Timeline/store";

export const Routes = [...exampleRouter, ...timelineRouter];

export const Stores = {
  timeline: timelineStore.module,
};
