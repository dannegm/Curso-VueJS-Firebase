import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import { initialState } from "./state";

export default {
  state: initialState,
  module: {
    namespaced: true,
    state: initialState,
    actions,
    mutations,
    getters,
  },
};
