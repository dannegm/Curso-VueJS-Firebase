import { CREATE_POST } from "./types";

export default {
  createPost({ commit }, payload) {
    commit(CREATE_POST, payload);
  },
};
