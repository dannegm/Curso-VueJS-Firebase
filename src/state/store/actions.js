import { TURN_DARK, TURN_LIGHT } from "./types";

export default {
  turnDark({ commit }) {
    commit(TURN_DARK);
  },

  turnLight({ commit }) {
    commit(TURN_LIGHT);
  },

  toggleDarkMode({ commit, state }) {
    if (state.isDark) {
      commit(TURN_LIGHT);
    } else {
      commit(TURN_DARK);
    }
  },
};
