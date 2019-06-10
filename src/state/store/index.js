import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import createLogger from 'vuex/dist/logger'

// Global store
import actions from './actions'
import mutations from './mutations'

// Module stores
import { Stores } from '@/modules/config'

Vue.use (Vuex)

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug => {
    let plugins = [
        createPersistedState ({
            key: 'store'
        })
    ]
    if (debug) plugins.unshift(createLogger())
    return plugins;
}

const state = {

}

export default new Vuex.Store ({
    modules: {
        ...Stores
    },
    plugins: plugins(debug),
    strict: debug,
    state,
    actions,
    mutations
})
