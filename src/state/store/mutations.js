import { TURN_DARK, TURN_LIGHT } from "./types";

export default {
  [TURN_DARK](state) {
    state.isDark = true;
  },

  [TURN_LIGHT](state) {
    state.isDark = false;
  },
};
