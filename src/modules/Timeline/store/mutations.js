import types from "./types";

export default {
  [types.CREATE_POST](state, payload) {
    const copyPosts = [...state.posts];
    copyPosts.push(payload);
    state.posts = copyPosts;
  },

  [types.SET_ERROR](state, error) {
    state.error = error;
  },
  [types.CLEAN_ERROR](state) {
    state.error = null;
  },
  [types.STORE_POSTS](state, payload) {
    state.posts = payload;
  },

  [types.SET_PICTURE_URL](state, payload) {
    state.picture.url = payload;
  },
  [types.CLEAN_PICTURE_URL](state) {
    state.picture.url = "";
  },
  [types.SET_PICTURE_UPLOADING](state, payload) {
    state.picture.isUploading = payload;
  },
  [types.CLEAR_POST_COUNT](state) {
    state.postCount = 0;
  },
  [types.SET_POST_COUNT](state, payload) {
    state.postCount = payload;
  },
};
