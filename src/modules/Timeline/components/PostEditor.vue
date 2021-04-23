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
                    :disabled="!message"
                    class="button is-info"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
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
  methods: {
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
          time: Date.now(),
        },
      };
      this.$emit("submit", payload);
      this.message = "";
    },
  },
};
</script>
