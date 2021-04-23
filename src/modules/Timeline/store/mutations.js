import { CREATE_POST, SET_ERROR, CLEAN_ERROR, STORE_POSTS } from "./types";

export default {
  [CREATE_POST](state, payload) {
    const copyPosts = [...state.posts];
    copyPosts.push(payload);
    state.posts = copyPosts;
  },

  [SET_ERROR](state, error) {
    state.error = error;
  },
  [CLEAN_ERROR](state) {
    state.error = null;
  },
  [STORE_POSTS](state, payload) {
    state.posts = payload;
  },
};
