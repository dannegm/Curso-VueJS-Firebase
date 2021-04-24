<template>
  <div class="post-list">
    <template v-for="post in posts" :key="post.id">
      <PostCard
        :post-id="post.id"
        :author-name="post.author.name"
        :author-username="post.author.username"
        :author-photo="post.author.photoURL"
        :message="post.content.message"
        :picture="post.content.picture"
        :time="post.content.time"
      />
    </template>
  </div>
</template>

<script>
import PostCard from "./PostCard";

export default {
  name: "PostList",
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.post-list {
  margin-top: 1rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: nowrap;
}
</style>
