import types from './types';

export default {
    [types.CREATE_POST] (state, post) {
        state.posts.push(post)
    }
}
