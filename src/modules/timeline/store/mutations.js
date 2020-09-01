import types from './types';

export default {
    [types.SET_POSTS](state, posts) {
        state.posts = posts;
    },
    [types.POST_COUNTER](state, counter) {
        state.postCounter = counter;
    },
};
