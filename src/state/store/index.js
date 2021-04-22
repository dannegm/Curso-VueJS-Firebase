import { createStore, createLogger } from "vuex";
import VuexPersistence from "vuex-persist";

import { Stores } from "@/modules";

import { initialState } from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const debug = process.env.NODE_ENV !== "production";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const plugins = (debug) => {
  let plugins = [vuexLocal.plugin];
  if (debug) plugins.unshift(createLogger());
  return plugins;
};

export default createStore({
  modules: {
    ...Stores,
  },
  plugins: plugins(debug),
  strict: debug,
  state: initialState,
  getters,
  actions,
  mutations,
});
