<template>
  <div class="editor">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" :src="user.photoURL" />
            </figure>
          </div>
          <div class="media-content">
            <div class="columns">
              <div class="column">
                <textarea
                  class="textarea"
                  v-model="message"
                  :placeholder="placeholder"
                ></textarea>
              </div>
            </div>

            <div class="columns">
              <div class="column buttons">
                <Action
                  type="link"
                  :is-disabled="isActionDisabled"
                  @click="dispatchPost"
                >
                  Publicar
                </Action>

                <input
                  type="file"
                  class="hidden"
                  ref="filePicker"
                  @change="handleUpload($event.target)"
                />

                <Action
                  :is-loading="isUploadingPicture"
                  @click="$refs.filePicker.click()"
                >
                  <span class="icon">
                    <i class="fas fa-search"></i>
                  </span>
                  <span>Explorar imagen</span>
                </Action>
              </div>
            </div>

            <div class="columns" v-if="picture">
              <div class="column is-half">
                <figure class="image">
                  <a class="delete" @click="removePicture"></a>
                  <img :src="picture" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import Action from "@/shared/components/Action";
import { ref } from "vue";
import { reactive } from "vue";
import { toRefs } from "vue";
import { computed } from "vue";

export default {
  name: "Editor",
  components: {
    Action,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Lorem ipsum...",
    },
  },

  setup(props, { emit }) {
    const store = useStore();

    const storePicture = (payload) =>
      store.dispatch("timeline/storePicture", payload);
    const downloadPicture = (payload) =>
      store.dispatch("timeline/downloadPicture", payload);

    const message = ref("");
    const picture = ref("");
    const isUploadingPicture = ref(false);
    const isActionDisabled = computed(
      () => isUploadingPicture.value || !message.value.trim()
    );

    const dispatchPost = () => {
      emit("post", {
        content: message.value,
        attachment: picture.value,
      });

      console.log("se dispatchea");

      message.value = "";
      picture.value = "";
    };

    const handleUploadSuccess = async (snapshot, $picture) => {
      picture.value = await downloadPicture($picture);
      isUploadingPicture.value = false;
    };

    const handleUploadError = (err) => {
      console.error(err);
      isUploadingPicture.value = false;
    };

    const handleUpload = ({ files }) => {
      isUploadingPicture.value = true;

      storePicture({
        picture: files[0],
        handleError: handleUploadError,
        handleSuccess: handleUploadSuccess,
      });
    };

    const removePicture = () => (picture.value = "");

    return {
      ...props,
      message,
      picture,
      isActionDisabled,
      isUploadingPicture,
      dispatchPost,
      handleUpload,
      removePicture,
    };
  },
};
</script>
<style lang="scss">
.editor {
  .hidden {
    display: none;
  }
}
</style>
