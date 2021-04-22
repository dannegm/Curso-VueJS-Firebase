<template>
  <div class="timeline">
    <Container>
      <h1>Timeline</h1>
      <PostEditor @submit="onPostCreate" />
      <PostList :posts="orderedPosts" />
    </Container>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

import Container from "./components/Container";
import PostEditor from "./components/PostEditor";
import PostList from "./components/PostList";

export default {
  name: "Timeline",
  components: {
    Container,
    PostEditor,
    PostList,
  },
  computed: {
    ...mapState("timeline", ["posts"]),
    ...mapGetters("timeline", ["orderedPosts"]),
  },
  methods: {
    ...mapActions("timeline", ["createPost"]),
    onPostCreate(payload) {
      this.createPost(payload);
    },
  },
};
</script>
