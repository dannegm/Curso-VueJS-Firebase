<template>
  <div class="post-editor">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" :src="user.photoURL" />
            </figure>
          </div>
          <div class="media-content">
            <form @submit.stop.prevent="onSubmit">
              <div class="columns">
                <div class="column">
                  <textarea
                    class="textarea"
                    v-model="message"
                    placeholder="¿Qué estás pensando? ..."
                  ></textarea>
                </div>
              </div>
              <div class="columns">
                <div class="column buttons">
                  <button
                    :disabled="!canPublish"
                    class="button is-info"
                    type="submit"
                  >
                    Enviar
                  </button>
                  <input
                    ref="filePicker"
                    class="hidden"
                    type="file"
                    accept="image/*"
                    @change="onChangeFile"
                  />
                  <button
                    class="button is-default"
                    :class="exploreButtonClassBuilder"
                    :disabled="!canPublish"
                    @click.prevent="$refs.filePicker.click()"
                  >
                    Explorar Imágenes
                  </button>
                </div>
              </div>

              <template v-if="!!picture.url">
                <div class="columns">
                  <div class="column is-half">
                    <figure class="image">
                      <a class="delete" @click="cleanPictureURl"></a>
                      <img :src="picture.url" />
                    </figure>
                  </div>
                </div>
              </template>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapActions, mapState } from "vuex";
export default {
  name: "PostEditor",
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapState("timeline", ["picture"]),

    canPublish() {
      return !!this.message || !this.picture.isUploading;
    },

    exploreButtonClassBuilder() {
      return {
        "is-loading": this.picture.isUploading,
      };
    },
  },
  methods: {
    ...mapActions("timeline", ["storePicture", "cleanPictureURl"]),
    onChangeFile(event) {
      const [picture] = event.target.files;
      this.storePicture({ picture });
    },

    onSubmit() {
      const payload = {
        id: nanoid(),
        author: {
          name: this.user.displayName,
          username: this.user.email,
          uid: this.user.uid,
          photoURL: this.user.photoURL,
        },
        content: {
          message: this.message,
          picture: this.picture.url,
          time: Date.now(),
        },
      };
      this.$emit("submit", payload);
      this.message = "";
      this.cleanPictureURl();
    },
  },
};
</script>
<style lang="scss">
.post-editor {
  .hidden {
    display: none;
  }
}
</style>
