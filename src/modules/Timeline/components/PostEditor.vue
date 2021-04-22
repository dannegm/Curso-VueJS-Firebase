<template>
  <div class="post-editor">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <form @submit.stop.prevent="onSubmit">
            <textarea
              class="textarea"
              v-model="message"
              placeholder="¿Qué estás pensando? ..."
            ></textarea>
            <br />
            <button :disabled="!message" class="button is-info" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "PostEditor",
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
          name: "Homer Simpson",
          username: "CosmeFulanito",
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
