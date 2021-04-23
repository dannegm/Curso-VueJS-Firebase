import { DO_LOGIN, DO_LOGOUT } from "./types";

export default {
  [DO_LOGIN](state, payload) {
    state.user = payload;
  },
  [DO_LOGOUT](state) {
    state.user = null;
  },
};
