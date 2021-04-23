export default {
  cleanUser(state) {
    const { displayName, email, photoURL, uid } = state.user;
    return {
      displayName,
      email,
      photoURL,
      uid,
    };
  },
};
