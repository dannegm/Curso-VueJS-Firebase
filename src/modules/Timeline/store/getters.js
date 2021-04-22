export default {
  orderedPosts(state) {
    const copyPosts = [...state.posts];

    return copyPosts.sort((a, b) => {
      return b.content.time - a.content.time;
    });
  },
};
