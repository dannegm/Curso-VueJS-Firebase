import { db } from "@/shared/services/firebase";
import { SET_ERROR, CLEAN_ERROR, STORE_POSTS } from "./types";

export default {
  async createPost({ commit, dispatch }, payload) {
    commit(CLEAN_ERROR);
    try {
      await db.collection("posts").doc(payload.id).set(payload);
      dispatch("getPosts");
    } catch (err) {
      commit(SET_ERROR, "Ha ocurrido un error");
    }
  },

  cleanError({ commit }) {
    commit(CLEAN_ERROR);
  },

  async getPosts({ commit }) {
    commit(CLEAN_ERROR);
    try {
      const timelineSnapshots = await db.collection("posts").get();
      const posts = timelineSnapshots.docs.map((doc) => doc.data());
      commit(STORE_POSTS, posts);
    } catch (err) {
      commit(SET_ERROR, "Ha ocurrido un error");
    }
  },
};
