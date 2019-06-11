import types from './types';

export default {
    [types.LOGIN_ACTION] (state, user) {
        
        state.user = user;
        state.auth = {
            is: true,
            uid: user.uid,
        }
    },
    [types.LOGOUT_ACTION] (state) {
        state.user = {
            photoURL: '',
            email: '',
        };
        state.auth = {
            is: false,
            uid: null,
            unauthorized: false,
        };
    }
}
