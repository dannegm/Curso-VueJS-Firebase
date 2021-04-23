<template>
  <div class="timeline">
    <Navbar :user="cleanUser" :routes="routes" @logout="requestLogout" />
    <Container>
      <PostEditor :user="cleanUser" @submit="onPostCreate" />

      <template v-if="!!error">
        <br />
        <div class="notification is-danger">
          <button class="delete" @click.once="cleanError"></button>
          {{ error }}
        </div>
        <br />
      </template>
      <PostList :posts="orderedPosts" />
    </Container>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

import Navbar from "@/shared/layout/Navbar";
import Container from "./components/Container";
import PostEditor from "./components/PostEditor";
import PostList from "./components/PostList";

export default {
  name: "Timeline",
  components: {
    Navbar,
    Container,
    PostEditor,
    PostList,
  },
  data() {
    return {
      routes: [
        {
          path: "/",
          display: "Inicio",
          name: "home.root",
        },
      ],
    };
  },
  computed: {
    ...mapState("timeline", ["error"]),
    ...mapGetters("timeline", ["orderedPosts"]),
    ...mapGetters("login", ["cleanUser"]),
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    ...mapActions("timeline", ["getPosts", "cleanError", "createPost"]),
    ...mapActions("login", ["requestLogout"]),
    onPostCreate(payload) {
      this.createPost(payload);
    },
  },
};
</script>
