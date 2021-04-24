export default {
  orderedPosts(state) {
    const copyPosts = [...state.posts];

    return copyPosts.sort((a, b) => {
      return b.content.time - a.content.time;
    });
  },

  formatedPostCount(state) {
    const postAhead = state.postCount - state.posts.length;
    if (postAhead > 9) {
      return "+9";
    }
    if (postAhead < 0) {
      return 0;
    }
    return postAhead;
  },
};
