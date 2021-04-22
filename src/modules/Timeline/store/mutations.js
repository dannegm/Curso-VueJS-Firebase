import { CREATE_POST } from "./types";

export default {
  [CREATE_POST](state, payload) {
    const copyPosts = [...state.posts];
    copyPosts.push(payload);
    state.posts = copyPosts;
  },
};
