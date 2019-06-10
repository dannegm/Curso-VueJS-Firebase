import types from './types';

export default {
    [types.SET_POSTS] (state, posts) {
        state.posts = posts
    }
}
