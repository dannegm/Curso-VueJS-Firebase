import { createStore, createLogger } from 'vuex';
import VuexPersistence from 'vuex-persist';

// Global store
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

// Module stores
import { Stores } from '@/modules/config';

const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

const plugins = (debug) => {
    let plugins = [vuexLocal.plugin];
    if (debug) plugins.unshift(createLogger());
    return plugins;
};

const state = {};

export default createStore({
    modules: {
        ...Stores,
    },
    plugins: plugins(debug),
    strict: debug,
    state,
    getters,
    actions,
    mutations,
});
