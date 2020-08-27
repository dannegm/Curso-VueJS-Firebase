import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    auth: {
        is: false,
        uid: null,
    },
    user: {
        photoURL: '',
        email: '',
    },
};

export default {
    state,
    module: {
        namespaced: true,
        state,
        actions,
        mutations,
        getters,
    },
};
