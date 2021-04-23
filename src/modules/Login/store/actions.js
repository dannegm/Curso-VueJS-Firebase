import { firebase, auth } from "@/shared/services/firebase";
import router from "@/state/router";
import { DO_LOGIN, DO_LOGOUT } from "./types";

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default {
  async checkLogin({ commit, dispatch }) {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        dispatch("requestLogout");
      } else {
        commit(DO_LOGIN, user);
        router.push({ name: "timeline" });
      }
    });
  },

  async requestLogin({ dispatch }) {
    await auth.signInWithPopup(GoogleAuthProvider);
    dispatch("checkLogin");
  },

  async requestLogout({ commit }) {
    commit(DO_LOGOUT);
    router.push({ name: "login" });
    await auth.signOut();
  },
};
