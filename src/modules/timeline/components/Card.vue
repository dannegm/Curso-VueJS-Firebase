<template>
  <div class="card">
    <div class="card animated fadeInDown">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" :src="author.photoURL" />
            </figure>
          </div>
          <div class="media-content">
            <div class="author">
              <strong>{{ author.name }}</strong>
              <time class="has-text-grey" :datetime="datetime">
                {{ date }} @ {{ hour }}
              </time>
            </div>
            <div class="content">
              {{ content }}
            </div>

            <figure v-if="picture !== undefined">
              <img :src="picture" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, computed, reactive } from "vue";
import moment from "moment";
export default {
  name: "Card",
  props: {
    uid: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
    },
  },
  setup(props) {
    const time = reactive({
      date: computed(() => moment(props.timestamp).format("MMM Do YYYY")),
      hour: computed(() => moment(props.timestamp).format("h:mm a")),
      datetime: computed(() => moment(props.timestamp).toISOString()),
    });

    return {
      ...toRefs(props),
      ...toRefs(time),
    };
  },
};
</script>
<style scoped lang="scss">
.card {
  time {
    font-size: 0.8em;
  }
}
</style>
