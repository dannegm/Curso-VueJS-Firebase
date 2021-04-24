import { db, storage } from "@/shared/services/firebase";
import types from "./types";

export default {
  async createPost({ commit, dispatch }, payload) {
    commit(types.CLEAN_ERROR);
    try {
      await db.collection("posts").doc(payload.id).set(payload);
      dispatch("getPosts");
    } catch (err) {
      console.log(err);
      commit(types.SET_ERROR, "Ha ocurrido un error");
    }
  },

  cleanError({ commit }) {
    commit(types.CLEAN_ERROR);
  },

  async getPosts({ commit }) {
    commit(types.CLEAN_ERROR);
    try {
      const timelineSnapshots = await db.collection("posts").get();
      const posts = timelineSnapshots.docs.map((doc) => doc.data());
      commit(types.STORE_POSTS, posts);
      commit(types.CLEAR_POST_COUNT);
    } catch (err) {
      commit(types.SET_ERROR, "Ha ocurrido un error");
    }
  },

  storePicture({ commit }, { picture }) {
    commit(types.CLEAN_ERROR);
    commit(types.CLEAN_PICTURE_URL);
    commit(types.SET_PICTURE_UPLOADING, false);

    const $storage = storage.ref();
    const $picture = $storage.child(`media/${picture.name}`);
    const $updloader = $picture.put(picture);

    const handleSuccess = async () => {
      const pictureURL = await $picture.getDownloadURL();
      commit(types.SET_PICTURE_URL, pictureURL);
      commit(types.SET_PICTURE_UPLOADING, false);
    };

    const handleError = () => {
      commit(types.SET_ERROR, "Ha ocurrido un error al subir la imagen");
      commit(types.SET_PICTURE_UPLOADING, false);
    };

    commit(types.SET_PICTURE_UPLOADING, true);
    $updloader.on("state_changed", null, handleError, () =>
      handleSuccess($picture)
    );
  },

  cleanPictureURl({ commit }) {
    commit(types.CLEAN_PICTURE_URL);
  },

  dispatchRealtime({ commit }) {
    db.collection("posts").onSnapshot((docs) => {
      commit(types.SET_POST_COUNT, docs.size);
    });
  },
};
