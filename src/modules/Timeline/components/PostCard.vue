<template>
  <div class="post-card animate__animated animate__fadeInDown">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" :src="authorPhoto" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-3">{{ authorName }}</p>
            <p class="subtitle is-6">{{ authorUsername }}</p>
          </div>
        </div>

        <div class="content">
          {{ message }}

          <template v-if="picture">
            <div class="picture">
              <br />
              <figure>
                <img :src="picture" />
              </figure>
              <br />
            </div>
          </template>
          <br />
          <time datetime="time">{{ computedDateTime }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "PostCard",
  props: {
    postId: {
      type: String,
      required: true,
    },
    authorPhoto: {
      type: String,
      default: "#",
    },
    authorName: {
      type: String,
      default: "Desconocido",
    },
    authorUsername: {
      type: String,
      default: "unknown",
    },
    message: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedDateTime() {
      return moment(this.time).format("MMM Do, 'YY @ h:mm a");
    },
  },
};
</script>
