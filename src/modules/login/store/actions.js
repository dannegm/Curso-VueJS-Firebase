import types from './types';
import router from '@/state/router';
import { firebase, db, auth } from '@/shared/services/firebase/config';

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

export default {
    async checkLogin({ dispatch }) {
        await auth.onAuthStateChanged(async (user) => {
            if (!!user) {
                dispatch('registerUser', user);
            } else {
                dispatch('requestOut', user);
            }
        });
    },
    async registerUser({ commit }, user) {
        const userModel = {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
        };

        await db.collection('users').doc(userModel.uid).set(userModel);
        commit(types.LOGIN_ACTION, userModel);
        router.push({
            name: 'timeline',
        });
    },
    async requestGoogleLogin() {
        return await auth.signInWithPopup(GoogleAuthProvider);
    },
    async requestOut({ commit }) {
        commit(types.LOGOUT_ACTION);
        await auth.signOut();
    },
};
